import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site, nav } from "@/data/site";
import ScrollLink from "./ScrollLink";

const socials = [
    { label: "GitHub", href: "https://github.com/devByWaleed", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/waleed-webdev", icon: FaLinkedin },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border px-6 py-14">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
                <div>
                    <ScrollLink href="#top" className="font-display text-lg font-semibold">
                        <span className="text-accent">&lt;</span>
                        Portfolio
                        <span className="text-accent"> /&gt;</span>
                    </ScrollLink>
                    <p className="mt-3 max-w-xs text-sm text-muted">
                        {site.description}
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                        Quick links
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <ScrollLink
                                    href={item.href}
                                    className="text-sm text-muted transition-colors hover:text-fg"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                        Get in touch
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                        <li>
                            <Link
                                href={`mailto:${site.email}`}
                                target="_blank"
                                className="flex items-center gap-2 transition-colors hover:text-fg"
                            >
                                <HiOutlineMail size={16} />
                                {site.email}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`tel:${site.phone}`}
                                className="flex items-center gap-2 transition-colors hover:text-fg"
                            >
                                <HiOutlinePhone size={16} />
                                {site.phone}
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-4 flex items-center gap-3">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                            >
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted md:flex-row md:justify-between md:text-left">
                <p>© {year} {site.name}. All rights reserved.</p>
                <p>Built with Next.js and Tailwind CSS.</p>
            </div>
        </footer>
    );
}