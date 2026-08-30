"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border/60 bg-secondary/40 shadow-md shadow-primary/15">
                            <Image
                                src="/assets/muhammad-farhan-profile.png"
                                alt={PERSONAL_INFO.name}
                                fill
                                className="object-cover object-top"
                                priority
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
