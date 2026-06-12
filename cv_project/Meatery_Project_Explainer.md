# The Meatery — E-Commerce Intelligence & AI Voice-Agent Platform
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A production analytics-and-operations platform for a US premium-meat e-commerce brand that unifies margin monitoring, inventory automation, and marketing attribution with an AI-powered voice-agent CRM — where Retell AI agents call customers, a separate 'Voice Brain' server gives them real-time tools, and an n8n + Claude loop continuously retrains the agents from their own call transcripts."

---

## 2. The 30-Second Pitch

> "It's the internal operating system for an e-commerce meat brand. On the analytics side it tracks profit margins and COGS per order, automates inventory reordering off sales velocity, and pulls marketing data from Google Ads, GA4, and Klaviyo into one dashboard. The part I'm most proud of is the AI voice CRM: the dashboard triggers Retell AI agents to call customers — abandoned-cart recovery, win-backs, post-delivery check-ins — and a separate 'Voice Brain' server gives those agents live tools, like looking up a customer's real Shopify cart or generating and texting a discount code mid-call, all with strict safety caps. And it's self-improving: every night n8n workflows feed yesterday's call transcripts to Claude, which writes new objection rebuttals and prompt tweaks and syncs them straight into the agents' knowledge bases."

---

## 3. The Architecture (2-Minute Version)

**Two cooperating services**
- **The Dashboard** (`dashboard-margin-monitor-2`) — Next.js 14 / TypeScript / Prisma / PostgreSQL. This is the control plane: UI, analytics, API routes, call initiation, and webhook ingestion.
- **The Voice Brain** (`meatery-retell-callback`) — a standalone Node/Express server that Retell agents call *during* a live conversation to execute real-world actions (check stock, create a discount, send an SMS).

**The voice-call lifecycle (the core flow)**
1. **Trigger** — the dashboard (manually or via automation) picks a target, fetches the customer's name/phone/cart, checks the **Do-Not-Call list**, writes an `in_progress` row to `crm_call_log`, then tells Retell Cloud to place the call.
2. **Conversation** — Retell dials the customer and runs the AI agent. When the agent needs to *do* something, it calls the Voice Brain, which talks to Shopify/Klaviyo/Twilio and returns a result ("discount sent").
3. **Aftermath** — on hang-up Retell sends a **webhook** back to the dashboard with the transcript, recording, and sentiment. The dashboard updates the call log, updates the customer record, and can fire a Klaviyo follow-up (e.g. if it hit voicemail).
4. **Learning loop** — n8n workflows analyze the stored transcripts with Claude and push improvements back into the Retell knowledge bases.

**The self-improving agent system (n8n + Claude)**
- A suite of scheduled n8n workflows runs nightly/weekly: an **Objection Rebuttal Generator** (mines winning phrases from successful calls), a **Prompt Optimizer** (compares best vs. worst calls), a **Pattern Detective** (finds hidden correlations), **Competitive Intelligence** (auto-builds battle-cards from competitor mentions), and an **Agent-KB Auto-Mapping** job that attaches the right knowledge bases to the right agents.
- Outputs land in dedicated tables (`ai_generated_rebuttals`, `ai_prompt_recommendations`, `ai_pattern_insights`, `kb_mapping_log`) and are synced into Retell.

**Other major surfaces**
- **Concierge shopping agent** — an LLM agent (`/api/concierge/agent-stream`, NDJSON streaming) that asks one short question per turn, then returns **exactly 3 real, in-stock product links** pulled from a deterministic recommendations API — the model never fabricates URLs.
- **AI product-content generation** — bulk SEO titles/tags/metafields for the product catalog with field-specific prompts and confidence scoring.
- **Margin Monitor** — per-order COGS/profit with custom-cost overrides.
- **Inventory reorder** — state-level velocity drives reorder recommendations.
- **Pricing experiments** — GrowthBook-driven A/B price testing with exposure tracking.
- **Competitor spy** — Puppeteer/Cheerio price scraping and matching.

**Database — PostgreSQL (Prisma)**
- Products, orders/line-items (with COGS), customers (RFM), inventory + velocity, price changes/exposures, `crm_call_log` / call outcomes, competitor snapshots, automation settings, and the AI-learning tables above.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "The voice-agent system, because it spans three places that all have to stay in sync — the dashboard that initiates the call, Retell Cloud where the conversation actually happens, and the Voice Brain server that executes tools mid-call. The hard problem wasn't any single piece; it was making the whole loop reliable and safe. For example, abandoned-cart customers were getting called up to four times in two hours because an n8n workflow was hitting the Retell API directly with no guardrails. I fixed it by routing every call through a single `initiate-call` API that enforces the DNC list, a 24-hour per-number cooldown, and checkout-ID duplicate prevention — so there's one front door with all the safety checks instead of several uncontrolled ones."

### Q: How does the 'Voice Brain' work, and why is it a separate server?
> "It's a standalone Express server that Retell agents call through function/tool calls during a live conversation. When the agent says 'let me send you a discount,' it hits the Voice Brain, which creates a real Shopify discount code, texts it via Twilio, and returns confirmation — all in the few seconds of the call. I kept it separate from the dashboard because its concerns are different: it's a low-latency, stateless tool executor for the agent, whereas the dashboard is the heavyweight analytics and UI app. Splitting them also means the call-time path doesn't depend on the dashboard being up, and it's the natural seam for making the system multi-tenant later."

