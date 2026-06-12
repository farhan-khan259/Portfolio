"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FOOTER_TEXT, PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="relative border-t border-border/60 bg-background/70 py-10 backdrop-blur">
            <div className="section-container flex flex-col items-center justify-between gap-4 py-0 text-center md:flex-row md:text-left">
                <div>
                    <p className="text-sm font-semibold text-foreground">{PERSONAL_INFO.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{FOOTER_TEXT}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                </p>
            </div>

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-8 right-8 z-40 rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 hover:bg-primary/20"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-5 w-5" />
                </button>
            )}
        </footer>
    );
}
