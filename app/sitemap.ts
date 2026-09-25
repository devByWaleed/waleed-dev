import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
    const caseStudyEntries = caseStudies.map((study) => ({
        url: `${site.siteUrl}/case-study/${study.slug}`,
        lastModified: new Date(),
    }));

    return [{ url: site.siteUrl, lastModified: new Date() }, ...caseStudyEntries];
}