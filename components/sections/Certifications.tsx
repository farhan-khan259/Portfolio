"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CERTIFICATIONS } from "@/lib/constants";

export function Certifications() {
    return (
        <section id="certifications" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center"
            >
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary">
                    Certifications
                </p>
                <h2 className="text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white sm:text-6xl md:text-7xl">
                    Continued
                    <span className="ml-3 font-serif font-light italic text-primary">learning</span>
                </h2>
            </motion.div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                        <Card className="h-full rounded-[2rem] border-border/50 p-7">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <BadgeCheck className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold leading-tight text-neutral-900 dark:text-white">
                                {cert.name}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
                            <div className="mt-6 border-t border-border/50 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                {cert.date}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
