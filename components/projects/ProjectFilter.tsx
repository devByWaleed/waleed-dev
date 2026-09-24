"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types";
import ProjectCard from "./ProjectCard";

type FilterValue = ProjectCategory | "All";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
    const categories = useMemo<FilterValue[]>(() => {
        const found = new Set<ProjectCategory>();
        projects.forEach((project) => {
            project.categories.forEach((category) => found.add(category));
        });
        return ["All", ...Array.from(found)];
    }, [projects]);

    const [active, setActive] = useState<FilterValue>("All");

    const visibleProjects = useMemo(() => {
        if (active === "All") return projects;
        return projects.filter((project) => project.categories.includes(active));
    }, [active, projects]);

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setActive(category)}
                        className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${active === category
                                ? "border-accent bg-accent text-bg"
                                : "border-border text-muted hover:border-accent hover:text-fg"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {visibleProjects.length === 0 ? (
                <p className="mt-12 text-sm text-muted">
                    No projects in this category yet.
                </p>
            ) : (
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}