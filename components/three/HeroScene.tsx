"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function HeroScene() {
    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        setShowScene(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => setShowScene(event.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    if (!showScene) return null;

    return <Scene />;
}