"use client";

import { motion } from "framer-motion";
import { Eye, Github, Linkedin, Globe, MapPin, Layers, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";

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
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background text-foreground transition-colors duration-500"
        >
            {/* Minimal Background Accent */}
            <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-30">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-center max-w-7xl mx-auto flex flex-col items-center"
                >
                    {/* Top Label */}
                    <motion.p
                        variants={item}
                        className="mb-8 text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.6em] text-zinc-500 dark:text-zinc-400"
                    >
                        DESIGN IN DETAILS
                    </motion.p>

                    {/* Primary Heading - Name Split */}
                    <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 leading-[0.85] select-none text-[12vw] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] mb-2 uppercase">
                        <span className="font-serif italic font-extralight normal-case tracking-tight text-foreground/80 dark:text-white/90">
                            Alex
                        </span>
                        <span className="font-sans font-black tracking-tighter text-foreground">
                            Johnson
                        </span>
                    </motion.div>

                    {/* Secondary Heading - Title Split */}
                    <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 leading-[0.85] select-none text-[8vw] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] mb-12 uppercase">
                        <span className="font-sans font-black tracking-tighter text-foreground">
                            BS COMPUTER
                        </span>
                        <span className="font-serif italic font-extralight lowercase tracking-tight text-foreground/80 dark:text-white/90">
                            Science Student
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={item}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 max-w-xl font-light tracking-wide px-4"
                    >
                        Building fast, scalable web applications with the MERN stack
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-wrap gap-4 justify-center items-center w-full max-w-md sm:max-w-none px-4"
                    >
                        <a href="#contact" className="w-[calc(50%-0.5rem)] sm:w-auto order-1">
                            <Button className="w-full rounded-full px-6 py-3 bg-foreground text-background border-zinc-200 dark:border-white/10 hover:bg-background hover:text-foreground transition-all duration-300 font-medium text-sm">
                                Get in touch
                            </Button>
                        </a>
                        <a href="#projects" className="w-[calc(50%-0.5rem)] sm:w-auto order-2">
                            <Button variant="outline" className="w-full rounded-full px-6 py-3 border-zinc-200 dark:border-white/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium text-sm">
                                See our work
                            </Button>
                        </a>
                        <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto order-3">
                            <Button variant="outline" className="w-full rounded-full px-6 py-3 border-zinc-200 dark:border-white/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium text-sm">
                                View Resume
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Corner Branding - Bottom Left */}
            <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.2em] text-foreground">BASED IN NEW YORK,</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase italic font-serif">United States</span>
                </div>
            </div>

            {/* Corner Branding - Bottom Right */}
            <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 group text-right">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black tracking-[0.2em] text-foreground uppercase">FULL STACK DEVELOPER,</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground italic font-serif">& MERN SPECIALIST</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
            </motion.div>
        </section>
    );
}
