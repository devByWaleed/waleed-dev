import { nav } from "@/data/site";
import ScrollLink from "./ScrollLink";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
            <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <ScrollLink href="#top" className="font-display text-lg font-semibold">
                    <span className="text-accent">&lt;</span>
                    Portfolio
                    <span className="text-accent"> /&gt;</span>
                </ScrollLink>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm text-muted">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <ScrollLink
                                    href={item.href}
                                    className="transition-colors hover:text-fg"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <MobileNav />
            </div>
        </header>
    );
}