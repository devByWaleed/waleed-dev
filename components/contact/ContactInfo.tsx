import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { site } from "@/data/site";

const details = [
    { icon: HiOutlineMail, label: site.email, href: `mailto:${site.email}` },
    { icon: HiOutlinePhone, label: site.phone, href: `tel:${site.phone}` },
    { icon: HiOutlineLocationMarker, label: site.location, href: undefined },
];

const follow = [
    { label: "GitHub", href: "https://github.com/devByWaleed", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/waleed-webdev", icon: FaLinkedin },
    { label: "LeetCode", href: "https://leetcode.com/u/solveWithWaleed", icon: SiLeetcode },
];

export default function ContactInfo() {
    return (
        <div className="card flex flex-col gap-8 p-6">
            <div>
                <h3 className="font-display text-lg font-semibold">Contact details</h3>
                <ul className="mt-4 space-y-3">
                    {details.map(({ icon: Icon, label, href }) => (
                        <li key={label} className="flex items-center gap-3 text-sm text-muted">
                            <Icon size={18} className="text-accent" />
                            {href ? (
                                <Link href={href} target="_blank" className="transition-colors hover:text-fg">
                                    {label}
                                </Link>
                            ) : (
                                <span>{label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-display text-lg font-semibold">Follow me</h3>
                <div className="mt-4 flex items-center gap-3">
                    {follow.map(({ label, href, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                        >
                            <Icon size={18} aria-hidden="true" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}