import Section from "@/components/ui/Section";
import CertificateCard from "@/components/achievements/CertificateCard";
import CodingStats from "@/components/achievements/CodingStats";
import { certificates, codingStats } from "@/data/achievements";
import { getLeetCodeStats } from "@/lib/leetcode";

export default async function Achievements() {
    const liveStats = await getLeetCodeStats("solveWithWaleed");

    return (
        <Section id="achievements" eyebrow="Progress" title="Achievements">
            <div className="grid gap-8 sm:grid-cols-2">
                {certificates.map((certificate) => (
                    <CertificateCard key={certificate.slug} certificate={certificate} />
                ))}
            </div>

            <div className="mt-8">
                <CodingStats stats={codingStats} liveStats={liveStats} />
            </div>
        </Section>
    );
}