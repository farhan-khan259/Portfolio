"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, Boxes, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const valueCards = [
    {
        title: "Full-Stack Development",
        description: "I build complete web applications, connecting polished frontend experiences with reliable backend systems.",
        icon: BrainCircuit,
    },
    {
        title: "API & Database Integration",
        description: "I design and integrate RESTful APIs, backend services, authentication workflows, and database-driven features.",
        icon: Sparkles,
    },
    {
        title: "Deployment & Performance",
        description: "I deploy and maintain applications on AWS and VPS environments with a focus on speed and reliability.",
        icon: Boxes,
    },
];

export function About() {
    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center"
            >
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary">
                    About Me
                </p>
                <h2 className="text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white sm:text-6xl md:text-7xl">
                    Building web experiences
                    <span className="ml-3 font-serif font-light italic text-primary">that people can use</span>
                </h2>
            </motion.div>

            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.54fr_1.46fr]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card h-fit max-w-[23rem] overflow-hidden rounded-[2rem] p-8"
                >
                    <div className="relative mb-6 aspect-square w-32 overflow-hidden rounded-full border border-border/60 shadow-md">
                        <Image
                            src="/assets/muhammad-farhan-profile.png"
                            alt={PERSONAL_INFO.name}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{PERSONAL_INFO.name}</h3>
                    <p className="mt-2 text-muted-foreground">{PERSONAL_INFO.title}</p>

                    <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{PERSONAL_INFO.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{PERSONAL_INFO.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{PERSONAL_INFO.location}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card rounded-[2rem] p-8 xl:p-10"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.35em] text-muted-foreground">
                            Profile
                        </p>
                        <p className="mt-4 text-lg leading-8 text-foreground/90">
                            {PERSONAL_INFO.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {PERSONAL_INFO.highlights.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {valueCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="glass-card rounded-[2rem] p-6 xl:min-h-[18.5rem] xl:p-7"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <card.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground">{card.title}</h4>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
