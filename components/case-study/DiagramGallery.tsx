"use client";

import { useState } from "react";
import type { CaseStudyDiagram } from "@/types";
import MermaidDiagram from "./MermaidDiagram";

export default function DiagramGallery({ diagrams }: { diagrams: CaseStudyDiagram[] }) {
    const [active, setActive] = useState(0);

    if (diagrams.length === 0) return null;
    const current = diagrams[active];

    return (
        <div className="card p-6 md:p-8">
            <div className="flex flex-wrap gap-3">
                {diagrams.map((diagram, index) => (
                    <button
                        key={diagram.title}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${index === active
                                ? "border-accent bg-accent text-bg"
                                : "border-border text-muted hover:border-accent hover:text-fg"
                            }`}
                    >
                        {diagram.title}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                <MermaidDiagram code={current.mermaid} />
                <p className="mt-4 text-sm text-muted">{current.caption}</p>
            </div>
        </div>
    );
}