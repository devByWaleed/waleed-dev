import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { SiGithub, SiLeetcode } from "react-icons/si";
import type { CodingStats as CodingStatsType } from "@/types";
import type { LeetCodeStats } from "@/lib/leetcode";

interface Props {
    stats: CodingStatsType;
    liveStats: LeetCodeStats | null;
}

const difficultyBars = [
    { key: "easySolved" as const, label: "Easy" },
    { key: "mediumSolved" as const, label: "Medium" },
    { key: "hardSolved" as const, label: "Hard" },
];

export default function CodingStats({ stats, liveStats }: Props) {
    const progress = Math.round(
        (stats.blind75.completed / stats.blind75.total) * 100
    );

    return (
        <div className="card p-6 md:p-8">
            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="font-display text-lg font-semibold">Blind 75</h3>
                    <p className="mt-1 text-sm text-muted">
                        {stats.blind75.completed} of {stats.blind75.total} problems solved
                    </p>

                    <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-border">
                        <div
                            className="glow-dot h-full rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <Link
                        href={stats.leetcodeProfileUrl}
                        target="_blank"
                        className="mt-4 flex w-fit items-center gap-1.5 text-sm text-accent transition-colors hover:opacity-80"
                    >
                        <SiLeetcode size={16} aria-hidden="true" />
                        View LeetCode profile
                        <FiExternalLink size={14} aria-hidden="true" />
                    </Link>
                    <Link
                        href={stats.githubUrl}
                        target="_blank"
                        className="mt-4 flex w-fit items-center gap-1.5 text-sm text-accent transition-colors hover:opacity-80"
                    >
                        <SiGithub size={16} aria-hidden="true" />
                        View In GitHub
                        <FiExternalLink size={14} aria-hidden="true" />
                    </Link>
                </div>

                <div>
                    <h3 className="font-display text-lg font-semibold">Capstone</h3>
                    <div className="mt-4 flex items-start gap-3 rounded-lg border border-border bg-bg p-4">
                        <FiAward size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        <div>
                            <p className="text-sm font-medium">{stats.capstone.title}</p>
                            <p className="mt-1 text-sm text-muted">{stats.capstone.description}</p>
                            {stats.capstone.proofUrl && (
                                <Link
                                    href={stats.capstone.proofUrl}
                                    target="_blank"
                                    className="mt-2 flex w-fit items-center gap-1.5 text-sm text-accent transition-colors hover:opacity-80"
                                >
                                    View proof
                                    <FiExternalLink size={14} aria-hidden="true" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-border pt-8">
                <h3 className="font-display text-lg font-semibold">LeetCode stats</h3>

                {liveStats ? (
                    <>
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            <div className="rounded-lg border border-border bg-bg p-4 text-center">
                                <p className="text-2xl font-bold text-accent">{liveStats.totalSolved}</p>
                                <p className="mt-1 text-xs text-muted">Total solved</p>
                            </div>
                            {difficultyBars.map(({ key, label }) => (
                                <div key={key} className="rounded-lg border border-border bg-bg p-4 text-center">
                                    <p className="text-2xl font-bold">{liveStats[key]}</p>
                                    <p className="mt-1 text-xs text-muted">{label}</p>
                                </div>
                            ))}
                        </div>

                        {liveStats.badges.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-4">
                                {liveStats.badges.map((badge) => (
                                    <div
                                        key={badge.id}
                                        className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg p-4"
                                        title={badge.displayName}
                                    >
                                        <Image
                                            src={badge.icon}
                                            alt={badge.displayName}
                                            width={56}
                                            height={56}
                                            unoptimized
                                        />
                                        <span className="max-w-[80px] text-center text-xs text-muted">
                                            {badge.displayName}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <p className="mt-4 text-sm text-muted">
                        Live stats are unavailable right now. Visit my{" "}
                        <Link href={stats.leetcodeProfileUrl} target="_blank" className="text-accent hover:opacity-80">
                            LeetCode profile
                        </Link>{" "}
                        directly.
                    </p>
                )}
            </div>
        </div>
    );
}