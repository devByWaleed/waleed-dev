"use client";

import { motion } from "motion/react";

interface SectionProps {
    id: string;
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-20 px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-6xl"
            >
                {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
                )}
                <h2 className="font-display text-3xl font-semibold md:text-5xl">{title}</h2>
                <div className="mt-12">{children}</div>
            </motion.div>
        </section>
    );
}