### Q: How do you keep the discount tool from being abused?
> "Several layers. Discounts are tier-based on spend history — 10% standard, up to 15% for VIPs — and there's a **hard 15% cap enforced at multiple levels**, so even if the model is talked into more, the server refuses. On top of that there's adversarial-input filtering for manipulation attempts, anomaly detection for coordinated abuse, and a 'core behavior lock' so the essential rules can't be overridden by prompt injection. The principle is that the LLM proposes, but the server is the source of truth and the enforcer."

### Q: What makes the agents 'self-improving'?
> "A nightly n8n + Claude loop. Every night the system pulls the previous day's call transcripts and runs them through Claude to do things a human coach would: extract the phrases that won deals into a rebuttal library, compare the best and worst calls to suggest prompt changes, and track which competitors got mentioned to build battle-cards. Those outputs are written to dedicated tables and auto-synced into the agents' Retell knowledge bases, and a mapping job makes sure each agent has the right KBs attached. So the agents get better from real conversations without anyone hand-editing prompts — though I kept a human in the loop for reviewing prompt changes before they go live."

### Q: How does the concierge shopping agent avoid hallucinating products or links?
> "The model is never allowed to invent URLs. It runs the conversation — one concise question per turn until it has preference, budget, and party size — but when it's ready to recommend, the *server* calls a deterministic recommendations API that only returns active, published, in-stock products with real themeatery.com links. The agent's job is the dialog and the 'why'; the catalog is the source of truth for what's actually recommendable. There's also an optional mode where the server hands the model a compact list of real candidates and asks it to pick three — but even then it's choosing from real products, not generating links."

### Q: How is margin / profitability actually calculated?
> "Per order, the system computes COGS, shipping, and discounts to get true profit, not just revenue. Shopify's cost data isn't always right, so there's a `custom_costs` table that overrides it, and costs are tracked historically so past orders stay accurate even when a product's cost changes later. That feeds the Margin Monitor and vendor-level profitability views."

### Q: Why two LLM providers (OpenAI and Anthropic)?
> "Different jobs. The nightly transcript analysis and agent-improvement workflows run on Claude because they're long-context reasoning over whole conversations. The concierge agent and product-content generation run through OpenAI. Routing by use case lets me pick the better-fit model per task and avoids locking the whole system to one vendor."

### Q: Is this production, and how is it deployed?
> "Yes. It's a Next.js app with Prisma on PostgreSQL, containerized with Docker and deployed on Railway with auto-deploys from main. The Voice Brain runs as its own service. There's Jest test coverage, and the repo enforces pre-commit code-review and security-review steps for API/webhook changes."

### Q: What would you improve or do differently?
> "The biggest piece of forward work is multi-tenancy. Right now API keys and business-specific logic — product SKUs, prompts — are effectively single-tenant. I scoped a SaaS transition: move credentials into encrypted per-organization settings, add tenant-context middleware that resolves the right keys from the incoming Retell `agent_id`, and refactor the Shopify/Retell clients to take config as arguments instead of reading the environment. The nice property is that one n8n workflow and one Retell agent can already serve many clients concurrently if you pass credentials as payload data, so the platform scales without per-client infrastructure."

### Q: What was your specific contribution / role?
> "I worked across the whole platform — the Next.js dashboard and its API/webhook layer, the Prisma/Postgres schema, the Retell call-initiation and webhook-ingestion pipeline with the DNC/cooldown/dedup safety logic, the standalone Voice Brain tool server, the n8n + Claude self-improvement workflows, and the concierge and product-content AI features."

---

## 5. Key Terms to Drop Naturally

`AI voice agents (Retell)` · `tool-calling 'Voice Brain' server` · `self-improving agents (transcript → Claude → KB sync)` · `human-in-the-loop prompt review` · `DNC / cooldown / duplicate-call guardrails` · `tier-based discount with hard cap` · `multi-provider LLM routing (OpenAI / Anthropic)` · `NDJSON streaming concierge agent` · `deterministic recommendations (no hallucinated links)` · `GrowthBook A/B pricing experiments` · `COGS / margin monitoring` · `inventory-velocity reorder automation` · `n8n automation` · `Shopify Admin GraphQL` · `multi-tenant SaaS transition`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/Radix UI, Recharts |
| **Backend** | Next.js API routes, Node.js, Express (Voice Brain), Apollo/GraphQL Yoga |
| **Database** | PostgreSQL, Prisma ORM |
| **LLMs / AI** | Anthropic (Claude), OpenAI, multi-provider routing |
| **Voice AI** | Retell AI (outbound + inbound agents), Twilio (SMS) |
| **Automation** | n8n workflows, node-cron, scheduled jobs |
| **Integrations** | Shopify Admin GraphQL, Klaviyo, Google Ads, GA4, Search Console, PostHog |
| **Experiments** | GrowthBook (A/B pricing), price-exposure tracking |
| **Scraping** | Puppeteer, Cheerio (competitor prices) |
| **Infra** | Docker, Railway, nginx |
| **Testing** | Jest, Testing Library |
