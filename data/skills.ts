export interface SkillGroup {
    label: string;
    skills: { name: string; icon: string; source?: "simple" }[];
}

export const skillGroups: SkillGroup[] = [
    {
        label: "Frontend",
        skills: [
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "JavaScript", icon: "javascript" },
            { name: "React.js", icon: "react" },
            { name: "Redux", icon: "redux" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Next.js", icon: "nextjs" },
        ],
    },
    {
        label: "Backend",
        skills: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
            { name: "REST APIs", icon: "swagger" },
            { name: "Socket.IO", icon: "socketio" },
            { name: "Firebase Auth", icon: "firebase" },
            { name: "Google OAuth", icon: "google" },
        ],
    },
    {
        label: "Database",
        skills: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "Mongoose", icon: "mongoose" },
            { name: "Redis", icon: "redis" },
            { name: "Supabase", icon: "supabase" },
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
            { name: "GitHub Actions", icon: "githubactions" },
        ],
    },
    {
        label: "Tools & Platforms",
        skills: [
            { name: "GitHub", icon: "github" },
            { name: "Cloudinary", icon: "cloudinary", source: "simple" },
            { name: "Brevo", icon: "brevo", source: "simple" },
            { name: "Vercel", icon: "vercel" },
            { name: "Render", icon: "render", source: "simple" },
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