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

export interface Diagram {
    title: string;
    kind:
    | "architecture"
    | "erd"
    | "sequence"
    | "use-case"
    | "dfd"
    | "uml-class"
    | "deployment";
    src: string;
    caption: string;
}

export interface CaseStudy {
    slug: string;
    problem: string;
    role: string;
    stack: string[];
    decisions: { title: string; why: string }[];
    challenges: { problem: string; solution: string }[];
    diagrams: Diagram[];
    results?: string[];
    nextSteps?: string[];
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
    hook: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    resumeUrl: string;
}