# IMTA WhatsApp Freight Agent — Multimodal AI Freight-Procurement Automation
### Interview Explainer & Q&A

> A cheat sheet for talking about this project in interviews. Read the pitch, then skim the Q&A so you can answer follow-ups confidently in your own words.

---

## 1. One-Line Summary

> "A production WhatsApp-native AI agent that automates the entire freight-quote procurement lifecycle for a shipping company — a customer sends a message (text, voice, PDF, or photo), the agent collects the shipment details, emails the right carriers, parses their quotes back out of email attachments, chases non-responders, and confirms the booking — all built as a single 60-node n8n workflow."

---

## 2. The 30-Second Pitch

> "It's an AI procurement assistant for a freight forwarder (IMTA Shipping). Their workflow was painfully manual: a customer would WhatsApp a shipping request, and a human had to type up an RFQ, email a dozen carriers one by one, wait for quotes to trickle back as PDF and Excel attachments, manually compare them, and confirm a booking. I automated that whole loop inside WhatsApp. The agent accepts text, voice notes, packing-list PDFs, or cargo photos; it collects the six shipment fields it needs; it blasts a templated RFQ to all the vendors; it reads their replies — including the pricing buried in attachments — into a structured sheet; it follows up with whoever went quiet; and it sends the booking-confirmation email when the customer picks a carrier. Google Sheets is the database, Gmail is the channel to vendors, and WhatsApp is the channel to the customer."

---

## 3. The Architecture (2-Minute Version)

**Platform — n8n (60-node workflow)**

The whole system is an orchestrated n8n workflow rather than a hand-written backend — chosen so the freight team can see and tweak the logic visually.

**Phase 1 — Multimodal intake**
- A WhatsApp Business trigger receives every inbound message; a `Switch` routes by message type.
- **Text** goes straight to the agent. **Voice** notes are downloaded and transcribed with **OpenAI Whisper**. **PDF** documents (packing lists) are downloaded and parsed with an Extract-from-File node. **Images** of cargo/documents are described by **GPT-4o-mini vision**.
- All four paths normalise into plain text for the agent — so a voice note and a typed message are handled identically downstream.

**Phase 2 — The conversational agent**
- A central tool-calling **AI agent** (OpenAI chat model + windowed conversation memory) drives the dialogue. It collects the six required shipment fields (terms, volume, POL/POD route, cargo details, readiness date, required ETA) and asks for everything missing in one turn.
- It exposes **custom code tools**: *Create RFQ* (mints a unique RFQ ID + structured JSON), *Request Follow-up*, and *Request Booking*. Tool calls are how the agent triggers the downstream business flows.

**Phase 3 — Create-RFQ flow (token-optimized)**
- A code node detects which action the agent took and a `Switch` routes to the right branch.
- New RFQs are appended to the **Google Sheets** "RFQs" tab (the system of record), then a **template** code node drafts the vendor email — no LLM call.
- Vendor contacts are pulled from a sheet, looped in batches (to dodge rate limits), emailed via **Gmail**, and the RFQ status is updated to "Quote Sent."

**Phase 4 — Quote ingestion**
- A Gmail node fetches replies for an RFQ **with attachments downloaded**. A code node filters for pricing docs (PDF/Excel/CSV), Extract-from-File pulls the text, and a single focused LLM call structures the rate, transit time, vessel, surcharges, and validity into a Vendor-Quotes sheet — then summarises it back to the customer on WhatsApp.

**Phase 5 — Follow-up & Booking flows**
- **Follow-up:** pulls the vendor list and the received replies, a code node **diffs them to find non-responders**, and templated reminder emails go only to the vendors who went silent.
- **Booking:** when the customer selects a carrier, a template builds the booking-confirmation email, sends it via Gmail, and advances the RFQ to `Booked`.

---

## 4. Likely Interview Questions & Answers

### Q: What was the most challenging part of this project?
> "Two things. First, **getting vendor pricing out of email attachments** — carriers don't reply with clean structured data, they attach a PDF or an Excel rate sheet. So I had to download attachments through the Gmail node, filter for the pricing-relevant ones, extract the text, and run a focused LLM call to turn that into structured fields I could store and compare. Second, **cost control** — the original version made three LLM calls for every single RFQ and even ran a full LLM extraction on greetings and menu taps. I re-architected it so the LLM is only used where it earns its keep."

### Q: You mention a big token/cost optimization — what exactly did you do?
> "The first version leaned on the LLM for everything — a giant system prompt resent on every message, a separate extraction agent that ran on *every* response, and an LLM email drafter. I replaced three things with deterministic code: a **keyword intent router** that classifies the message before any LLM touches it (so a 'menu' tap costs zero tokens), **code-based extraction** that reads the tool's structured output instead of asking a second LLM to re-parse it, and **template-driven email drafting** instead of an LLM writing each email. That cut the create-RFQ flow by about 76% and the track/analyze flows by about half. The principle is: only spend a model call on genuine natural-language reasoning, never on routing or formatting."

