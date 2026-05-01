import Link from "next/link";

import { siteConfig, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/35 py-8">
      <Container className="flex flex-col gap-6 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">{siteConfig.name}</p>
          <p>Built for speed, motion, clarity, and a sharper first impression.</p>
          <div className="mt-3 flex flex-wrap gap-4 text-white/48">
            <Link href="/full-stack-developer-india" className="transition hover:text-red-200">
              Full Stack Developer in India
            </Link>
            <Link href="/react-developer-mumbai" className="transition hover:text-red-200">
              React Developer in Mumbai
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-red-200"
            >
              <SocialIcon name={link.label} className="size-5 shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
