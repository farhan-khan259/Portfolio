import { Project, Skill, Experience, Education, Certification, SocialLink, Testimonial } from "@/types";

// Personal Information
export const PERSONAL_INFO = {
    name: "Alex Johnson",
    title: "Full Stack Web Developer",
    subtitle: "BS Computer Science Student",
    tagline: "Building fast, scalable web applications with the MERN stack",
    description: `Full Stack Web Developer fluent in MERN Stack (React, Node, Express, MongoDB).
Passionate about crafting clean, maintainable code and delivering seamless user experiences. Constantly exploring new technologies and best practices to stay ahead in the ever-evolving web landscape.`,
    email: "alex.johnson@example.com",
    resumeUrl: "#",
};


// Experience
export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        position: "Full Stack Developer",
        company: "NovaTech Solutions",
        location: "New York, USA",
        duration: "01/2024 – Present",
        responsibilities: [
            "Architected and shipped 5+ full-stack web applications serving thousands of daily active users.",
            "Led front-end development using React and Next.js, achieving a 40% improvement in page load speed.",
            "Designed RESTful APIs with Node.js and Express, integrated with MongoDB and PostgreSQL databases.",
            "Collaborated in an Agile team of 8 engineers, participating in daily stand-ups and sprint planning.",
            "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.",
        ],
    },
    {
        id: 2,
        position: "Frontend Developer Intern",
        company: "BrightMind Digital Agency",
        location: "Remote",
        duration: "06/2023 – 12/2023",
        responsibilities: [
            "Built responsive UI components for client projects using React and Tailwind CSS.",
            "Contributed to a SaaS dashboard project, improving UI consistency and accessibility.",
            "Wrote unit tests with Jest and React Testing Library, maintaining 85%+ coverage.",
            "Worked closely with UI/UX designers to translate Figma mockups into pixel-perfect interfaces.",
        ],
    },
];

// Skills
export const SKILLS = {
    frontend: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        // { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        // { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        // { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ],

    backend: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        // { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],

    realtime: [
        { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        // { name: "WebRTC", icon: "https://www.vectorlogo.zone/logos/webrtc/webrtc-icon.svg" },
    ],

    devops: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
        { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
    ],

    ai: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "n8n", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/n8n-icon.png" },
        // { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        // { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        // { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
};

// Projects
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "SaaS Analytics Dashboard",
        description: "A full-stack analytics platform with real-time data visualization, user management, and subscription billing. Built for modern SaaS teams to monitor KPIs at a glance.",
        tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
        status: "completed",
    },
    {
        id: 2,
        title: "E-Commerce Storefront",
        description: "A high-performance online store with product filtering, cart management, secure Stripe payments, and an admin dashboard for inventory control.",
        tech: ["React", "Express.js", "MongoDB", "Stripe API", "Redux"],
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
        status: "completed",
    },
    {
        id: 3,
        title: "AI Chat Application",
        description: "A real-time AI-powered chat app with OpenAI integration, conversation history, and a sleek dark-mode UI. Supports multi-turn conversations and markdown rendering.",
        tech: ["Next.js", "TypeScript", "OpenAI API", "Socket.io", "Tailwind CSS"],
        liveUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=2070",
        status: "in-progress",
    },
];



// Education
export const EDUCATION: Education[] = [
    {
        id: 1,
        degree: "BS Computer Science",
        institution: "State University of Technology",
        location: "New York, USA",
        status: "2022 – 2026 (Ongoing)",
    },
    {
        id: 2,
        degree: "Associate's Degree in Information Technology",
        institution: "Lakewood Community College",
        location: "New Jersey, USA",
        status: "2020 – 2022 (Completed)",
    },
];

// Certifications
export const CERTIFICATIONS: Certification[] = [
    {
        id: 1,
        name: "Full Stack Web Development",
        issuer: "Codecademy Pro",
        date: "06/2023",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    },
    {
        id: 2,
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "11/2023",
        image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?auto=format&fit=crop&q=80&w=2070",
    },
    {
        id: 3,
        name: "React Developer Certification",
        issuer: "Meta via Coursera",
        date: "03/2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
    },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        icon: "linkedin",
    },
    {
        name: "Email",
        url: `mailto:${PERSONAL_INFO.email}`,
        icon: "Mail",
    },
];

// Footer
export const FOOTER_TEXT = "Open to Full Stack Developer roles and opportunities";

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        text: "Alex's ability to bridge the gap between design vision and high-performance engineering is truly impressive. He didn't just build our platform — he architected a scalable future for our product.",
        author: "MORGAN DAVIS",
        role: "CTO, NEXAFLOW LABS",
        stars: 5,
    },
    {
        id: 2,
        text: "Working with Alex was a game-changer for our team. His dedication to clean code, pixel-perfect UI, and smooth UX brought a level of polish we didn't think was achievable on our timeline.",
        author: "SOPHIA RIVERS",
        role: "PRODUCT DIRECTOR, ORBIT STUDIOS",
        stars: 5,
    },
    {
        id: 3,
        text: "Alex is one of the most reliable and skilled developers I've worked with. His problem-solving skills and attention to detail make him an invaluable asset to any engineering team.",
        author: "DANIEL FOSTER",
        role: "FOUNDER, LUMINARY DIGITAL",
        stars: 5,
    },
];
