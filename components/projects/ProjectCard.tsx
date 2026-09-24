import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="card flex flex-col overflow-hidden">
            <div className="relative aspect-video w-full bg-surface">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
                {project.status === "in-progress" && (
                    <span className="absolute right-3 top-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
                        In progress
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-sm">
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            aria-label={`${project.title} on GitHub`}
                            className="flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                        >
                            <FaGithub size={16} />
                            Code
                        </Link>
                    )}

                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            aria-label={`${project.title} live demo`}
                            className="flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                        >
                            <FiExternalLink size={16} />
                            Live
                        </Link>
                    )}

                    {project.hasCaseStudy && (
                        <Link
                            href={`/case-study/${project.slug}`}
                            className="ml-auto flex items-center gap-1 text-accent transition-colors hover:opacity-80"
                        >
                            Case study
                            <FiArrowUpRight size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}