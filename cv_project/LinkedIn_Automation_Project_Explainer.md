# LinkedIn Outreach Automation Platform — AI Vision-Driven Connection Agent
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A production full-stack platform that automates B2B LinkedIn outreach end to end — it scrapes leads from a search, enriches their profiles, writes a personalized AI connection note for each, and sends the request — with the connection step driven by a 3-tier AI cascade (accessibility-tree → vision → deterministic scan) that figures out how to connect with any profile, plus a full anti-detection layer and multi-tenant session handling."

---

## 2. The 30-Second Pitch

> "It's a LinkedIn lead-generation engine for founders doing cold outreach. You paste a LinkedIn or Sales Navigator search URL, and a 4-step pipeline runs: it scrapes the leads, visits each profile to pull their bio and experience, generates a personalized connection note with an LLM, then actually sends the connection request — all with live progress streamed to a React dashboard. The hard part isn't scraping, it's the *sending* — LinkedIn renders the Connect button about five different ways depending on the account, and it throws up InMail walls, weekly-limit modals, and 'upgrade to Premium' popups. So I built a 3-tier decision system: first I hand the AI a clean accessibility snapshot of just the profile's action bar and it tells me what to click; if that fails I screenshot the bar and use a vision model; and if both fail I fall back to a plain rule-based scan. On top of that it's stealthed to look human — randomized fingerprints, curved mouse movement, human-paced delays — and it's multi-tenant, so each user's LinkedIn session is isolated in Supabase."

---

## 3. The Architecture (2-Minute Version)

**Backend — Python / FastAPI / Playwright**
- The whole thing runs as a **4-step pipeline**, kicked off as a FastAPI background task that returns an `operation_id` immediately and streams live events over **Server-Sent Events (SSE)** so the dashboard shows real-time per-step progress.
  - **Step 1 — Scrape:** extract lead profiles from a search URL. Two scrapers — one for **Sales Navigator**, one for **standard LinkedIn search** — auto-corrected based on the URL shape.
  - **Step 2 — Enrich:** visit each profile and pull the *About* section and experience.
  - **Step 3 — Notes:** generate a personalized connection note per lead with an LLM (skippable for no-note sends).
  - **Step 4 — Connect:** send the actual connection request — the most complex stage.
- Browser automation is **Playwright** (Chromium), wrapped in a custom **stealth context** factory.

**The connection engine — a 3-tier AI decision cascade**
- For each profile, the system has to decide *what action to take* (click Connect, open the More menu, skip if already connected/pending, etc.). It does this in three tiers, escalating only on failure:
  - **Tier 1 — Accessibility snapshot + text LLM:** It calls `locator.aria_snapshot()` **scoped to just the profile action bar** — not the whole page. That gives the model a clean ~5-10 line YAML of *only* the action buttons (no nav bar, no sidebar, no post controls). A **Qwen** text model reads that and returns JSON: `{action, target_label, reason}`.
  - **Tier 2 — Vision fallback:** if Tier 1 fails, it screenshots the action-bar element and sends it to a **Qwen-VL vision model**.
  - **Tier 3 — Deterministic scan:** if both AI tiers fail, a pure string-matching scan of button aria-labels/text decides — no AI, always available.
- Once the action is known, dedicated handlers cover **every** LinkedIn connection variant: a direct Connect **button**, a Connect **link** that navigates to a full-page `/custom-invite/` form, Connect **hidden inside the More (…) menu**, and the **"Add a note?"** modal dialog.

**Edge cases LinkedIn throws — all handled explicitly**
- **InMail required:** some profiles can only be reached via paid InMail — LinkedIn shows an email-verification textbox instead of a note field. The system detects that, dismisses the dialog, and routes to a separate **InMail flow** (opens the Message composer, generates a subject + body with the LLM, sends).
- **Personalized-invite limit:** free accounts hit a cap on notes; LinkedIn shows a Premium upsell modal. The system catches it, flips a session-wide flag, and **retries the same lead without a note** — and routes all future leads to the no-note path automatically.
- **Weekly invitation limit:** detected (by the AI or a modal) and the pipeline **aborts gracefully**, leaving remaining leads untouched for next week.

