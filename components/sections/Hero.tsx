import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { site } from "@/data/site";

const iconLinks = [
    { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedin },
    { label: "LeetCode", href: "https://leetcode.com/u/your-username", icon: SiLeetcode },
    { label: "Email", href: `mailto:${site.email}`, icon: HiOutlineMail },
];

export default function Hero() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 pt-16 text-center md:flex-row md:text-left">
            <div className="order-1 md:order-2">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border md:h-56 md:w-56">
                    <Image
                        src={site.profileImage}
                        alt={site.name}
                        fill
                        sizes="(min-width: 768px) 224px, 160px"
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="order-2 flex flex-col items-center md:order-1 md:items-start">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
                    {site.tagline}
                </p>

                <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
                    {site.name}
                </h1>

                <p className="mt-4 text-xl text-muted md:text-2xl">{site.role}</p>

                <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
                    {site.hook}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <Link
                        href={site.resumeUrl}
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
                    >
                        <FiDownload size={16} />
                        Download Resume
                    </Link>

                    <div className="flex items-center gap-3">
                        {iconLinks.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                            >
                                <Icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}