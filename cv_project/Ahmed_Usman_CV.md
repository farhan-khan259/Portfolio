# Ahmed Usman

**AI/ML Engineer | LLM Applications | RAG | Voice Agents | MLOps**

+92 335 0707006 | ahmadusman050@gmail.com  
[github.com/ahmedosm0](https://github.com/ahmedosm0) | [linkedin.com/in/ahmedusman050](https://linkedin.com/in/ahmedusman050)

---

## Professional Summary

AI/ML Engineer specializing in production LLM applications, RAG systems, agentic workflows, voice automation, and applied computer vision. Experienced in building full-stack AI products with FastAPI, Next.js, Supabase/PostgreSQL, LangGraph, vector databases, and cloud deployment workflows. Strong record of shipping practical AI systems that combine model orchestration, retrieval, automation, monitoring, and user-facing product design.

---

## Technical Skills

- **Languages:** Python, JavaScript, TypeScript, C++
- **AI/ML:** TensorFlow, Scikit-learn, OpenCV, DeepFace, YOLOv8, U-Net, BiLSTM
- **LLM & Agent Systems:** LangChain, LangGraph, CrewAI, LangSmith, RAG, vector search, semantic caching, tool calling
- **LLM Providers:** OpenAI, Anthropic, Mistral, Groq, Qwen, DashScope, OpenRouter, Ollama, Hugging Face
- **Speech & Voice:** Whisper, Retell AI, ElevenLabs, Coqui TTS, Librosa, SciPy
- **Backend & APIs:** FastAPI, Django, Node.js, Express.js, REST APIs, WebSockets, SSE
- **Frontend & Mobile:** Next.js, React, React Native, Expo, TypeScript, TanStack Query, Zustand
- **Databases & Storage:** PostgreSQL, Supabase, MongoDB, MySQL, SQLite, Redis, Pinecone, ChromaDB, Cloudflare R2
- **Automation & Integrations:** n8n, Shopify GraphQL, Twilio, Stripe, Buffer, Gmail API, Google Sheets, Klaviyo, GA4, PostHog
- **MLOps & DevOps:** Docker, Jenkins, Git, GitHub, CI/CD, model monitoring, Sentry, Railway, AWS
- **Languages:** English (C1), German (A2)

---

## Professional Experience

### Associate AI Engineer - Tech Emulsion *(Full-time)* | Jul 2025 - Present

- Design and deploy LLM-powered conversational agents, RAG pipelines, and automation workflows for production AI products.
- Build backend services and integrations using Python, Django, FastAPI, n8n, AWS, and third-party APIs.
- Collaborate with product, engineering, and operations teams to deliver scalable AI systems from concept to deployment.

### AI/ML Engineer - DevK System *(Part-time)* | Aug 2024 - Jun 2025

- Built LLM applications including RAG systems, autonomous agents, and agentic workflow prototypes.
- Designed and deployed machine learning models with attention to latency, scalability, and maintainability.
- Applied MLOps practices including Dockerized deployment, CI/CD workflows, and model monitoring.

### Back-End Developer - Brandora *(Part-time)* | Sep 2022 - Jul 2024

- Developed REST APIs using Node.js, Express.js, and MongoDB for web application backends.
- Integrated backend services with React frontends to support reliable application data flow.
- Implemented authentication, database query optimization, and reusable API modules.

---

## Selected Projects

### Production LLM, RAG, and Agent Systems

**The Meatery - E-Commerce Intelligence & AI Voice-Agent Platform**  
*Full-stack production platform | Next.js 14, TypeScript, Prisma, PostgreSQL, Retell AI, n8n, Shopify, Twilio, OpenAI, Anthropic*

- Built a revenue-operations and analytics platform for a US premium-meat e-commerce brand, unifying margin/COGS monitoring, inventory velocity, reorder automation, marketing attribution, and AI voice-agent CRM workflows.
- Engineered Retell AI inbound and outbound calling agents for abandoned-cart recovery, win-back campaigns, prospecting, and post-delivery support, backed by an Express callback server with live Shopify cart lookup, dynamic discount generation, SMS delivery, DNC enforcement, cooldowns, and duplicate-call prevention.
- Designed nightly n8n workflows that analyze call transcripts with Claude to generate objection rebuttals, competitive battle cards, and prompt-improvement recommendations, then sync updates into agent-specific Retell knowledge bases.
- Added a streaming LLM concierge shopping agent, AI product-content generation, GrowthBook pricing experiments, competitor price scraping, and integrations with Shopify Admin GraphQL, Klaviyo, Google Ads, GA4, Search Console, and PostHog.

**AVL Copilot - AI Technical-Support Copilot for Audio, Video, and Lighting**  
*Full-stack production system | FastAPI, LangGraph, Pinecone, Redis, Supabase, Stripe, OpenAI Responses API*

- Built and deployed a multimodal RAG and agentic support assistant that helps field technicians troubleshoot AVL equipment, locate manufacturer manuals, and answer engineering questions.
- Orchestrated a strictly sequential LangGraph pipeline with semantic cache, conversation summary, intent detection, RAG, query routing, web search/direct routing, and streamed generation over FastAPI SSE.
- Implemented a dual-tier semantic cache, Pinecone retrieval, Serper/ScraperAPI web search fallback, Jina Reader extraction, circuit breakers, domain allowlisting, and manufacturer-support reranking.
- Added image diagnostics, dynamic token budgeting, tiered model routing, Supabase auth/checkpointing, Stripe billing, per-user quotas, PDF/URL manual ingestion, metrics endpoints, and a live SSE log viewer.

**Good Food Project - AI Social Content Engine**  
*Full-stack production platform | FastAPI, Supabase, LangGraph, Next.js 15, React 19, TypeScript*

- Built an AI content-generation platform for a UK organic food brand, using a LangGraph multi-node pipeline to create brand-aligned social posts with human review and approval workflows.
- Implemented FastAPI and Supabase backend services with async background jobs, multi-provider LLM routing, provider rate limits, token-cost tracking, RAG over brand knowledge, and Sentry observability.
- Added computer-vision image matching, automated quote-image composition, scheduled publishing through Buffer API and APScheduler, Cloudflare R2 asset storage, and a Next.js frontend with Supabase SSR auth.
- Delivered a canvas-based image editor with react-konva, state management with Zustand, data fetching with TanStack Query, and Cypress E2E coverage.

**LinkedIn Outreach Automation Platform - AI Vision-Driven Connection Agent**  
*Full-stack production platform | FastAPI, React 19, Supabase, Playwright, Qwen, DashScope, SSE*

- Built a B2B lead-generation platform that automates LinkedIn outreach through a real-time four-step pipeline: scrape, enrich, generate AI note, and send connection request.
- Designed a three-tier AI decision cascade using scoped action-bar snapshots, Qwen-VL element screenshots, and deterministic label scanning to handle LinkedIn UI variants and modal states.
- Implemented InMail-credit budgeting, AI connection-note generation under a 200-character limit, rate-limit retry, and model-pool rotation across nine Qwen models.
- Built multi-tenant session handling with encrypted Supabase storage, concurrent per-user pipeline slots, auth recovery, idempotent cancellation, resume-from-send mode, and connection analytics.

**Lost-N-Find - AI Campus Lost-and-Found System**  
*Full-stack mobile platform | FastAPI, Supabase, React Native, Expo, WebSockets, Mistral*

- Built a mobile lost-and-found platform with AI-powered ownership verification, admin review, real-time notifications, and post-approval claimant communication.
- Developed a hybrid claim-scoring engine combining deterministic matching with LLM semantic scoring to handle typos, synonyms, and numerical variants.
- Implemented lost-to-found item matching, category-based location prediction, JWT authentication, WebSocket notifications, and graceful AI fallback behavior.

**WhatsApp Freight Agent - Multimodal AI Freight-Procurement Automation**  
*Production automation workflow | n8n, WhatsApp Business API, OpenAI, Whisper, Gmail API, Google Sheets*

- Built a WhatsApp-native AI freight agent that automates RFQ intake, vendor outreach, quote collection, follow-ups, and booking confirmation.
- Designed a multimodal intake layer for WhatsApp text, voice transcription, PDF packing lists, and cargo images, routing all inputs into a single conversational workflow.
- Reduced token cost by replacing redundant LLM calls with keyword routing, code-based extraction, and template-driven email drafting while preserving LLM reasoning for complex cases.
- Implemented Gmail attachment ingestion, structured quote parsing, Google Sheets as the operational system of record, non-responder follow-ups, and lifecycle status updates.

### Computer Vision and Automation

**Weapon Detection System - YOLOv8**  
*Computer vision production system | YOLOv8, OpenCV, ONNX, FastAPI*

- Built a real-time weapon-detection system that processes webcam frames, draws confidence-scored bounding boxes, and triggers immediate audio alerts.
- Trained a custom YOLOv8 detector on labeled weapon/object classes, exported the model to ONNX for lightweight inference, and exposed the workflow through FastAPI.

**Face Recognition Based Employee Attendance Logger**  
*Full-stack production system | FastAPI, OpenCV, face_recognition, DeepFace, SQLite, Plotly*

- Built a face-recognition attendance system for employee onboarding and daily check-in using live camera input, face encodings, and expression-assisted capture.
- Implemented SQLite employee records, CSV attendance exports, daily/all-time reset flows, admin CRUD workflows, password reset through OTP email, and Plotly analytics by department, date range, and employee.

### Speech Processing and Voice Agents

**Speech Enhancement - Final Year Project**  
*Deep learning research project | U-Net, BiLSTM, Voice Bank, DEMAND, Gradio*

- Built a speech-enhancement model using U-Net and BiLSTM architecture on the Voice Bank and DEMAND datasets.
- Improved objective speech-quality metrics by PESQ +8.45%, STOI +1.56%, and ESTOI +12.05%; delivered a Gradio interface and published research output.

**Multi-Agent Voice Automation System - E-Commerce**  
*Voice automation | Retell AI, n8n, Node.js, Shopify APIs*

- Built four AI voice agents for prospecting, abandoned-cart recovery, win-back campaigns, and inbound support.
- Integrated voice workflows with Shopify APIs to retrieve real-time customer and order data for automated sales recovery.

**AI Health Receptionist Voice Agent**  
*Healthcare voice automation | ElevenLabs, PMS integrations, payments*

- Developed a healthcare voice agent for appointment booking, cancellation, and rescheduling.
- Integrated payment and practice-management workflows across systems including Dentally and Pabau.

**Coqui TTS - Text-to-Speech Application**  
*Speech application | Coqui TTS, Gradio*

- Built a text-to-speech app with GPU/CPU support, real-time playback, and audio download.

**Silence Removal from Audio**  
*Audio processing application | Streamlit, Python*

- Created a Streamlit app for removing silent audio segments with adjustable thresholds, waveform visualization, playback, and download support.

---

## Education

**University of Engineering and Technology, Peshawar**  
B.S. Electrical Computing & Communication Engineering

---

## Certifications

- Machine Learning Specialization
- Deep Learning Specialization
- Machine Learning in Production
- TensorFlow for AI, ML and DL
- Complete Generative AI Course with LangChain and Hugging Face
