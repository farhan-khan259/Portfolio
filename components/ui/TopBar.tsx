"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { MobileNavbar } from "./MobileNavbar";

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
};

export function TopBar() {
    return (
        <>
            {/* Mobile Navbar (Pill) - Visible only on mobile */}
            <MobileNavbar />

            {/* Desktop Header - Hidden on mobile */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden sm:block absolute top-0 left-0 right-0 z-40 bg-transparent"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Left: Profile Info */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                            <img
                                src="/assets/logo.webp"
                                alt={PERSONAL_INFO.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "/assets/logo.webp";
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-bold leading-tight">{PERSONAL_INFO.name}</h1>
                            <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                                {PERSONAL_INFO.title}
                            </p>
                        </div>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap] || Mail;
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={link.name}
                                >
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </motion.header>
        </>
    );
}
