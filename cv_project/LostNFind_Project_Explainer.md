# Lost-N-Find — AI Campus Lost & Found System
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A full-stack mobile lost-and-found platform for university campuses where claimants prove ownership through an AI-scored Q&A verification flow, high-confidence claims auto-approve, and everything else routes to an admin for review."

---

## 2. The 30-Second Pitch

> "Campus lost-and-found is usually a paper log and a notice board — there's no way to verify that the person claiming an item actually owns it. So I built a digital system around a verification workflow. When someone finds an item, they set one or two security questions only the real owner would know. When a claimant wants it back, they go through a conversational Q&A, and a hybrid engine scores their answers — exact rule matching plus an LLM that judges semantic meaning. If the score is high enough it auto-approves; otherwise an admin reviews it. Once a claim is approved, a private chat unlocks so the two people can coordinate the physical handoff. It's a React Native app on top of a FastAPI + Supabase backend with real-time notifications."

---

## 3. The Architecture (2-Minute Version)

**Backend — Python / FastAPI / Supabase (Postgres)**
- Clean layered design: **Routers → Controllers → Services**, with FastAPI dependency injection for auth (`get_current_user`, `require_admin`).
- The core is the **claim verification service**: it runs a conversational Q&A session (stored in `claim_verification_sessions`), then scores answers with a **hybrid engine**.
- **Hybrid scoring** = `max(rule_score, ai_score)`. The rule score is a deterministic exact-match ratio (fast, free, zero API). The AI score comes from **Mistral via OpenRouter**, which handles typos, synonyms, and numeric variants like "five thousand" == "5000". If the LLM call fails, it gracefully falls back to the rule score alone.
- An **item-matching algorithm** cross-references lost vs. found items using `SequenceMatcher` text similarity plus an LLM similarity score; matches above a 0.75 threshold notify both parties.
- **Location prediction**: a simple frequency model suggests likely drop-off locations per item category.
- **Real-time** via FastAPI **WebSockets** — notifications are persisted to the DB (authoritative) and pushed live (best-effort), with optional SMTP email.
- **Auth**: JWT (python-jose), PBKDF2-SHA256 password hashing.

**Frontend — React Native / Expo / TypeScript**
- 5-tab navigation (Home feed, My Claims, Post Item, Messages, Account) over a native stack.
- Interactive **claim conversation screen** (chat-style, one question at a time), **handoff chat** for post-approval messaging, an **admin dashboard** for reviewing borderline claims, and unread badge counters driven by an `is_read` flag.
- Single typed `apiClient` over `fetch` with runtime base-URL detection for emulators/devices.

**Database — Supabase (Postgres)**
- Item lifecycle: `found → matched → claimed`. Claim lifecycle: `pending → review_needed → approved/rejected`.
- One handoff thread per approved claim (`UNIQUE` on `claim_id`); the schema enforces invariants (one-like-per-user, self-chat prevention) at the DB level.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "The verification engine. The whole point of the app is trust — letting the wrong person claim an item is worse than the convenience the app provides. A pure exact-match check is too brittle: a real owner writes 'navy' when the answer was 'dark blue', or '5000' when the founder wrote 'five thousand', and they'd fail. But a pure LLM check is non-deterministic and can be gamed or just wrong. So I combined them — exact rule matching for speed and certainty, an LLM semantic score for real-world variation, and I take the **max** of the two. On top of that, only very high scores (≥0.95) auto-approve; everything else goes to a human admin. That layering is what makes it both usable and safe."

### Q: Why a hybrid rule + LLM score instead of just the LLM?
> "Three reasons. **Determinism** — a perfect literal answer should always pass, regardless of LLM mood. **Cost and latency** — the rule check is free and instant, so I don't pay for an API call when the answer already matches exactly. And **resilience** — if OpenRouter is down or returns malformed JSON, the system still works on the rule score alone instead of failing the claim. The LLM is there to be generous about phrasing, not to be the single point of truth."

