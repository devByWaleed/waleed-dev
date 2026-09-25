"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(prev + Math.ceil(Math.random() * 8), 100);
            });
        }, 90);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timeout = setTimeout(() => {
                setLoading(false);
                document.body.style.overflow = "";
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
                >
                    <div className="flex items-center gap-4 rounded-full border border-border bg-surface px-6 py-3">
                        <span className="text-sm font-medium uppercase tracking-widest text-muted">
                            Loading
                        </span>
                        <span className="font-display text-lg font-semibold text-accent">
                            {progress}%
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}