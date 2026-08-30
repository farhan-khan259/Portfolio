import { Certification, Education, Experience, Project, SocialLink } from "@/types";

export const PERSONAL_INFO = {
    name: "Muhammad Farhan",
    firstName: "Muhammad",
    lastName: "Farhan",
    initials: "MF",
    title: "Full Stack Web Developer",
    subtitle: "Software Engineer",
    tagline: "Building responsive, scalable, and user-focused web applications from polished frontend experiences to reliable backend APIs.",
    description:
        "Full Stack Web Developer with hands-on experience building responsive, scalable, and user-focused web applications across the frontend and backend. Skilled in React.js, Next.js, Vue.js, TypeScript, Node.js, Express.js, Python, MongoDB, MySQL, Firebase, and REST API development. Experienced in translating business requirements and UI/UX designs into production-ready applications, integrating APIs, managing databases, implementing authentication, and deploying applications to VPS and AWS environments.",
    email: "itsfarhan259@gmail.com",
    phone: "+92 3390490934",
    location: "Kohat, Pakistan",
    availability: "Open to full-stack web development opportunities",
    resumeUrl: "/Muhammad_Farhan_Full_Stack_Web_Developer_CV.pdf",
    githubUrl: "https://github.com/ahmedosm0",
    linkedinUrl: "https://linkedin.com/in/ahmedusman050",
    stats: [
        { label: "Focus", value: "Full-Stack Development" },
        { label: "Stack", value: "React + Node.js" },
    ],
    highlights: [
        "Responsive web applications",
        "RESTful API development",
        "Database design and integration",
        "AWS and VPS deployment",
    ],
};

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        position: "Freelance Full Stack Web Developer",
        company: "Upwork & Independent Client Projects",
        location: "Remote",
        duration: "Apr 2025 - Present",
        responsibilities: [
            "Developing tailored full-stack web applications for global clients using React.js, Next.js, Node.js, and Express.js.",
            "Designing, developing, and integrating custom RESTful APIs, backend microservices, and database schemas (MongoDB/MySQL).",
            "Implementing secure user authentication workflows, payment gateways, and responsive frontend architectures.",
            "Deploying and maintaining client applications on AWS and VPS environments with continuous performance optimization.",
        ],
    },
    {
        id: 2,
        position: "Full Stack Web Developer",
        company: "DevK System",
        location: "Pakistan",
        duration: "Nov 2024 - Mar 2025",
        responsibilities: [
            "Developed and maintained full-stack web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB.",
            "Built responsive frontend interfaces and RESTful backend APIs, integrating frontend components with database-driven services.",
            "Implemented reusable components, authentication workflows, API integrations, and performance-focused solutions.",
            "Collaborated with team members to deliver reliable, maintainable, and user-friendly web applications.",
        ],
    },
    {
        id: 3,
        position: "Frontend Web Developer",
        company: "NIC (National Incubation Center KUST)",
        location: "Pakistan",
        duration: "May 2024 - Oct 2024",
        responsibilities: [
            "Developed responsive web applications for startup and incubation initiatives using modern frontend technologies.",
            "Translated UI/UX designs and business requirements into clean, accessible, and user-friendly web interfaces.",
            "Optimized interfaces for responsiveness, cross-browser compatibility, usability, and maintainability.",
        ],
    },
    {
        id: 4,
        position: "Frontend Intern",
        company: "Brandora",
        location: "Pakistan",
        duration: "Jan 2023 - Jun 2023",
        responsibilities: [
            "Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.",
            "Applied best practices for responsive design, cross-browser compatibility, and performance optimization.",
            "Worked closely with UI/UX designers to translate wireframes and design concepts into functional web pages.",
        ],
    },
];

export const SKILLS = {
    languages: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Bootstrap 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
    ai: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
    ],
    backend: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    frontend: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
        { name: "VPS", icon: "https://cdn.simpleicons.org/linux/FCC624" },
        { name: "AWS", icon: "/assets/skills/aws.svg" },
        { name: "Deployment & Hosting", icon: "https://cdn.simpleicons.org/vercel/000000" },
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
        degree: "BS Software Engineering",
        institution: "Kohat University of Science & Technology (KUST)",
        location: "Kohat, Pakistan",
        status: "2023 - 2027 (7th Semester)",
    },
    {
        id: 2,
        degree: "FSc Pre-Engineering",
        institution: "Fazaia Inter College Kohat (FIC Kohat)",
        location: "Kohat, Pakistan",
        status: "2021 - 2023",
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

export const FOOTER_TEXT = "Open to full-stack web development and software engineering opportunities.";
