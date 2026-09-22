export interface SkillGroup {
    label: string;
    skills: { name: string; icon: string }[];
}

export const skillGroups: SkillGroup[] = [
    {
        label: "Frontend",
        skills: [
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Redux", icon: "redux" },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "REST APIs", icon: "swagger" },
            { name: "Socket.IO", icon: "socketio" },
        ],
    },
    {
        label: "Database",
        skills: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "Mongoose", icon: "mongoose" },
        ],
    },
    {
        label: "DevOps & Cloud",
        skills: [
            { name: "Docker", icon: "docker" },
            { name: "AWS EC2", icon: "amazonwebservices" },
            { name: "Linux", icon: "linux" },
            { name: "Nginx", icon: "nginx" },
            { name: "Git", icon: "git" },
        ],
    },
    {
        label: "Tools & Platforms",
        skills: [
            { name: "GitHub", icon: "github" },
            { name: "Cloudinary", icon: "cloudinary" },
            { name: "Vercel", icon: "vercel" },
            { name: "Postman", icon: "postman" },
            { name: "VS Code", icon: "vscode" },
        ],
    },
    {
        label: "CS Fundamentals",
        skills: [
            { name: "Data Structures", icon: "python" },
            { name: "Algorithms", icon: "python" },
            { name: "OOP", icon: "python" },
        ],
    },
];