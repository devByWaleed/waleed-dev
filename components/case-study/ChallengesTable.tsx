import type { CaseStudyChallenge } from "@/types";

export default function ChallengesTable({ challenges }: { challenges: CaseStudyChallenge[] }) {
    return (
        <div className="card overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-border text-muted">
                        <th className="p-4 font-medium">Challenge</th>
                        <th className="p-4 font-medium">Solution</th>
                    </tr>
                </thead>
                <tbody>
                    {challenges.map((row) => (
                        <tr key={row.challenge} className="border-b border-border last:border-0">
                            <td className="p-4 align-top text-muted">{row.challenge}</td>
                            <td className="p-4 align-top">{row.solution}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}