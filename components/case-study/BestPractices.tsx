import { FiCheck } from "react-icons/fi";
import type { CaseStudyPracticeGroup } from "@/types";

export default function BestPractices({ groups }: { groups: CaseStudyPracticeGroup[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((group) => (
                <div key={group.category} className="card p-5">
                    <h3 className="text-sm font-semibold">{group.category}</h3>
                    <ul className="mt-3 space-y-2">
                        {group.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-muted">
                                <FiCheck size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}