# AVL Copilot — AI Technical-Support Copilot for the Audio/Video/Lighting Industry
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A production multi-modal RAG and agentic support copilot for the live-events Audio/Video/Lighting industry — field technicians ask it troubleshooting questions, send photos of their gear, or ask for a manual, and a LangGraph pipeline routes each query through a semantic cache, a Pinecone manual index, and a dual-provider web search to return an accurate, cost-controlled answer."

---

## 2. The 30-Second Pitch

> "AVL Copilot is a support assistant for audio, video, and lighting technicians — the people running sound, screens, and lighting rigs at live events. They're often on-site with broken gear and no time to dig through 300-page PDF manuals. So I built a chatbot that triages the problem, pulls the right facts from a vector index of equipment manuals, and falls back to live web search for specs or to find an official manual link. It's multi-modal — a tech can photograph a rack of gear and it'll start diagnosing. The interesting engineering is underneath: it's a LangGraph agent with cognitive routing that decides *per query* whether to hit the cache, the manuals, or the web; a two-tier semantic cache to keep latency and cost down; and per-user token budgets with Stripe billing. It's live in production at avlcopilot.com."

---

## 3. The Architecture (2-Minute Version)

**Backend — Python / FastAPI / LangGraph**
- The core is a **LangGraph state machine** built as a *strictly sequential* pipeline (no parallel LLM calls) with conditional edges. The flow is: **check cache → summarize history → identify intent → RAG search → route query → (web search **or** direct) → main LLM**.
- **Cognitive routing** (`route_query`) is heuristic, not an LLM call — it inspects the query for triage/repair signals, manual/doc requests, knowledge questions, or hard specs, and decides whether to go to the web or straight to the model. This saves an LLM round-trip and keeps routing deterministic.
- A **dual-tier semantic cache** sits at the front: a small **hot cache** (LangCache) for popular queries and a larger **cold cache** (Redis) for everything. Lookups are by **cosine similarity** of query embeddings (not exact match), entries promote from cold → hot after a hit threshold, and — importantly — responses are only cached **after a user gives positive feedback**, so only verified-good answers get reused.
- **RAG** runs over **Pinecone** (`avl-manuals` index, `text-embedding-3-small`, 1536-dim, cosine), returning scored chunks that gate whether web search is even needed.
- The **web-search layer is dual-provider**: **Serper** primary (with a monthly-quota guard) and **ScraperAPI** fallback, page content extracted via **Jina Reader**, all wrapped in a **circuit breaker**, a security **domain allowlist**, and a heuristic that boosts official manufacturer support/download pages.
- **Multi-modal image diagnostics**: a two-stage flow — a cheap **nano vision model** writes a detailed visual description, then the **main model** diagnoses using description + image. Results are saved to Supabase and recallable by number ("show me image 2").
- **Tiered model routing** via the OpenAI **Responses API**: **GPT-5.1** for final generation, **GPT-5-nano** for cheap intermediate steps (summarizing history, rewriting search queries, summarizing web content).

**Cost & quota control**
- **Dynamic token budgeting**: a complexity detector classifies each query as basic/normal/technical and assigns input/output token caps and a max RAG-chunk count. Context is then selected by **priority (RAG > web > history) with no mid-string truncation** — it includes whole context blocks that fit the budget and skips the rest.
- Per-step **token usage and USD cost** are tracked, aggregated per turn, and written to **Supabase profiles**; a **quota service** blocks users who run out of tokens.

**Billing & persistence — Supabase + Stripe**
- **Supabase** holds the LangGraph **checkpointer** (persistent conversation state), user profiles, feedback, and image responses.
- **Stripe** handles subscription billing with webhook ingestion and a customer-portal session endpoint; a FastAPI dependency gates every chat/image request on subscription + token status.

**Observability & ops**
- Circuit-breaker state endpoint, metrics endpoints (latency percentiles, search-provider stats), slowapi rate limiting, CORS, a `/health` check that pings every dependency, auto-ingestion endpoints (PDF/URL → Pinecone), and a **live SSE log-viewer UI** for watching production logs in real time.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "Making a non-deterministic LLM system behave predictably *and* cheaply. A naive RAG chatbot either over-calls the web (slow, expensive) or under-calls it (wrong on specs). My answer was the **cognitive routing layer** — a heuristic router that decides per query whether the answer should come from the model's own knowledge, the manual index, or live web search. For example, a vague 'it's not working' triggers a short triage response asking for brand/model rather than a giant guide; a 'where can I find the manual' always goes to web with a query rewrite; a 'what is DMX' stays in the model. On top of that I layered the dual-tier cache and dynamic token budgets so repeat questions are basically free and every call has a hard cost ceiling."

### Q: Why a strictly sequential LangGraph pipeline instead of parallel calls or a single prompt?
> "Two reasons: debuggability and cost control. Each node has one job — summarize history, detect intent, retrieve, route, search, generate — so when an answer is wrong I can see exactly which step produced it and fix that node in isolation. Sequential also lets each stage *gate* the next: RAG score decides whether web search runs at all, so I'm not paying for searches I don't need. A single mega-prompt would be cheaper in calls but impossible to reason about, and I'd lose the ability to short-circuit (cache hit ends the graph immediately, a history question never touches RAG)."

### Q: How does the dual-tier semantic cache work, and why two tiers?
> "Every query gets embedded, and I do a **cosine-similarity** lookup rather than exact string match — so 'how do I fix no audio on a DiGiCo' hits the same entry as 'DiGiCo no sound fix'. The **cold tier** (Redis, large) holds everything; the **hot tier** (LangCache, small/fast) holds queries that have been hit many times, promoted automatically once they cross a hit-count threshold. The key design decision is **what** gets cached: I only write a response to the cache when a user thumbs-up the answer. That means the cache is a library of *verified* answers, not a pile of whatever the model said first — which matters a lot when the answers are safety-relevant electrical and rigging guidance."

