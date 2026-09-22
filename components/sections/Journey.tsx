import Section from "@/components/ui/Section";
import { journey } from "@/data/journey";

export default function Journey() {
    return (
        <Section id="journey" eyebrow="Timeline" title="My journey">
            <div className="relative border-l border-border pl-8">
                {journey.map((entry) => (
                    <div key={entry.title} className="relative mb-10 last:mb-0">
                        <span
                            className={`absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full ${entry.status === "current" ? "bg-accent" : "bg-muted"
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