import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { caseStudies } from "@/data/case-studies/index";
import Highlight from "@/components/case-study/Highlight";
import FeatureGrid from "@/components/case-study/FeatureGrid";
import StatsRow from "@/components/case-study/StatsRow";
import DiagramGallery from "@/components/case-study/DiagramGallery";
import ChallengesTable from "@/components/case-study/ChallengesTable";
import BestPractices from "@/components/case-study/BestPractices";

export function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = caseStudies.find((item) => item.slug === slug);

    if (!study) notFound();

    return (
        <main className="px-6 py-16">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                    <FiArrowLeft size={16} aria-hidden="true" />
                    Back to portfolio
                </Link>

                <div className="card mt-8 p-8 text-center md:p-12">
                    <h1 className="font-display text-3xl font-bold md:text-5xl">{study.title}</h1>
                    <p className="mt-2 text-lg text-accent">{study.tagline}</p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {study.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                        {study.description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {study.liveUrl && (
                            <Link
                                href={study.liveUrl}
                                target="_blank"
                                className="glow-btn flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
                            >
                                <FiExternalLink size={16} aria-hidden="true" />
                                Live demo
                            </Link>
                        )}
                        {study.githubUrl && (
                            <Link
                                href={study.githubUrl}
                                target="_blank"
                                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                            >
                                <FaGithub size={16} aria-hidden="true" />
                                Source code
                            </Link>
                        )}
                    </div>
                </div>

                <section className="mt-16">
                    <h2 className="font-display text-2xl font-semibold">Project overview</h2>
                    <p className="mt-4 leading-relaxed text-muted">{study.overview}</p>
                </section>

                {study.highlights.length > 0 && (
                    <section className="mt-16 space-y-16">
                        {study.highlights.map((highlight, index) => (
                            <Highlight key={highlight.title} highlight={highlight} reverse={index % 2 === 1} />
                        ))}
                    </section>
                )}

                {study.features.length > 0 && (
                    <section className="mt-16">
                        <h2 className="font-display text-2xl font-semibold">Key features</h2>
                        <div className="mt-8">
                            <FeatureGrid features={study.features} />
                        </div>
                    </section>
                )}

                {study.stats.length > 0 && (
                    <section className="mt-16">
                        <StatsRow stats={study.stats} />
                    </section>
                )}

                {study.diagrams.length > 0 && (
                    <section className="mt-16">
                        <h2 className="font-display text-2xl font-semibold">Architecture & diagrams</h2>
                        <div className="mt-8">
                            <DiagramGallery diagrams={study.diagrams} />
                        </div>
                    </section>
                )}

                {study.challenges.length > 0 && (
                    <section className="mt-16">
                        <h2 className="font-display text-2xl font-semibold">Challenges & solutions</h2>
                        <div className="mt-8">
                            <ChallengesTable challenges={study.challenges} />
                        </div>
                    </section>
                )}

                {study.bestPractices.length > 0 && (
                    <section className="mb-8 mt-16">
                        <h2 className="font-display text-2xl font-semibold">Best practices</h2>
                        <div className="mt-8">
                            <BestPractices groups={study.bestPractices} />
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}