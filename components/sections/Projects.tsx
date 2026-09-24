import Section from "@/components/ui/Section";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <Section id="projects" eyebrow="Work" title="Featured projects">
            <ProjectFilter projects={projects} />
        </Section>
    );
}