import type { NavItem, SocialLink } from "@/types";
import type { Site } from "@/types";

export const site: Site = {
    name: "Waleed Ahmed",
    role: "Software Engineer",
    tagline: "",
    hook: "I design, build, and deploy software end to end.",
    description:
        "MERN and Next.js developer who ships complete apps: database design, APIs, and polished interfaces.",
    email: "waleeddev91@gmail.com",
    phone: "+92 326 9431884",
    location: "Lahore, Pakistan",
    resumeUrl: "/Waleed-Ahmed-CV.pdf",
    profileImage: "/images/profile.webp",
    siteUrl: "https://waleed-code.netlify.app",
};

export const nav: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/devByWaleed" },
    { label: "LinkedIn", href: "https://linkedin.com/in/waleed-webdev" },
    { label: "LeetCode", href: "https://leetcode.com/u/solveWithWaleed" },
    { label: "Email", href: "mailto:waleeddev91@gmail.com" },
];