export interface JourneyEntry {
    period: string;
    title: string;
    place: string;
    description: string;
    status: "done" | "current";
}

export const journey: JourneyEntry[] = [
    {
        period: "2022 to present",
        title: "BS Software Engineering",
        place: "Your University Name",
        description:
            "Coursework in data structures, databases, software design, and system analysis. Built multiple academic projects including UML, ERD, and sequence diagrams for real systems.",
        status: "current",
    },
    {
        period: "2024",
        title: "Started building full stack products",
        place: "Self directed",
        description:
            "Moved from coursework into building complete MERN applications on my own, covering the database, the API, and the interface.",
        status: "done",
    },
    {
        period: "2025",
        title: "Docker and AWS deployment",
        place: "Self directed",
        description:
            "Containerized a MERN application with Docker and deployed it on an AWS EC2 instance, handling environment configuration and server setup.",
        status: "done",
    },
    {
        period: "Now",
        title: "Final Year Project",
        place: "Your University Name",
        description:
            "Starting my capstone project this semester. Details and progress will be added here as the project develops.",
        status: "current",
    },
];