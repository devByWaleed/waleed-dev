import { site } from "@/data/site";

export default function StructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        url: site.siteUrl,
        jobTitle: site.role,
        email: site.email,
        sameAs: [
            "https://github.com/devByWaleed",
            "https://linkedin.com/in/waleed-webdev",
            "https://leetcode.com/u/solveWithWaleed",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}