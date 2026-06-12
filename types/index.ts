export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    highlights?: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    status?: "completed" | "in-progress";
}

export interface Skill {
    name: string;
    icon: string;
}

export interface SkillsData {
    languages: Skill[];
    ai: Skill[];
    backend: Skill[];
    frontend: Skill[];
    infra: Skill[];
    automation: Skill[];
}

export interface Experience {
    id: number;
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    status: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    image?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    stars: number;
}
