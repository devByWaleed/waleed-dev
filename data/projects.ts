import type { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "zenvio",
        title: "Zenvio",
        description:
            "Multi-vendor e-commerce marketplace with real-time features and cloud image uploads.",
        categories: ["MERN"],
        tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "Cloudinary"],
        thumbnail: "/images/projects/zenvio.webp",
        liveUrl: "",
        githubUrl: "",
        hasCaseStudy: true,
        featured: true,
        status: "shipped",
    },
    {
        slug: "mern-docker-ec2",
        title: "Dockerized MERN Deployment on AWS EC2",
        description:
            "Containerized a MERN application with Docker and deployed it on an AWS EC2 instance.",
        categories: ["DevOps", "MERN"],
        tags: ["Docker", "AWS EC2", "Linux", "MongoDB", "Node.js"],
        thumbnail: "/images/projects/docker-ec2.webp",
        githubUrl: "",
        hasCaseStudy: true,
        featured: true,
        status: "shipped",
    },
    {
        slug: "library-management-cli",
        title: "Library Management CLI",
        description: "Command-line library system written in Python.",
        categories: ["Python"],
        tags: ["Python", "CLI", "OOP"],
        thumbnail: "/images/projects/library-cli.webp",
        githubUrl: "",
        hasCaseStudy: false,
        status: "shipped",
    },
];