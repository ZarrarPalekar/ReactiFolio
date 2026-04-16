import Link from "next/link";

import { siteConfig, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">{siteConfig.name}</p>
          <p>Designed for speed, motion, and clarity with Next.js App Router.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