**InMail credit budgeting**
- InMail credits are scarce and monthly. The system tracks consumption **in the database** (`SUM(inMail_consumed)` since the first of the month) so the count **survives server restarts**. It uses **pre-send credit consumption** — decrement first, send, and **roll back** if the send fails — so it can never over-spend credits.

**AI note generation**
- LinkedIn rejects any note over **200 characters**. So note generation is a **two-pass** flow: generate, and if it's over the limit, ask the model to rewrite shorter — with a final **smart trim** that cuts at the last sentence boundary as a safety net.
- The LLM layer rotates a **pool of 9 Qwen models** (each with a 1M-token quota on Alibaba's **DashScope**), shuffled per process and rotated on rate-limit errors, so no single model's quota exhausts first.

**Anti-detection (looking human)**
- Rotating browser fingerprints — **user-agent, viewport, locale, timezone** randomized per session.
- Injected **stealth scripts**: hide `navigator.webdriver`, fake plugins, spoof WebGL vendor/renderer (so it doesn't read as headless SwiftShader), normalize hardware concurrency/device memory.
- **Bézier-curve mouse movement** with variable speed and micro-pauses, **gaussian-distributed delays** (not flat random), human typing cadence, simulated reading/scrolling, and **60–150s waits between connections** to stay under LinkedIn's behavioral radar.

**Multi-tenancy, persistence & recovery — Supabase**
- Each user's LinkedIn session (Playwright storage state) is stored **per-user in Supabase**. In production the system **never reads the shared local `auth.json`**, preventing cross-user session contamination.
- **Per-user pipeline slots** — User A running a pipeline doesn't block User B.
- **3-strategy auth recovery** when a session expires mid-run: (1) reload the stored session, (2) re-login with stored credentials, (3) emit an SSE event and **wait up to 5 minutes** for the user to re-authenticate, then resume.
- An **idempotent cancellation manager** lets any running operation be stopped safely, and a **resume-from-send** mode skips Steps 1-3 to re-send the leads already prepared.
- Leads move through a status lifecycle: `NEW → PROFILE_SCRAPED → NOTE_READY → CONNECTION_SENT` (or `INMAIL_REQUIRED / PENDING / ALREADY_CONNECTED / SEND_FAILED`).

**Frontend — React 19 / Vite**
- Dashboard with Supabase auth, a leads table, weekly/monthly/daily connection analytics, live pipeline progress via the SSE stream, and manual session-import support.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "The connection-sending step, by a mile. Scraping is mostly a solved problem, but *sending* a connection request reliably is brutal because LinkedIn renders the Connect action in roughly five different ways and gates it behind a moving set of modals — InMail walls, weekly limits, Premium upsells. A selector-based approach breaks constantly. My answer was the **3-tier AI cascade**: I give a model a clean accessibility snapshot scoped to *just* the profile action bar, and it tells me what to click. The key insight was the **scoping** — if you snapshot the whole page, the model drowns in nav-bar and sidebar noise; scoping to the action-bar locator gives it a clean 5-line YAML and the decisions become reliable. Vision is the fallback, and a deterministic scan is the floor so it never fully fails."

### Q: Why an accessibility snapshot instead of just screenshots and a vision model?
> "Cost, speed, and reliability. The aria snapshot is text — it's cheap, fast, and unambiguous: it literally gives me the exact button label to click, like `link \"Invite Zaineb Shah to connect\"`. Vision is slower, more expensive, and fuzzier about exact labels. So I lead with the text snapshot and only escalate to the vision model when the snapshot is empty or the model can't decide. Vision is the safety net, not the default — and below that there's a pure rule-based scan so there's always *some* decision."

### Q: How do you avoid getting the account banned?
> "Two layers. First, **behavioral** — everything is paced and shaped to look human: gaussian-distributed delays instead of flat sleeps, Bézier-curve mouse movement with variable speed and the occasional tremor pause, human typing cadence, simulated reading scrolls, and long 60–150 second gaps between actual connection sends. Second, **fingerprint** — I rotate user-agent, viewport, locale and timezone per session and inject stealth scripts that hide the automation tells: `navigator.webdriver`, fake plugin arrays, spoofed WebGL vendor so it doesn't look like a headless server. And I respect LinkedIn's own limits — when it signals the weekly cap, I stop rather than push through it."

### Q: How does the InMail credit handling work, and why is it in the database?
> "InMail credits are limited and reset monthly, and over-sending wastes real money. So I track usage by summing the `inMail_consumed` column for sends since the first of the month — which means the count is **durable across server restarts**, unlike an in-memory counter that would reset and let me overshoot. The send itself is **pre-consume with rollback**: I mark the credit as consumed *before* sending, and if the send fails I reset it. That ordering guarantees I never exceed the monthly budget even if something crashes mid-send. When credits run out, those leads get marked `INMAIL_REQUIRED` and wait for the next reset."

### Q: How do you keep the connection note under LinkedIn's character limit?
> "LinkedIn hard-rejects notes over 200 characters, and LLMs are notoriously bad at hitting exact length targets. So I don't trust the model to get it right in one shot — it's a **two-pass** flow: generate, and if it's over 200, send it back asking for a shorter rewrite while keeping the tone. Then there's a deterministic **smart-trim** safety net that cuts at the last sentence boundary (falling back to a word boundary) so even if the model still overshoots, the stored note is always valid and never cut mid-word."

### Q: How is this multi-tenant and safe for concurrent users?
> "The critical thing is **session isolation**. Each user's LinkedIn session lives in a per-user Supabase row, and in production the browser context loads *only* from that row — it never touches the shared local `auth.json`, which would otherwise leak one user's logged-in session into another's scrape. Pipelines are also tracked per-user, so two users can run simultaneously without blocking each other, each with their own cancellation flag."

### Q: What happens if the LinkedIn session expires mid-pipeline?
> "There's a **3-strategy recovery** flow. First it tries to reload the stored session — sometimes the context just went stale. If that fails and I have stored credentials, it re-logs in headlessly. If *that* fails, it emits an SSE event telling the user to re-authenticate and polls for up to five minutes for a fresh session, then resumes where it left off. Throughout, leads that weren't processed stay in their pre-send status so nothing is lost — the pipeline can be safely retried or resumed."

### Q: Why Qwen / DashScope, and why a pool of nine models?
> "Qwen on Alibaba's DashScope gave me strong text *and* vision models behind one OpenAI-compatible API, which is exactly what the cascade needs. The nine-model pool is a **quota-distribution** trick: each model has its own 1M-token allowance, so instead of hammering one model until it rate-limits, I shuffle the pool per process and rotate on any rate-limit error. It spreads load across all the quotas and makes the system far more resilient to throttling during a long run."

### Q: Why SSE instead of WebSockets or polling for progress?
> "The pipeline is long-running and the data flow is one-directional — server to client progress events. SSE is the simplest correct tool for that: it's just an HTTP stream, no extra protocol, auto-reconnects, and it maps cleanly onto FastAPI's `StreamingResponse`. WebSockets would be overkill for one-way updates, and polling would be wasteful and laggy. Control actions like cancel go back over a normal POST endpoint."

### Q: What would you improve or do differently?
> "A few things. The pipeline-slot and cancellation state are in-memory per process, so they don't survive a restart or scale across multiple workers — I'd move that into Redis or the DB. I'd add a proper job queue (Celery/RQ) instead of raw `asyncio.create_task` so jobs are durable and observable. And I'd add automated evaluation of the connection notes — right now quality relies on the prompt and the two-pass trim; I'd want to score tone and personalization before they go out. Longer term, the scrapers are inherently fragile against LinkedIn DOM changes, so I'd invest in the same accessibility-snapshot approach for scraping that I used for sending."

### Q: What was your specific contribution / role?
> "I built it end to end — the FastAPI pipeline orchestration with SSE streaming, both scrapers, the profile enricher, the AI note generator with the length-control logic, and the whole connection engine: the 3-tier decision cascade, every dialog/menu/invite-page handler, the InMail flow and credit budgeting, the Premium- and weekly-limit handling, the anti-detection humanization layer, the multi-tenant Supabase session storage, and the 3-strategy auth recovery. Plus the React dashboard that consumes it."

---

## 5. Key Terms to Drop Naturally

`3-tier AI decision cascade` · `locator.aria_snapshot() scoped to the action bar` · `Qwen text + vision (DashScope)` · `Playwright stealth automation` · `Bézier-curve mouse movement` · `gaussian human delays` · `fingerprint rotation (UA/viewport/locale/timezone)` · `InMail credit budgeting (pre-consume + rollback)` · `two-pass note generation under 200-char limit` · `9-model quota-distribution pool` · `SSE real-time pipeline events` · `multi-tenant Supabase session isolation` · `3-strategy auth recovery` · `idempotent cancellation` · `lead status lifecycle`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Backend** | Python, FastAPI, Uvicorn, asyncio |
| **Browser automation** | Playwright (Chromium), custom stealth context, Bézier mouse + humanized timing |
| **LLMs / AI** | Qwen text models + Qwen-VL vision (Alibaba DashScope, OpenAI-compatible API), 9-model rotation pool |
| **Decision engine** | 3-tier cascade: aria-snapshot → vision screenshot → deterministic label scan |
| **Database / State** | Supabase (PostgreSQL) — per-user sessions, leads, InMail credit tracking, search history |
| **Realtime** | Server-Sent Events (SSE) for live pipeline progress |
| **Resilience** | 3-strategy auth recovery, idempotent cancellation manager, resume-from-send, per-user pipeline slots |
| **Frontend** | React 19, Vite, React Router, Supabase Auth, axios |
| **Anti-detection** | Rotating fingerprints, WebGL/navigator stealth scripts, gaussian delays, LinkedIn rate-limit awareness |

---

## 7. The Pipeline & Connection Cascade (one diagram to remember)

```
Search URL (Sales Navigator / standard)
        │
   ┌────┴─────────────────────────────────────────────────────────┐
   │  4-STEP PIPELINE  (FastAPI background task → SSE progress)     │
   │                                                                │
   │  1. SCRAPE ─► 2. ENRICH ─► 3. AI NOTE ─► 4. CONNECT            │
   │   leads        about/exp     ≤200 chars     (see below)        │
   └───────────────────────────────────────────────┬───────────────┘
                                                    ▼
                              ┌──── per profile: WHAT DO I CLICK? ────┐
                              │  Tier 1: aria_snapshot(action bar)    │
                              │          → Qwen text  ── fail ─┐      │
                              │  Tier 2: screenshot → Qwen-VL ─┤      │
                              │  Tier 3: deterministic scan ───┘      │
                              └───────────────────┬───────────────────┘
                                                  ▼
   click_connect ─► [button | link→/custom-invite | More-menu] ─► "Add a note?" dialog
        │                                                               │
        ├─ InMail dialog detected ──► InMail flow (subject+msg, credit budget)
        ├─ Premium-limit modal ─────► retry WITHOUT note (+ flip global flag)
        └─ Weekly-limit modal ──────► abort gracefully (keep remaining leads)

   Status:  NEW → PROFILE_SCRAPED → NOTE_READY → CONNECTION_SENT
                                              ↘ INMAIL_REQUIRED / PENDING / SEND_FAILED
```
