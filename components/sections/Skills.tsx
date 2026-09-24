import Section from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";

const wordmarkOnly = ["amazonwebservices"];

const deviconUrl = (icon: string) => {
    const variant = wordmarkOnly.includes(icon) ? "original-wordmark" : "original";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${variant}.svg`;
};

const simpleIconUrl = (icon: string) => `https://cdn.simpleicons.org/${icon}`;

const iconUrl = (icon: string, source?: "simple") =>
    source === "simple" ? simpleIconUrl(icon) : deviconUrl(icon);

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
                                    className="card flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={iconUrl(skill.icon, skill.source)}
                                        alt={skill.name}
                                        className="h-5 w-5 rounded-sm bg-white p-0.5 object-contain"
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