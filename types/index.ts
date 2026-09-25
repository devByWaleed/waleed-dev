export type ProjectCategory =
    | "MERN"
    | "Frontend"
    | "DevOps"
    | "Python"
    | "Academic";

export interface Project {
    slug: string;
    title: string;
    description: string;
    categories: ProjectCategory[];
    tags: string[];
    thumbnail: string;
    liveUrl?: string;
    githubUrl?: string;
    hasCaseStudy: boolean;
    featured?: boolean;
    status?: "shipped" | "in-progress";
}

export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface Site {
    name: string;
    role: string;
    tagline: string;
    profileImage: string;
    siteUrl: string;
    hook: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    resumeUrl: string;
}

export interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface Certificate {
    slug: string;
    title: string;
    issuer: string;
    year: string;
    description: string;
    tags: string[];
    thumbnail: string;
    certificateUrl: string;
}

export interface Badge {
    name: string;
    image: string;
}

export interface CodingStats {
    leetcodeProfileUrl: string;
    githubUrl: string;
    blind75: { completed: number; total: number };
    capstone: { title: string; description: string; proofUrl?: string };
}

export type DiagramKind = "architecture" | "flow" | "erd" | "sequence" | "deployment";

export interface CaseStudyDiagram {
    title: string;
    kind: DiagramKind;
    mermaid: string;
    caption: string;
}

export interface CaseStudyHighlight {
    title: string;
    description: string;
    image: string;
}

export interface CaseStudyFeature {
    title: string;
    description: string;
}

export interface CaseStudyStat {
    label: string;
    value: string;
}

export interface CaseStudyChallenge {
    challenge: string;
    solution: string;
}

export interface CaseStudyPracticeGroup {
    category: string;
    points: string[];
}

export interface CaseStudy {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    overview: string;
    highlights: CaseStudyHighlight[];
    features: CaseStudyFeature[];
    stats: CaseStudyStat[];
    diagrams: CaseStudyDiagram[];
    challenges: CaseStudyChallenge[];
    bestPractices: CaseStudyPracticeGroup[];
}