### Q: How do you prevent fraud / someone claiming an item that isn't theirs?
> "Several layers. The founder sets security questions, and the answers are the ground truth — they're **never returned to the claimant**, so they can't see what to type. Claimants can't claim their own items (`claimant_id != founder_id`). The auto-approve bar is deliberately high at 0.95, so anything ambiguous escalates to admin review. And contact info is gated — the handoff chat only unlocks **after** a claim is approved, so a stranger can't message the founder by just opening a claim."

### Q: How does the LLM scoring actually work end to end?
> "When the claimant submits their final answer, the service builds a JSON payload of the expected question/answer pairs and the submitted ones, and sends it to Mistral with a system prompt that says: focus on semantic meaning, treat written numbers as equal to digits, don't penalize typos, return strict JSON `{\"score\": number}`. I parse that, clamp it to 0–1, and compare it against the rule score. The prompt is engineered to return *only* JSON so parsing is reliable, and there's a try/except fallback if it doesn't."

### Q: How does the lost↔found item matching work?
> "An admin triggers a matching run. For every unmatched lost/found pair, I compute a local text-similarity ratio with Python's `SequenceMatcher` over the combined fields — title, category, description, location — and also ask the LLM how likely the two reports describe the same physical object. I take the max, and if it clears 0.75 I record the match and notify both reporters. Same hybrid philosophy as claim scoring: cheap deterministic signal plus a smarter semantic one."

### Q: How are the real-time notifications built?
> "A single `notification_service.push()` does three things: it always inserts a row into the notifications table — that's the authoritative, persistent record — then it fires a best-effort WebSocket push to any connected device for that user, then an optional SMTP email. The WebSocket and email failures are suppressed so they can never break the core flow. On the frontend, an `is_read` flag drives the unread badges — the bell counts all unread, the Messages tab counts only unread chat messages, and opening either screen marks them read."

### Q: Why did you use the Supabase service-role key on the backend?
> "Because it's a trusted server-side API that has to read and write on behalf of any user. The anon key is subject to Row Level Security, which was actually blocking access to the notifications and claims tables. The service-role key bypasses RLS, which is correct for a backend — the authorization happens in my own service layer (JWT + role checks), not in the database policies."

### Q: What would you improve or do differently?
> "A few things. The WebSocket endpoint takes the user_id in the URL with no auth — fine for a campus prototype, but I'd want to authenticate the socket with the JWT. I'd skip the LLM call entirely when the rule score is already 1.0, since it's a guaranteed pass — a small cost optimization I left on the table. And the `feature_vector` column is reserved for real image-embedding matching, which would be a stronger signal than text similarity for visually distinctive items."

### Q: What was your specific contribution / role?
> "I built the whole thing end to end — the FastAPI backend (auth, the layered service architecture, the hybrid scoring and matching engines, the WebSocket notification pipeline), the Supabase schema, and the React Native frontend including the claim conversation flow, admin dashboard, and handoff chat."

---

## 5. Key Terms to Drop Naturally

`hybrid scoring (rule + LLM)` · `semantic verification` · `human-in-the-loop / admin review` · `auto-approval threshold` · `fraud-prevention design` · `graceful LLM fallback` · `WebSocket real-time notifications` · `JWT auth` · `Supabase / Postgres + RLS` · `SequenceMatcher item matching` · `layered architecture (router/controller/service)`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Backend** | Python, FastAPI, Uvicorn, Pydantic |
| **LLM / AI** | Mistral via OpenRouter (claim scoring + item matching), SequenceMatcher, frequency-based location prediction |
| **Database** | Supabase (PostgreSQL), PostgREST, service-role access |
| **Auth** | JWT (python-jose), PBKDF2-SHA256 (passlib + bcrypt) |
| **Real-time** | FastAPI WebSockets, optional SMTP email |
| **Frontend** | React Native 0.81, Expo, React 19, TypeScript, React Navigation |
| **Infra** | Supabase cloud (DB + Storage), idempotent schema bootstrap on startup |