### Q: How do you control LLM cost?
> "Three mechanisms stacked. First, **tiered models** — the expensive GPT-5.1 only runs for the final answer; all the plumbing steps (history summary, query rewrite, web summarization, image pre-description) run on GPT-5-nano. Second, **dynamic token budgets** — I classify query complexity and cap input/output tokens and RAG-chunk counts accordingly, and I select context by priority without truncating mid-block so I never send half a manual page. Third, **the cache and routing** kill redundant LLM and web calls entirely. Every turn's per-step token cost is computed and persisted, and a quota service hard-stops users who exhaust their allocation."

### Q: How does the multi-modal image analysis work?
> "It's a two-stage flow to balance quality and cost. Stage one sends the (resized) image to a cheap **nano vision model** with a computer-vision-specialist prompt that produces a detailed description of the AVL gear and its visible state. Stage two sends that description *plus* the image to the **main model**, which does the actual diagnosis and is told not to re-describe the scene. There's also a 'support intake mode' — if a user sends only an image with no question, it gives a one-line description and asks three targeted intake questions instead of dumping an equipment inventory. Every analysis is saved to Supabase with an image number so the user can later say 'tell me about image 3'."

### Q: How is the web search made reliable?
> "Defense in depth. It's **dual-provider** — Serper is primary with a monthly-quota counter, and it fails over to ScraperAPI automatically on error or quota exhaustion. The whole thing is behind a **circuit breaker** so a flapping provider doesn't take the request path down. Results pass through a **domain allowlist** security filter before anything is fetched, page extraction uses **Jina Reader** to get clean markdown, fetches run in parallel with a timeout, and there's a heuristic that re-ranks official manufacturer support/download pages to the top — because for this audience the manufacturer's own manual is almost always the right source."

### Q: How do you handle conversation memory and history questions?
> "State is persisted with a custom **Supabase checkpointer** for LangGraph, so conversations survive restarts and scale beyond one instance. For 'what did we discuss' style questions, intent detection routes to a dedicated history handler that pulls recent checkpoints and summarizes them with the nano model — and it prunes more aggressively for basic-tier queries to save cost. There's also a lighter per-turn conversation summary fed into the main prompt so the model has recent context without resending the full transcript."

### Q: Is it production, and how is it deployed?
> "Yes — it's live at avlcopilot.com. FastAPI with SSE streaming, Supabase for state and auth, Stripe for billing, Redis and Pinecone as managed services. There's a `/health` endpoint that pings every dependency (agent, Supabase, both Redis tiers, Pinecone), slowapi rate limiting, CORS locked to the production domains, circuit-breaker and metrics endpoints, and a live log-streaming UI so I can watch production behavior in real time."

### Q: What would you improve or do differently?
> "A few things. The cache similarity scan currently iterates keys in Redis — fine at the current scale, but I'd move to a proper vector index (Redis Vector Search or Pinecone) as the cache grows. The provider-quota counters and circuit-breaker state are in-memory, so they reset on restart and don't share across instances — those belong in Redis for horizontal scaling. And I'd add automated answer-quality evaluation rather than relying solely on user thumbs-up to decide what gets cached."

### Q: What was your specific contribution / role?
> "I built it end to end — the LangGraph agent and all its nodes, the cognitive routing logic, the dual-tier semantic cache, the Pinecone RAG layer, the dual-provider web-search service with the circuit breaker and domain allowlist, the multi-modal image pipeline, the dynamic token-budgeting and cost/quota system, and the FastAPI surface including Stripe billing, the Supabase checkpointer, ingestion, and the observability endpoints."

---

## 5. Key Terms to Drop Naturally

`LangGraph sequential agent` · `cognitive query routing` · `dual-tier semantic cache (hot/cold, cosine similarity)` · `cache-on-positive-feedback` · `RAG over Pinecone` · `dual-provider web search (Serper + ScraperAPI)` · `circuit breaker` · `domain allowlist` · `Jina Reader extraction` · `multi-modal two-stage image diagnosis` · `dynamic token budgeting` · `priority-based context selection (no truncation)` · `tiered model routing (GPT-5.1 + GPT-5-nano)` · `OpenAI Responses API` · `Supabase LangGraph checkpointer` · `Stripe subscription + token quotas` · `SSE streaming`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Backend** | Python, FastAPI, LangGraph, LangChain, Pydantic, Uvicorn, slowapi |
| **LLMs / AI** | OpenAI Responses API (GPT-5.1 + GPT-5-nano), text-embedding-3-small, multi-modal vision |
| **RAG / Vector** | Pinecone (`avl-manuals`), tiktoken token budgeting |
| **Cache** | Dual-tier Redis (hot LangCache + cold Redis), cosine-similarity semantic cache |
| **Web Search** | Serper (primary) + ScraperAPI (fallback), Jina Reader, Trafilatura, circuit breaker, domain allowlist |
| **Database / State** | Supabase (PostgreSQL) — LangGraph checkpointer, profiles, feedback, image responses |
| **Billing** | Stripe (subscriptions, webhooks, customer portal), per-user token quotas + cost tracking |
| **Observability** | Circuit-breaker + metrics endpoints, `/health` dependency checks, live SSE log viewer, structured logging |
| **Ingestion** | PDF / URL auto-ingestion into Pinecone (pypdf, trafilatura, OCR via pytesseract) |
