"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "@/lib/constants";
import { Menu, X, Home, User, Cpu, Monitor, Send, Briefcase, GraduationCap, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const MENU_ITEMS = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Monitor },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: BadgeCheck },
    { name: "Contact", href: "#contact", icon: Send },
];

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            setTimeout(() => {
                const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth",
                });
            }, 300);
        }
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-[60] flex flex-col items-center gap-1.5 px-2 sm:hidden pointer-events-none">
            {/* Top Pill - Persistent Header */}
            <motion.div
                layout
                className={cn(
                    "w-full max-w-[640px] h-[54px] pointer-events-auto flex items-center justify-between gap-2 p-2 pl-3 pr-2 rounded-[15px] border border-white/10 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl shadow-lg ring-1 ring-black/5",
                )}
            >
                {/* Left: Logo & Name */}
                <div className="flex min-w-0 items-center gap-2.5">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border/60 bg-secondary/40 shadow-inner">
                        <Image
                            src="/assets/myprofilepic.png"
                            alt={PERSONAL_INFO.name}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    <div className="min-w-0 flex flex-col">
                        <span className="truncate text-[0.95rem] font-bold text-foreground uppercase leading-none tracking-tight">
                            {PERSONAL_INFO.name}
                        </span>
                    </div>
                </div>

                {/* Right: Controls (Squircle Boxes) */}
                <div className="flex shrink-0 items-center gap-1.5">
                    <div className="flex h-9 w-9 scale-75 items-center justify-center rounded-xl border border-border bg-secondary/50">
                        <ThemeToggle />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.div>

            {/* Bottom Card - Expanded Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="w-full max-w-[640px] pointer-events-auto p-4 rounded-[20px] border border-white/10 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-xl shadow-lg ring-1 ring-black/5"
                    >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                            {MENU_ITEMS.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.04 + 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="flex items-center gap-4 transition-all group text-left active:scale-95"
                                >
                                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary/50 border border-border shadow-sm group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-[11px] font-black text-foreground/80 uppercase tracking-widest group-hover:text-primary transition-colors">
                                        {item.name}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
