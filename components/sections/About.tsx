"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, MapPin, Code2, Zap, Target } from "lucide-react";

export function About() {
    return (
        <section id="about" className="section-container bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <p className="mb-6 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.5em] text-zinc-500">
                    GET TO KNOW ME
                </p>
                <div className="flex flex-col items-center overflow-visible">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white tracking-tighter leading-none px-4">
                        Crafting <span className="font-serif font-light italic bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent pr-2">Experiences</span>
                    </h2>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto">
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                    {/* Profile Card - Spans 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card flex flex-col items-center text-center p-6 md:p-8"
                    >
                        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
                                alt={PERSONAL_INFO.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-neutral-900 dark:text-white">{PERSONAL_INFO.name}</h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-4">{PERSONAL_INFO.title}</p>

                        <div className="flex flex-col gap-2 w-full text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">{PERSONAL_INFO.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>New York, USA</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Description - Spans 2 columns on large screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card lg:col-span-2 p-6 md:p-8"
                    >
                        <h3 className="text-lg md:text-xl font-bold mb-3 uppercase tracking-wider text-muted-foreground">
                            Building the Bridge Between Vision & Reality
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
                            {PERSONAL_INFO.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                MERN Stack
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                Full Stack
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                Problem Solver
                            </span>
                        </div>
                    </motion.div>

                    {/* Value Proposition Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 gradient-text">Clean Code</h4>
                        <p className="text-sm text-muted-foreground">
                            Writing maintainable, scalable, and well-documented code that stands the test of time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 gradient-text">Performance</h4>
                        <p className="text-sm text-muted-foreground">
                            Optimized applications with lightning-fast load times and smooth user experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 gradient-text">User-Focused</h4>
                        <p className="text-sm text-muted-foreground">
                            Designing with empathy, creating intuitive interfaces that users love to interact with.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
