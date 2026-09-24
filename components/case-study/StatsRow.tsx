import type { CaseStudyStat } from "@/types";

export default function StatsRow({ stats }: { stats: CaseStudyStat[] }) {
    return (
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label}>
                    <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}