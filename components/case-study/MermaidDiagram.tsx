"use client";

import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
        background: "transparent",
        primaryColor: "#12141c",
        primaryTextColor: "#f3f4f6",
        primaryBorderColor: "#28bcf6",
        lineColor: "#28bcf6",
        secondaryColor: "#12141c",
        tertiaryColor: "#090a0f",
        fontFamily: "inherit",
    },
});

export default function MermaidDiagram({ code }: { code: string }) {
    const id = useId().replace(/:/g, "");
    const containerRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        mermaid
            .render(`mermaid-${id}`, code)
            .then(({ svg }) => {
                if (!cancelled && containerRef.current) {
                    containerRef.current.innerHTML = svg;
                }
            })
            .catch((err) => {
                console.error("Mermaid render failed:", err);
                if (!cancelled) setError("This diagram could not be rendered.");
            });

        return () => {
            cancelled = true;
        };
    }, [code, id]);

    if (error) {
        return <p className="text-sm text-muted">{error}</p>;
    }

    return <div ref={containerRef} className="mermaid-diagram overflow-x-auto" />;
}