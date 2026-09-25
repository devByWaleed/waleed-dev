import { skillGroups } from "@/data/skills";

const allSkills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));

export default function TechMarquee() {
    return (
        <div className="overflow-hidden border-y border-border bg-surface py-4">
            <div className="marquee-track flex w-max gap-10">
                {[...allSkills, ...allSkills].map((name, index) => (
                    <span key={`${name}-${index}`} className="whitespace-nowrap text-sm text-muted">
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
}