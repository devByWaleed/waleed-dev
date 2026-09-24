import type { Certificate, CodingStats } from "@/types";

export const certificates: Certificate[] = [
    {
        slug: "fellowship",
        title: "Full Stack AI Engineering",
        issuer: "Dev Weekends",
        year: "2026",
        description: "Put into the grind for making real-world projects alongside solving DSA.",
        tags: ["Fellowship"],
        thumbnail: "/images/achievements/fellowship-cert.webp",
        certificateUrl: "https://drive.google.com/file/d/10DMKNa9xTVp2IbF9juyu1Mxh1nkFsi7S/view?usp=sharing",
    },
    {
        slug: "online-contest",
        title: "DEN Coding Cup",
        issuer: "Digital Empowerment Network",
        year: "2024",
        description: "Got 30 out of 100 marks. Solve problems for Star-Pattern & Shortest Route.",
        tags: ["Competitive Programming"],
        thumbnail: "/images/achievements/contest-cert.webp",
        certificateUrl: "https://drive.google.com/file/d/1fpjlSK1TWexJlB0ly95hNNIgd0aS7kqN/view?usp=sharing",
    },
];


export const codingStats: CodingStats = {
    leetcodeProfileUrl: "https://leetcode.com/u/solveWithWaleed",
    githubUrl: "https://github.com/devByWaleed/leetcode/blob/main/Wiki/Blind75/01_arrays.md",
    blind75: { completed: 52, total: 75 },
    capstone: {
        title: "LeetCode Capstone Task",
        description: "Includes keywords finding, 4 un-seen problems with 3 already-solved problems.",
        proofUrl: "https://github.com/devByWaleed/leetcode/blob/main/Wiki/CAPSTONE-1/CAPSTONE_JOURNAL.md",
    }
};