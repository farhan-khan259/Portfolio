"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Github, Linkedin, Instagram, Twitter, Send as Telegram, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export function Contact() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsCalendlyOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const contactLinks = [
        { icon: Mail, label: "Email", href: `mailto:${PERSONAL_INFO.email}` },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
        { icon: Github, label: "GitHub", href: "https://github.com" },
        { icon: Twitter, label: "X (Twitter)", href: "https://x.com" },
        { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
        { icon: Telegram, label: "Telegram", href: "#" },
    ];

    return (
        <section id="contact" className="section-container">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 text-[22px] font-bold uppercase tracking-[0.5em] text-zinc-500"
                >
                    GET IN TOUCH
                </motion.p>
                <h2 className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 leading-[0.9] select-none text-[3.5rem] sm:text-[6rem] lg:text-[8rem]">
                    <span className="font-serif italic font-light tracking-tight bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                        Contact Me
                    </span>
                </h2>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 flex flex-col h-full"
                    >
                        <div>
                            <h3 className="text-xl font-serif mb-8">Details</h3>

                            {/* Contact Links */}
                            <div className="space-y-5">
                                {contactLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center gap-4 text-foreground/70 hover:text-foreground transition-colors group"
                                    >
                                        <link.icon className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3" />
                                        <span className="text-lg font-light">{link.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mt-12 pt-8">
                            <p className="text-sm text-muted-foreground mb-6 font-light leading-relaxed">
                                Available for SaaS consulting &amp; freelance<br />
                                New York (UTC-5)
                            </p>

                            {/* Book Call Button */}
                            <button
                                onClick={() => setIsCalendlyOpen(true)}
                                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                            >
                                Book a 30-min call
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side - Send a Message Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 h-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-xl font-serif mb-8">Send a message</h3>

                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 font-light"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 font-light"
                                    placeholder="you@company.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50 font-light"
                                    placeholder="Tell me what you're building..."
                                />
                            </div>

                            {/* Submit Button & Status */}
                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Submit
                                </button>

                                {submitted && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-muted-foreground/80 text-sm font-light"
                                    >
                                        Message sent ✓
                                    </motion.span>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Calendly Modal */}
            <AnimatePresence>
                {isCalendlyOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCalendlyOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                        >
                            {/* Header */}
                            <div className="absolute top-4 right-4 z-50">
                                <button
                                    onClick={() => setIsCalendlyOpen(false)}
                                    className="p-2 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Calendly Iframe */}
                            <iframe
                                src="https://calendly.com/alex-johnson-demo/30min"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