### Q: Why n8n instead of writing a normal backend service?
> "The client is a freight forwarder, not a software shop — they wanted to *see* and adjust the automation, and they needed it integrated with tools they already live in: WhatsApp, Gmail, and Google Sheets. n8n gives you those integrations out of the box and a visual graph the business can reason about. It also let me iterate fast — the project went through several versions, and being able to rewire nodes visually made that cheap. For the pieces n8n couldn't express cleanly — intent routing, attachment filtering, non-responder diffing, email templating — I dropped into custom JavaScript code nodes."

### Q: Why is Google Sheets the database? Isn't that fragile?
> "It's a deliberate trade-off for this client. Sheets is their existing system of record — the procurement team already reads and edits RFQ data there, so making it the database means zero training and full transparency for them. For the volume a single freight desk handles, it's perfectly adequate. If it needed to scale or support concurrent writers, the migration path is obvious — move the RFQs, Vendor-Quotes, and Bookings tabs into Postgres — and because the flows already treat the sheet as a clean data layer, swapping it wouldn't touch the agent logic."

### Q: How does the multimodal handling actually work?
> "The WhatsApp trigger gives me the message type, and a Switch fans out into four lanes. Voice notes get the binary downloaded and run through Whisper. PDFs get downloaded and passed to an Extract-from-File node — useful because customers often send packing lists. Images go to GPT-4o-mini's vision model, which describes the cargo or document. Every lane converges back to plain text, so the agent doesn't care *how* the request arrived — a voice note about a 20-foot container is treated exactly like the same request typed out."

### Q: How does the agent decide between creating an RFQ, following up, and booking?
> "It's a tool-calling agent. It has three custom code tools — Create RFQ, Request Follow-up, Request Booking — and it calls the appropriate one based on the conversation. After the agent runs, a code node detects which tool fired and a Switch node routes execution down the matching branch. So the LLM handles the *intent and field collection*, but the actual side-effects — writing to sheets, sending emails — are deterministic n8n nodes, which keeps them reliable and auditable."

### Q: How do you find which vendors haven't responded?
> "The follow-up flow pulls two lists — the full vendor contact list for that RFQ, and the senders of every reply email Gmail returns for that RFQ ID. A code node diffs them: anyone on the vendor list who isn't in the set of responders is a non-responder. Those get a templated reminder email; if everyone has replied, the flow short-circuits and just tells the customer that on WhatsApp."

### Q: What would you improve or do differently?
> "I'd add an **analyze/compare** step that ranks the collected vendor quotes and recommends the best all-in rate, rather than just listing them. I'd move the RFQ data off Sheets into Postgres once volume justifies it. And I'd add a scheduled trigger so follow-ups can fire automatically after, say, 48 hours of silence instead of only on demand. I'd also add proper observability — right now diagnosing a failed run means reading the n8n execution log."

### Q: What was your specific contribution / role?
> "I built the whole workflow end to end across several iterations — the multimodal intake routing, the tool-calling agent and its custom tools, the cost-optimization rewrite (intent router, code extraction, email templates), the Gmail attachment-parsing pipeline, and the follow-up and booking flows. I also wrote the technical documentation and the architecture analysis that drove the v3/v4 redesign."

---

## 5. Key Terms to Drop Naturally

`n8n workflow automation` · `WhatsApp Business API` · `multimodal intake (Whisper / vision / PDF extraction)` · `tool-calling agent` · `RFQ procurement lifecycle` · `keyword intent router` · `token-cost optimization` · `code nodes vs LLM calls` · `Gmail attachment parsing` · `Google Sheets as system of record` · `non-responder diffing` · `templated email drafting`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Orchestration** | n8n (60-node workflow, custom JavaScript code nodes) |
| **LLMs** | OpenAI (chat agent), GPT-4o-mini (vision), Whisper (speech-to-text) |
| **Channels** | WhatsApp Business API (customer), Gmail (vendors) |
| **Data** | Google Sheets (RFQs, Vendor Quotes, Bookings, vendor contacts) |
| **Document AI** | Extract-from-File (PDF/Excel attachment parsing) |
| **Patterns** | Tool-calling agent, intent router, template-based generation, batched sends |

---

## 7. The RFQ Lifecycle (one diagram to remember)

```
Customer (WhatsApp: text / voice / PDF / image)
        │  normalise to text (Whisper / vision / extract)
        ▼
  Tool-calling AI Agent  ──Create RFQ──► Sheets("RFQs") ─► template email ─► batch Gmail to vendors ─► status: Quote Sent
        │                                                                                                     │
        ├──Request Follow-up──► diff vendors vs repliers ─► templated reminders to non-responders             │
        │                                                                                                     ▼
        └──Request Booking────► booking-confirmation email ─► status: Booked        Gmail replies (w/ attachments)
                                                                                          │ parse PDF/Excel pricing
                                                                                          ▼
                                                                                   Sheets("Vendor Quotes") ─► summarise to customer

  Status lifecycle:  Under Observation → Quote Sent to Suppliers → Booked
```
