"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    onNavigate?: () => void;
    children: ReactNode;
}

export default function ScrollLink({
    href,
    onNavigate,
    children,
    ...rest
}: ScrollLinkProps) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const id = href.replace("#", "");
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth" });
        onNavigate?.();
    };

    return (
        <a href={href} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}