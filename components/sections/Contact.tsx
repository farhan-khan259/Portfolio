"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const contactLinks = [
    { icon: Mail, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: Phone, label: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: PERSONAL_INFO.linkedinUrl },
    { icon: Github, label: "GitHub", href: PERSONAL_INFO.githubUrl },
];

export function Contact() {
    return (
        <section id="contact" className="section-container">
            <div className="mb-16 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary"
                >
                    Contact
                </motion.p>
                <h2 className="text-[3rem] font-bold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-[4.8rem] lg:text-[6rem]">
                    Let&apos;s build
                    <span className="ml-3 font-serif font-light italic text-primary">something useful</span>
                </h2>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card h-fit rounded-[2rem] p-8"
                >
                    <p className="text-sm font-bold uppercase tracking-[0.35em] text-muted-foreground">
                        Availability
                    </p>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-foreground/90">
                        {PERSONAL_INFO.availability}. If you&apos;re hiring for AI engineering, LLM products, RAG systems, voice automation, or backend-heavy product work, I&apos;d be happy to talk.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href={`mailto:${PERSONAL_INFO.email}`}>
                            <Button className="rounded-full px-7 py-3.5 text-sm">
                                Email Me
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                        <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="rounded-full px-7 py-3.5 text-sm">
                                View CV
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-4"
                >
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.08 }}
                            className="glass-card flex items-center gap-4 rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <link.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                    Contact
                                </p>
                                <p className="mt-1 text-base font-semibold text-foreground">{link.label}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
