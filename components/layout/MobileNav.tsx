"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { nav } from "@/data/site";
import ScrollLink from "./ScrollLink";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg"
            >
                {open ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>

            {open && (
                <div className="absolute inset-x-0 top-16 border-b border-border bg-bg/95 backdrop-blur-md">
                    <ul className="flex flex-col gap-1 px-6 py-4">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <ScrollLink
                                    href={item.href}
                                    onNavigate={() => setOpen(false)}
                                    className="block py-3 text-base text-muted transition-colors hover:text-fg"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}