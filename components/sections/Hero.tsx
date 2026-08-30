"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, Download, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { UpworkIcon } from "@/components/ui/UpworkIcon";
import { PERSONAL_INFO } from "@/lib/constants";

const featuredLogos = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "AWS", icon: "/assets/skills/aws.svg" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 pt-24 text-foreground transition-colors duration-500"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.15),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.03),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.03),_transparent_40%)]" />

            <div className="section-container relative z-10 py-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.4fr_0.8fr]"
                >
                    <div>
                        <motion.p
                            variants={item}
                            className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary"
                        >
                            Full Stack Web Developer
                        </motion.p>

                        <motion.div variants={item} className="mb-6 space-y-2">
                            <h1 className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[clamp(3.5rem,11vw,8rem)] leading-[0.9]">
                                <span className="font-serif font-light italic text-foreground/85">
                                    {PERSONAL_INFO.firstName}
                                </span>
                                <span className="font-sans font-black tracking-[-0.06em]">
                                    {PERSONAL_INFO.lastName}
                                </span>
                            </h1>
                            <h2 className="max-w-4xl text-[clamp(1.4rem,4vw,3rem)] font-semibold tracking-[-0.04em] text-foreground/85">
                                {PERSONAL_INFO.title}
                                <span className="mx-3 hidden text-primary sm:inline">/</span>
                                <span className="font-serif font-light italic text-primary">
                                    {PERSONAL_INFO.subtitle}
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={item}
                            className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
                        >
                            {PERSONAL_INFO.tagline}
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 backdrop-blur">
                                <MapPin className="h-4 w-4 text-primary" />
                                {PERSONAL_INFO.location}
                            </span>
                            <span className="rounded-full border border-border bg-background/70 px-4 py-2 backdrop-blur">
                                {PERSONAL_INFO.availability}
                            </span>
                        </motion.div>

                        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                            <a href="#projects">
                                <Button className="rounded-full px-7 py-3.5 text-sm">
                                    View Projects
                                    <ArrowDownRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full px-7 py-3.5 text-sm">
                                    Download CV
                                    <Download className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </motion.div>

                        <motion.div variants={item} className="mt-10">
                            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-muted-foreground">
                                Main Stack
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                {featuredLogos.map((logo) => {
                                    const invertInDark = false;

                                    return (
                                        <div
                                            key={logo.name}
                                            className="glass-card flex items-center gap-3 rounded-full px-4 py-2.5"
                                        >
                                            <img
                                                src={logo.icon}
                                                alt={logo.name}
                                                className={`h-5 w-5 object-contain ${invertInDark ? "dark:invert" : ""}`}
                                            />
                                            <span className="text-sm font-medium text-foreground/85">{logo.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div variants={item} className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.14),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.12),_transparent_24%)]" />
                        <div className="relative">
                            <div className="mb-8 flex justify-center">
                                <div className="relative flex h-[18rem] w-[18rem] items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-background to-accent/20 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                                    <div className="absolute inset-3 rounded-full border border-border/60" />
                                    <div className="relative h-full w-full overflow-hidden rounded-full border-[10px] border-background/90 bg-secondary/50 shadow-xl">
                                        <Image
                                            src="/assets/muhammad-farhan-profile.png"
                                            alt={PERSONAL_INFO.name}
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm font-bold uppercase tracking-[0.35em] text-muted-foreground">
                                Focus
                            </p>
                            <p className="mt-3 text-lg leading-8 text-foreground/90">
                                Full-stack web development across responsive interfaces, backend APIs, databases, authentication, and cloud deployment.
                            </p>

                            <div className="mt-8 grid gap-3">
                                {PERSONAL_INFO.stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3"
                                    >
                                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                                        <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <a
                                    href={PERSONAL_INFO.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={PERSONAL_INFO.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
                                    aria-label="Upwork"
                                >
                                    <UpworkIcon className="h-5 w-5 rounded-md" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
