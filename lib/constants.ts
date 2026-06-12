import { Certification, Education, Experience, Project, SocialLink } from "@/types";

export const PERSONAL_INFO = {
    name: "Ahmed Usman",
    firstName: "Ahmed",
    lastName: "Usman",
    initials: "AU",
    title: "AI/ML Engineer",
    subtitle: "AI Product Development, LLM Apps & RAG",
    tagline: "Building AI products that combine LLMs, LangGraph, FastAPI, retrieval, automation, and strong user-facing product execution.",
    description:
        "AI/ML Engineer focused on AI product development across production-grade LLM applications, RAG systems, agentic workflows, voice automation, and applied computer vision. I work across backend architecture, model orchestration, integrations, and product-facing frontend delivery to ship AI software that is reliable, scalable, and actually useful to end users.",
    email: "ahmadusman050@gmail.com",
    phone: "+92 335 0707006",
    location: "Pakistan",
    availability: "Open to AI/ML, LLM, and backend engineering opportunities",
    resumeUrl: "/Ahmed's_resume.pdf",
    githubUrl: "https://github.com/ahmedosm0",
    linkedinUrl: "https://linkedin.com/in/ahmedusman050",
    stats: [
        { label: "Focus", value: "AI Products" },
        { label: "Stack", value: "LangGraph + FastAPI" },
    ],
    highlights: [
        "AI product development",
        "Production LLM systems",
        "RAG and agent orchestration",
        "Voice agents and automation",
    ],
};

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        position: "Associate AI Engineer",
        company: "Tech Emulsion",
        location: "Pakistan",
        duration: "Jul 2025 - Present",
        responsibilities: [
            "Design and deploy LLM-powered conversational agents, RAG pipelines, and automation workflows for production AI products.",
            "Build backend services and integrations using Python, Django, FastAPI, n8n, AWS, and third-party APIs.",
            "Collaborate with product, engineering, and operations teams to deliver scalable AI systems from concept to deployment.",
        ],
    },
    {
        id: 2,
        position: "AI/ML Engineer",
        company: "DevK System",
        location: "Pakistan",
        duration: "Aug 2024 - Jun 2025",
        responsibilities: [
            "Built LLM applications including RAG systems, autonomous agents, and agentic workflow prototypes.",
            "Designed and deployed machine learning systems with attention to latency, scalability, and maintainability.",
            "Applied MLOps practices including Dockerized deployment, CI/CD workflows, and model monitoring.",
        ],
    },
    {
        id: 3,
        position: "Back-End Developer",
        company: "Brandora",
        location: "Pakistan",
        duration: "Sep 2022 - Jul 2024",
        responsibilities: [
            "Developed REST APIs using Node.js, Express.js, and MongoDB for production web backends.",
            "Integrated backend services with React frontends to support reliable application data flow.",
            "Implemented authentication, reusable modules, and query optimization across application features.",
        ],
    },
];

