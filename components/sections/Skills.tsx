"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tabs = [
    { key: "languages", label: "Frontend" },
    { key: "ai", label: "Backend" },
    { key: "backend", label: "Databases & Cloud" },
    { key: "frontend", label: "DevOps & Tools" },
];

export function Skills() {
    const [activeTab, setActiveTab] = useState("languages");

    return (
        <section id="skills" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center"
            >
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary">
                    Core Stack
                </p>
                <h2 className="text-[2.8rem] font-bold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-[4.2rem] md:text-[5.4rem]">
                    Tools behind the
                    <span className="ml-3 font-serif font-light italic text-primary">systems I ship</span>
                </h2>
            </motion.div>

            <div className="mb-14 flex flex-wrap justify-center gap-3 px-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={cn(
                            "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                            activeTab === tab.key
                                ? "bg-zinc-950 text-white shadow-lg dark:bg-white dark:text-zinc-950"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mx-auto max-w-6xl px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
                    >
                        {SKILLS[activeTab as keyof typeof SKILLS]?.map((skill) => {
                            const isInvertedInDark = [
                                "Next.js",
                                "Express.js",
                                "Railway",
                                "OpenAI",
                                "Anthropic",
                                "Expo",
                                "n8n",
                                "WebSockets",
                            ].includes(skill.name);

                            return (
                                <div
                                    key={skill.name}
                                    className="glass-card flex min-h-36 flex-col items-center justify-center rounded-[1.75rem] p-5 text-center transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={cn("mb-4 h-12 w-12 object-contain", isInvertedInDark && "dark:invert")}
                                    />
                                    <p className="text-sm font-medium text-foreground/85">{skill.name}</p>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
