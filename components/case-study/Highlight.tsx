import Image from "next/image";
import type { CaseStudyHighlight } from "@/types";

export default function Highlight({
    highlight,
    reverse = false,
}: {
    highlight: CaseStudyHighlight;
    reverse?: boolean;
}) {
    return (
        <div
            className={`grid items-center gap-8 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
        >
            <div>
                <h3 className="font-display text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{highlight.description}</p>
            </div>
            <div className="card relative aspect-video overflow-hidden">
                <Image src={highlight.image} alt={highlight.title} fill sizes="(min-width: 768px) 408px, 100vw" className="object-cover" />
            </div>
        </div>
    );
}