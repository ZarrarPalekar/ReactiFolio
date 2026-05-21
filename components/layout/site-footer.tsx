import Link from "next/link";

import { siteConfig, socialLinks } from "@/data/portfolio";
import { Marquee } from "@/components/ui/marquee";
import { SocialIcon } from "@/components/ui/social-icon";

const tagline = [
  "Senior Full-Stack Engineer",
  "MERN / PERN / .NET",
  "Team Lead",
  "Certified Scrum Master",
  "Mumbai \\ Remote",
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#050202]">
      <div className="border-b border-white/10 bg-black/40">
        <Marquee duration={50}>
          {tagline.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="display flex items-center gap-10 px-8 py-6 text-3xl text-white/85 sm:text-4xl"
            >
              {label}
              <span className="text-[var(--accent)]">●</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-12 px-5 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-5xl text-white sm:text-6xl">
              {siteConfig.name}<span className="text-[var(--accent)]">.</span>
            </p>
          </div>

          <div>
            <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
              Navigate
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-white/70">
              <li>
                <Link href="/#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-white">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-white">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="mt-6 flex flex-col gap-3 text-white/45 text-sm">
              <li>
                <Link href="/full-stack-developer-india" className="hover:text-white">
                  Full Stack Developer in India ↗
                </Link>
              </li>
              <li>
                <Link href="/react-developer-mumbai" className="hover:text-white">
                  React Developer in Mumbai ↗
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
              Channels
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-white/70 hover:text-white"
                  >
                    <SocialIcon name={link.label} className="size-4 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {siteConfig.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-white/70 hover:text-white"
                >
                  {siteConfig.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[0.65rem] uppercase tracking-[0.32em]">
            © {new Date().getFullYear()} {siteConfig.name} \\ All rights reserved
          </p>
          <p className="mono text-[0.65rem] uppercase tracking-[0.32em]">
            Built with Next.js · React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
