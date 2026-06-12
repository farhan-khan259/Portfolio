# Good Food Project — AI Social Content Engine
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A production full-stack AI platform that generates on-brand social media content for a UK organic food brand, routes every post through a human reviewer approval queue, and auto-publishes approved content to social channels on a schedule."

---

## 2. The 30-Second Pitch

> "It's a content approval engine for a UK organic meat-box brand. They wanted to scale up social media using AI, but they couldn't let unreviewed AI content go straight to their channels — brand voice and customer trust are everything for a small food brand. So I built a human-in-the-loop system: LLM agents generate post ideas grounded in the brand's voice, products, and a knowledge base; every idea lands in a reviewer queue where a human scores it; and approved posts flow into a content bank that gets scheduled and published automatically. Over time the system learns from reviewer scores and can auto-approve content it's confident about."

---

## 3. The Architecture (2-Minute Version)

**Backend — Python / FastAPI / Supabase**
- Content generation is **asynchronous**: the API kicks off a background job and immediately returns a `job_id`, so the frontend polls for status instead of hanging on a slow LLM call.
- The generation pipeline is built with **LangGraph** — a multi-node agent graph, so each step (idea generation, retrieval, image matching, quote composition) is a discrete, debuggable node with shared state.
- A **RAG retrieval layer** pulls in brand voice, product catalogue, and example posts so the generated content stays grounded and on-brand.
- The **LLM layer is provider-agnostic** — it routes between Anthropic and OpenAI based on config, each with its own rate-limiting strategy, plus token-cost tracking to enforce daily spend caps.
- **Computer vision** (OpenCV / Pillow) matches the right image to each post, and a **quote compositor** renders branded quote-cards automatically.
- Approved posts are **scheduled and published** via the Buffer API using APScheduler; assets live in **Cloudflare R2**; everything is monitored with **Sentry**.

**Frontend — Next.js 15 / React 19 / TypeScript**
- Reviewer queue with a carousel approval UX, a canvas-based image editor (**react-konva**) for tweaking visuals, server state via **TanStack Query**, and **Supabase SSR auth** for protected routes.

**Database — Supabase (Postgres)**
- Posts move through a lifecycle: `pending → approved/rejected → scheduled → posted/failed`.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "The hardest part was the **content generation pipeline** — getting consistent, genuinely on-brand output. A raw LLM call gives you generic marketing fluff. I solved it two ways: first, **RAG grounding** — every generation pulls in the brand voice guide, product catalogue, forbidden vocabulary, and real example posts as context. Second, I moved the orchestration to **LangGraph** so generation, retrieval, image matching and quote composition are separate nodes rather than one giant prompt — that made it far easier to debug *which* step produced a bad result and iterate on it in isolation. The other genuinely tricky part was the **async job system** — LLM generation can take 20–30 seconds, so I had to design around background tasks and polling instead of blocking requests, and make job state observable to the frontend."

### Q: Why human-in-the-loop instead of fully automated?
> "For a small, trust-driven brand, one off-brand or factually wrong post is more damaging than the time saved by skipping review. So the design keeps a human in control early on. But it's not *only* manual — reviewers score posts 1–10 with an optional reason, and once a reviewer establishes a confidence threshold, the system can auto-approve content that clears it. So it starts safe and progressively automates the easy cases as trust data accumulates."

### Q: How did you keep the AI output 'on-brand'?
> "Three layers. The agent prompts themselves live in **editable markdown files**, not hardcoded in Python — so brand voice can be tuned without a code deploy. Those prompts get **shared context appended at runtime**: brand voice, product catalogue, and a 'forbidden vocabulary' list. And on top of that, **RAG retrieval** injects real approved examples so the model imitates proven content rather than inventing a tone."

### Q: How do you handle LLM cost and rate limits?
> "The LLM service is abstracted behind one interface that routes between providers. Each provider has its own throttle — a semaphore caps concurrent Anthropic calls, and there's a stricter async lock for rate-limited tiers. I also track **token cost per request** and enforce a configurable **daily spend cap in USD**, so a runaway job can't blow the budget."

### Q: How is it deployed / is it production-ready?
> "Yes — it's containerized with Docker and deployed on Railway. It has **Sentry** wired in for error tracking and observability on both backend and frontend, **Cypress** end-to-end tests on the frontend, and a startup guard that validates required config before the app serves traffic."

### Q: What would you improve or do differently?
> "The job tracker is currently an in-memory dict, which is fine for a single instance but wouldn't survive a restart or scale horizontally — the next step would be moving it to Redis. I'd also add more automated evaluation of generation quality so we can catch brand-voice regressions before a human ever sees them, rather than relying purely on reviewer scores."

### Q: What was your specific contribution / role?
> "I worked across the stack on the AI generation pipeline and integration — the LangGraph agent flow, the RAG retrieval layer, the multi-provider LLM routing with cost controls, and the scheduling/publishing integration, plus connecting it all to the Next.js reviewer frontend."

### Q: How does the RAG part actually work here?
> "Brand knowledge — voice guidelines, product info, and example posts — is stored and retrieved at generation time, then injected into the agent's context. So instead of the model guessing what the brand sounds like, it's always reasoning over the brand's actual reference material. It keeps output factual about the products and consistent in tone."

### Q: Why LangGraph instead of a simple chain or a single prompt?
> "Because the workflow has real branching and multiple distinct steps — generate, retrieve, match an image, compose a quote card. A single mega-prompt is brittle and impossible to debug. LangGraph gives me a stateful graph where each node has a single responsibility, I can inspect the state between steps, and I can retry or swap one node without touching the rest."

---

## 5. Key Terms to Drop Naturally

`LangGraph` · `RAG / retrieval-grounded generation` · `human-in-the-loop` · `async background jobs + polling` · `multi-provider LLM routing` · `token-cost tracking / spend caps` · `prompt-as-config (markdown)` · `Supabase / Postgres` · `Cloudflare R2` · `Buffer API scheduling` · `Sentry observability`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Backend** | Python 3.12, FastAPI, LangGraph, Pydantic |
| **LLMs** | Anthropic (Claude), OpenAI, multi-provider routing |
| **AI/Data** | RAG retrieval, OpenCV, Pillow, NumPy, SciPy, tiktoken |
| **Database** | Supabase (PostgreSQL) |
| **Infra** | Docker, Railway, Cloudflare R2, APScheduler, Buffer API |
| **Observability** | Sentry, structlog |
| **Frontend** | Next.js 15, React 19, TypeScript, TanStack Query, Zustand, react-konva, Tailwind, shadcn/ui |
| **Testing** | pytest, Cypress |
