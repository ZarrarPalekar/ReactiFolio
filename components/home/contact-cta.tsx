"use client";

import Link from "next/link";

import { siteConfig, socialLinks } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal, WordsReveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";

const contactCards = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "Location",
    value: siteConfig.location,
  },
];

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 py-32 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,58,69,0.18),transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="mono text-[0.7rem] uppercase tracking-[0.4em] text-white/35">
                07
              </span>
              <span className="h-px w-12 bg-white/15" />
              <span className="mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--accent-soft)]/85">
                Contact
              </span>
            </div>
          </Reveal>

          <h2 className="display mt-8 text-[clamp(3rem,10vw,9.5rem)] leading-[0.92] text-white">
            <WordsReveal text="Let's build" className="block" />
            <WordsReveal
              text="something serious."
              className="block text-gradient-red"
              delay={0.2}
            />
          </h2>

          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl text-base leading-[1.7] text-white/55 sm:text-lg">
              Available for MERN/PERN product work, AI-assisted SDLC workflows,
              codebase cleanup, and delivery leadership.
            </p>
          </Reveal>

          <Reveal delay={0.5} className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.35}>
              <CalendlyButton className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_24px_60px_-20px_rgba(255,58,69,0.7)] transition hover:bg-[#ff525d]">
                <SocialIcon name="Calendly" className="size-5 shrink-0" />
                Schedule a call
              </CalendlyButton>
            </Magnetic>
            <Magnetic strength={0.35}>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-8 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:border-white/50 hover:bg-white/[0.07]"
              >
                Email me ↗
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden border border-white/10 bg-white/[0.06] md:grid-cols-3">
          {contactCards.map((item, index) => {
            const inner = (
              <div className="group h-full bg-[#080404] p-8 transition hover:bg-[#0c0606]">
                <div className="flex items-baseline justify-between">
                  <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-[var(--accent-soft)]/80">
                    {item.label}
                  </span>
                  <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <p className="display mt-6 break-words text-2xl text-white sm:text-3xl">
                  {item.value}
                </p>
                {item.href ? (
                  <p className="mono mt-6 text-[0.65rem] uppercase tracking-[0.32em] text-white/45 transition group-hover:text-[var(--accent-soft)]">
                    Open →
                  </p>
                ) : null}
              </div>
            );

            return item.href ? (
              <Link key={item.label} href={item.href}>
                {inner}
              </Link>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 text-sm text-white/75 transition hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
            >
              <SocialIcon name={link.label} className="size-5 shrink-0" />
              {link.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
