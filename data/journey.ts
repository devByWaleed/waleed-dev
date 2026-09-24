export interface JourneyEntry {
    period: string;
    title: string;
    place: string;
    description: string;
    status: "Done" | "Current";
}

export const journey: JourneyEntry[] = [
    {
        period: "Oct 2023 to present",
        title: "BS Software Engineering",
        place: "Virtual University of Pakistan",
        description:
            "Coursework in data structures, databases and software design. Built multiple academic projects including UML, ERD, and sequence diagrams for real systems.",
        status: "Current",
    },
    {
        period: "Mar 2024",
        title: "Started building Frontend projects",
        place: "Onsite Course / Self Directed",
        description:
            "Moved from coursework into building frontend applications on my own, covering the API and the interfaces.",
        status: "Done",
    },
    {
        period: "Jun - Sept 2026",
        title: "Started building full stack products",
        place: "Dev-Weekends Fellowship | Online",
        description:
            "Moved from coursework into building complete MERN applications, covering the database, the API, and the interface.",
        status: "Done",
    },
    {
        period: "Sept 2026",
        title: "Docker and AWS deployment",
        place: "Dev-Weekends Fellowship | Online",
        description:
            "Containerized a MERN application with Docker and deployed it on an AWS EC2 instance, handling environment configuration and server setup.",
        status: "Done",
    },
    {
        period: "Now",
        title: "Final Year Project",
        place: "Virtual University of Pakistan",
        description:
            "About to start Final Year Project.",
        status: "Current",
    },
];