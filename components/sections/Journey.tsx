import Section from "@/components/ui/Section";
import { journey } from "@/data/journey";

export default function Journey() {
    return (
        <Section id="journey" eyebrow="Timeline" title="My journey">
            <div className="relative border-l border-border pl-8">
                {journey.map((entry) => (
                    <div
                        key={entry.title}
                        className="card relative mb-10 p-6 border border-border bg-surface rounded-xl transition-all duration-300 hover:border-[rgb(124_156_255_/_0.35)] hover:shadow-[0_0_50px_-12px_rgb(124_156_255_/_0.4),0_10px_30px_-10px_rgb(0_0_0_/_0.6)] hover:-translate-y-1 last:mb-0 capitalize"
                    >
                        <span
                            className={`absolute -left-[2.8rem] top-8 h-3 w-3 rounded-full ${entry.status === "Current" ? "bg-accent shadow-[0_0_12px_rgb(124_156_255_/_0.8)]" : "bg-muted"
                                }`}
                        />
                        <p className="text-sm text-accent">{entry.period}</p>
                        <h3 className="font-display mt-1 text-lg font-semibold">
                            {entry.title}
                        </h3>
                        <p className="text-sm text-muted">{entry.place}</p>
                        <p className="mt-2 leading-relaxed text-muted">
                            {entry.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}