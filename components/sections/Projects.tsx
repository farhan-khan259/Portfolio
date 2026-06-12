"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";

export function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = PROJECTS.length > 6 && !showAll ? PROJECTS.slice(0, 6) : PROJECTS;

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-20 text-center"
            >
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-primary">
                    Selected Projects
                </p>
                <h2 className="text-[2.9rem] font-bold leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:text-[4.4rem] md:text-[5.8rem]">
                    Production work
                    <span className="ml-3 font-serif font-light italic text-primary">across AI and automation</span>
                </h2>
            </motion.div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                        >
                            <Card className="group flex h-full flex-col overflow-hidden border-border/50 p-0 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                                <div className="relative overflow-hidden border-b border-border/50 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_30%)] p-6">
                                    <div className="mb-12 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background/80 text-primary shadow-sm">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                            {project.status === "in-progress" ? "In Progress" : "Completed"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-grow flex-col p-6">
                                    <p className="mb-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

                                    {project.highlights?.length ? (
                                        <div className="mb-6 space-y-3">
                                            {project.highlights.map((highlight) => (
                                                <div key={highlight} className="flex gap-3 text-sm text-foreground/85">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tech.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-md border border-border/60 bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-foreground"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {(project.liveUrl || project.githubUrl) && (
                                        <div className="mt-6 flex items-center gap-4 border-t border-border/40 pt-4">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-xs font-bold uppercase tracking-wider text-primary transition-colors duration-300 hover:text-foreground"
                                                >
                                                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                                                    Live Site
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
                                                >
                                                    <Github className="mr-1.5 h-3.5 w-3.5" />
                                                    Source
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {PROJECTS.length > 6 && (
                <div className="mt-16 flex justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-full px-8 py-5 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="ml-2 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>
            )}
        </section>
    );
}
