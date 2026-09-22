import Section from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";

const wordmarkOnly = ["amazonwebservices"];

const iconUrl = (icon: string) => {
    const variant = wordmarkOnly.includes(icon) ? "original-wordmark" : "original";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${variant}.svg`;
};

export default function Skills() {
    return (
        <Section id="skills" eyebrow="Skills" title="Technical skills">
            <div className="space-y-10">
                {skillGroups.map((group) => (
                    <div key={group.label}>
                        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
                            {group.label}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={iconUrl(skill.icon)}
                                        alt={skill.name}
                                        className="h-5 w-5 bg-white rounded-sm p-0.5"
                                    />
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}