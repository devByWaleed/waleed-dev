import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import type { Certificate } from "@/types";

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
    return (
        <div className="card flex flex-col overflow-hidden">
            <div className="relative aspect-video w-full bg-surface">
                <Image
                    src={certificate.thumbnail}
                    alt={certificate.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{certificate.title}</h3>
                    <span className="shrink-0 text-xs text-muted">{certificate.year}</span>
                </div>

                <p className="mt-1 text-sm text-accent">{certificate.issuer}</p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {certificate.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    href={certificate.certificateUrl}
                    target="_blank"
                    className="mt-6 flex items-center gap-1.5 border-t border-border pt-4 text-sm text-accent transition-colors hover:opacity-80"
                >
                    View certificate
                    <FiExternalLink size={16} aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}