interface SectionProps {
    id: string;
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-20 px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {eyebrow && (
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accent">
                        {eyebrow}
                    </p>
                )}
                <h2 className="font-display text-3xl font-semibold md:text-5xl">
                    {title}
                </h2>
                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
}