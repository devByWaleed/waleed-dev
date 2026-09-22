import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Section from "@/components/ui/Section";
import { site } from "@/data/site";

export default function About() {
    return (
        <Section id="about" eyebrow="About" title="What I bring">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <h3 className="font-display text-xl font-semibold text-accent">
                        My approach
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                        {site.description} I care about the full path from an idea to a
                        working product in front of real users, not just the parts that
                        look good in a screenshot. That means thinking through the
                        database schema, the API contract, and the deployment, not only
                        the interface.
                    </p>
                </div>

                <div>
                    <h3 className="font-display text-xl font-semibold text-accent">
                        My journey so far
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                        I am currently in my 7th semester of a Software Engineering
                        degree, about to start my final year project. Alongside my
                        coursework I build complete MERN applications on my own, and I
                        have recently started containerizing and deploying them to the
                        cloud with Docker and AWS.
                    </p>
                </div>
            </div>

            <div className="card mt-10 flex flex-wrap gap-4 p-6">
                <div>
                    <p className="text-sm text-muted">{site.location}</p>
                    <p className="text-sm text-muted">{site.email}</p>
                </div>
                <Link
                    href={site.resumeUrl}
                    target="_blank"
                    className="ml-auto flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                    <FiDownload size={16} />
                    Resume
                </Link>
            </div>
        </Section>
    );
}