export const SKILLS = {
    languages: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
    ai: [
        { name: "LangGraph", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
        { name: "OpenAI", icon: "/assets/skills/openai.svg" },
        { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic/191919" },
        { name: "Pinecone", icon: "/assets/skills/pinecone.svg" },
        { name: "ChromaDB", icon: "https://www.trychroma.com/favicon.ico" },
        { name: "Whisper", icon: "/assets/skills/whisper.svg" },
        { name: "pgvector", icon: "/assets/skills/pgvector.svg" },
    ],
    backend: [
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
        { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/010101" },
    ],
    frontend: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "TanStack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
        { name: "Zustand", icon: "https://zustand-demo.pmnd.rs/favicon.ico" },
    ],
    infra: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "/assets/skills/aws.svg" },
        { name: "Railway", icon: "https://cdn.simpleicons.org/railway/0B0D0E" },
    ],
    automation: [
        { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
        { name: "Twilio", icon: "/assets/skills/twilio.svg" },
        { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/95BF47" },
        { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
        { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853" },
        { name: "Buffer", icon: "https://cdn.simpleicons.org/buffer/231F20" },
    ],
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "AVL Copilot",
        description: "A production multimodal RAG and technical-support copilot for the audio, video, and lighting industry, built to help field technicians troubleshoot equipment, retrieve manuals, and diagnose issues from text and images.",
        tech: ["FastAPI", "LangGraph", "Pinecone", "Redis", "Supabase", "Stripe", "OpenAI"],
        liveUrl: "https://avlcopilot.com",
        status: "completed",
        highlights: [
            "Built a strictly sequential LangGraph pipeline with semantic cache, intent detection, RAG, routing, web search, and SSE streaming.",
            "Implemented dynamic token budgets, per-user quotas, live observability endpoints, and multimodal image diagnostics.",
        ],
    },
    {
        id: 2,
        title: "The Meatery AI Platform",
        description: "An internal operations and AI voice-agent platform for a US premium-meat e-commerce brand, combining analytics, CRM automation, inventory logic, and self-improving Retell AI call workflows.",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Retell AI", "n8n", "Shopify"],
        liveUrl: "https://themeatery.com/?srsltid=AfmBOorEduXoKb1Q8hZzLfSjCoR87_8A-rF8JhmL2RYL4Po4_q9wzaoP",
        status: "completed",
        highlights: [
            "Engineered inbound and outbound voice-agent workflows with live cart lookup, discount generation, SMS delivery, and call safety guardrails.",
            "Built nightly transcript-analysis automations that used Claude to generate rebuttals, battle cards, and prompt-improvement recommendations.",
        ],
    },
    {
        id: 3,
        title: "Good Food Project",
        description: "A full-stack AI content engine for a UK organic food brand with human-in-the-loop review, brand-grounded content generation, image matching, and scheduled publishing.",
        tech: ["FastAPI", "Supabase", "LangGraph", "Next.js 15", "React 19", "Cloudflare R2"],
        liveUrl: "https://frontend-production-97c4.up.railway.app/login",
        status: "completed",
        highlights: [
            "Created an async job-based generation pipeline with provider routing, token-cost controls, and RAG over brand knowledge.",
            "Delivered reviewer workflows, quote-image composition, image editing, and automated publishing through Buffer.",
        ],
    },
    {
        id: 4,
        title: "LinkedIn Outreach Automation Platform",
        description: "A vision-driven automation platform that runs a real-time LinkedIn outreach pipeline from scraping and enrichment through AI note generation and connection sending.",
        tech: ["FastAPI", "React 19", "Supabase", "Playwright", "Qwen", "DashScope"],
        status: "completed",
        highlights: [
            "Built a three-tier AI decision cascade to handle LinkedIn UI variants using action-bar snapshots, screenshots, and deterministic label scanning.",
            "Implemented multi-tenant sessions, retries, cancellation, resume flows, and connection analytics.",
        ],
    },
    {
        id: 5,
        title: "Lost-N-Find",
        description: "A mobile AI lost-and-found platform with claim scoring, admin review, realtime notifications, and semantic matching for noisy or incomplete item descriptions.",
        tech: ["FastAPI", "Supabase", "React Native", "Expo", "WebSockets", "Mistral"],
        status: "completed",
        highlights: [
            "Combined deterministic matching with LLM semantic scoring to improve claim verification quality.",
            "Added real-time updates, JWT auth, item matching, and graceful AI fallback behavior.",
        ],
    },
    {
        id: 6,
        title: "WhatsApp Freight Agent",
        description: "A multimodal AI freight-procurement workflow that automates RFQ intake, vendor outreach, quote collection, follow-up, and booking confirmation from WhatsApp conversations.",
        tech: ["n8n", "WhatsApp API", "OpenAI", "Whisper", "Gmail API", "Google Sheets"],
        status: "completed",
        highlights: [
            "Handled text, voice, PDF, and cargo-image inputs in one operational workflow.",
            "Reduced token cost by replacing redundant LLM calls with keyword routing, code-based extraction, and templates.",
        ],
    },
    {
        id: 7,
        title: "Weapon Detection System",
        description: "A real-time computer vision system for weapon detection using webcam frames, confidence-scored bounding boxes, and immediate alerting.",
        tech: ["YOLOv8", "OpenCV", "ONNX", "FastAPI"],
        status: "completed",
        highlights: [
            "Trained a custom YOLOv8 detector on labeled weapon classes and exported it to ONNX for lightweight inference.",
            "Built a FastAPI-based inference flow with real-time visual detection and alerting.",
        ],
    },
    {
        id: 8,
        title: "Face Recognition Attendance Logger",
        description: "A full-stack face-recognition attendance system for onboarding, live check-in, analytics, and admin workflows.",
        tech: ["FastAPI", "OpenCV", "face_recognition", "DeepFace", "SQLite", "Plotly"],
        status: "completed",
        highlights: [
            "Implemented employee records, expression-assisted capture, attendance export, and reset flows.",
            "Added admin CRUD, OTP-based password reset, and attendance analytics by employee, date, and department.",
        ],
    },
];

export const EDUCATION: Education[] = [
    {
        id: 1,
        degree: "B.S. Electrical Computing & Communication Engineering",
        institution: "University of Engineering and Technology, Peshawar",
        location: "Peshawar, Pakistan",
        status: "Completed",
    },
];

export const CERTIFICATIONS: Certification[] = [
    { id: 1, name: "Machine Learning Specialization", issuer: "Coursera", date: "Completed" },
    { id: 2, name: "Deep Learning Specialization", issuer: "Coursera", date: "Completed" },
    { id: 3, name: "Machine Learning in Production", issuer: "Coursera", date: "Completed" },
    { id: 4, name: "TensorFlow for AI, ML and DL", issuer: "Coursera", date: "Completed" },
    { id: 5, name: "Generative AI with LangChain and Hugging Face", issuer: "Udemy", date: "Completed" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: "GitHub", url: PERSONAL_INFO.githubUrl, icon: "github" },
    { name: "LinkedIn", url: PERSONAL_INFO.linkedinUrl, icon: "linkedin" },
    { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "email" },
];

export const FOOTER_TEXT = "Open to AI product, LLM engineering, and backend-focused collaboration.";
