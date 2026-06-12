"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Home,
    User,
    Briefcase,
    Cpu,
    Monitor,
    GraduationCap,
    BadgeCheck,
    Send
} from "lucide-react";

const NAV_ITEMS = [
    { name: "Hero", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Monitor },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: BadgeCheck },
    { name: "Contact", href: "#contact", icon: Send }

];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        // Scroll active detection
        const handleScroll = () => {
            const sections = NAV_ITEMS.map((item) => item.href.substring(1));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 100, // Offset for top padding
                behavior: "smooth",
            });
            setActiveSection(href.substring(1));
        }
    };

    return (
        <motion.nav
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden sm:flex fixed bottom-8 left-1/2 z-50 w-fit"
        >
            <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full glass border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg ring-1 ring-border/20 max-w-[calc(100vw-1.5rem)] overflow-x-auto hide-scrollbar">

                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    const isHovered = hoveredItem === item.name;

                    return (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-colors duration-300 group flex-shrink-0 z-10",
                                isActive || isHovered ? "text-white" : "text-muted-foreground hover:text-white"
                            )}
                            aria-label={item.name}
                        >
                            {/* Dark Circular Background - Matching the image */}
                            <AnimatePresence>
                                {(isActive || isHovered) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="absolute inset-x-[2.5px] inset-y-[2.5px] bg-[#222222] dark:bg-white/10 rounded-full -z-0"
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    />
                                )}
                            </AnimatePresence>

                            <item.icon className="w-5 h-5 relative z-10" />

                            {/* Refined Bubble Tooltip - Exact match for the image */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, x: "-50%", scale: 0.5 }}
                                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                                        exit={{ opacity: 0, y: 15, x: "-50%", scale: 0.5 }}
                                        className="hidden sm:flex absolute -top-16 left-1/2 flex-col items-center pointer-events-none z-[60]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 450,
                                            damping: 20,
                                            mass: 0.8
                                        }}
                                    >
                                        <div className="bg-white text-black px-4 py-2 rounded-[1.2rem] text-[10px] sm:text-[11px] font-black tracking-[0.15em] uppercase shadow-[0_12px_40px_rgba(0,0,0,0.4)] whitespace-nowrap border border-white/20 leading-none">
                                            {item.name}
                                        </div>
                                        {/* Downward Arrow / Tail */}
                                        <div className="w-3 h-3 bg-white rotate-45 -mt-1.5 shadow-sm" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    );
                })}

                {/* Divider */}
                <div className="w-px h-6 bg-border mx-1 sm:mx-2 flex-shrink-0" />

                {/* Theme Toggle */}
                <div className="p-1 flex-shrink-0">
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
}
