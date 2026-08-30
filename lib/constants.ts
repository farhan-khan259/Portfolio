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
    githubUrl: "https://github.com/farhan-khan259",
    linkedinUrl: "https://www.upwork.com/freelancers/~0161cb4ad10d46de94",
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
            "Implementing secure user authentication workflows, payment gateways, and responsive frontend component architectures.",
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
        position: "Frontend Web Developer",
        company: "Brandora",
        location: "Pakistan",
        duration: "Jul 2023 - Apr 2024",
        responsibilities: [
            "Developed responsive, user-friendly frontend web interfaces using React.js, JavaScript, HTML5, and CSS3.",
            "Gained foundational backend experience, working with RESTful API structures, server-side data handling, and basic database operations.",
            "Integrated frontend components with backend services while implementing responsive design principles and cross-browser support.",
        ],
    },
    {
        id: 5,
        position: "Frontend Intern",
        company: "Brandora",
        location: "Pakistan",
        duration: "Jan 2023 - Jun 2023",
        responsibilities: [
            "Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.",
            "Applied frontend best practices for responsive design, cross-browser compatibility, and performance optimization.",
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
        title: "Fleet Management & Operations System",
        description: "A full-stack fleet management platform that centralizes vehicle records, driver profiles, fuel logs, and trip schedules.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT Authentication"],
        status: "completed",
        highlights: [
            "Implemented role-based access control, document expiry alerts, maintenance history logs, and operational analytics dashboards.",
            "Designed automated notifications for preventative servicing, document renewals, and driver assignments, with documented RESTful APIs and efficient front-end data synchronization.",
            "Built a responsive React.js admin portal for monitoring active trips and generating fleet performance reports.",
        ],
    },
    {
        id: 2,
        title: "FixRight — Home Services Marketplace Admin Dashboard",
        description: "A real-time marketplace admin dashboard for centralized seller KYC verification, CNIC document approval, and service-platform operations.",
        tech: ["Firebase", "Firestore", "JavaScript", "HTML5", "CSS3", "Web App", "Real-Time Database"],
        status: "completed",
        highlights: [
            "Integrated commission rules, financial ledger tracking, seller balances, and live job and bid monitoring interfaces.",
            "Implemented granular administrative permissions for customer support, compliance, and dispute resolution staff.",
            "Used Firestore real-time listeners for immediate updates across user records and active bookings, including payouts and disputes.",
        ],
    },
    {
        id: 3,
        title: "Car Rental Management System",
        description: "A production-grade car rental platform for managing vehicle inventory, customer profiles, reservation schedules, and billing.",
        tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT Authentication", "REST APIs"],
        status: "completed",
        highlights: [
            "Designed structured PostgreSQL schemas with foreign-key relationships, transactional safety, and query optimization.",
            "Implemented booking-conflict validation and server-side dynamic price calculations.",
            "Constructed a React dashboard with operational analytics, reservation calendars, automated invoice tools, and secured administrative APIs.",
        ],
    },
    {
        id: 4,
        title: "MeetIN — Real-Time Chat & Communication Platform",
        description: "A real-time web messaging application that supports instant user-to-user communication with WebSockets and Socket.io.",
        tech: ["Next.js", "MongoDB", "Socket.io", "Node.js", "Vercel", "WebSockets", "REST APIs"],
        status: "completed",
        highlights: [
            "Built active-user presence tracking, online/offline status updates, contact management, and rich media attachment sharing.",
            "Implemented typing indicators, message delivery receipts, and chat-history search using MongoDB indexes.",
            "Deployed stable, low-latency services and developed clean mobile-responsive Next.js chat UI components.",
        ],
    },
    {
        id: 5,
        title: "SatisNation — Civil Data Analytics Platform",
        description: "A full-stack civil data analytics platform for processing, analyzing, and visualizing complex civic datasets.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs"],
        status: "completed",
        highlights: [
            "Built interactive React dashboards with filterable charts, trend summaries, and dataset management tools.",
            "Engineered MongoDB aggregation pipelines for multi-criteria filtering and civic survey-data processing.",
            "Implemented secure, role-restricted reporting tools and automated exports for custom data summaries.",
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
    { name: "Upwork", url: PERSONAL_INFO.linkedinUrl, icon: "upwork" },
    { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "email" },
];

export const FOOTER_TEXT = "Open to full-stack web development and software engineering opportunities.";
