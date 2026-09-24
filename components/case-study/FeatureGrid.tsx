import type { CaseStudyFeature } from "@/types";

export default function FeatureGrid({ features }: { features: CaseStudyFeature[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
                <div key={feature.title} className="card p-5">
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted">{feature.description}</p>
                </div>
            ))}
        </div>
    );
}