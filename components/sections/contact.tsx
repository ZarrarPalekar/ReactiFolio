import Link from "next/link";

import { MagneticButton } from "@/components/animations/magnetic-button";
import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig } from "@/data/portfolio";

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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07080b] py-18 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(140deg,rgba(142,240,223,0.1),transparent_32%),linear-gradient(260deg,rgba(255,77,95,0.12),transparent_36%)]"
      />
      <div className="relative mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
            Contact
          </p>
          <TextReveal
            text="Need a senior full-stack lead who can still get into the code?"
            className="mt-5 text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/62">
            Available for MERN/PERN product work, AI-assisted SDLC workflows,
            codebase cleanup, SEO-aware web builds, and delivery leadership.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <SectionReveal>
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f8c85b]">
                Collaboration path
              </p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
                {[
                  [
                    "01",
                    "Clarify",
                    "Turn product needs into user stories, estimates, and technical direction.",
                  ],
                  [
                    "02",
                    "Build",
                    "Ship React, Node.js, API, database, and integration work with review discipline.",
                  ],
                  [
                    "03",
                    "Lead",
                    "Coordinate QA, stakeholders, handover, and release follow-through.",
                  ],
                ].map(([step, label, copy], index) => (
                  <div key={step} className="bg-[#050608] p-5">
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                        index === 0
                          ? "text-[#8ef0df]"
                          : index === 1
                            ? "text-[#f8c85b]"
                            : "text-[#ffb3bd]"
                      }`}
                    >
                      {step}
                    </p>
                    <p className="mt-8 text-2xl font-semibold text-white">
                      {label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton>
                  <CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#050608] transition hover:bg-[#8ef0df]">
                    <SocialIcon name="Calendly" className="size-5 shrink-0" />
                    Schedule on Calendly
                  </CalendlyButton>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]"
                  >
                    <SocialIcon name="LinkedIn" className="size-5 shrink-0" />
                    Connect on LinkedIn
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="grid gap-5">
            {contactCards.map((item, index) => {
              const content = (
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#8ef0df]/35">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                      index === 0
                        ? "text-[#8ef0df]"
                        : index === 1
                          ? "text-[#f8c85b]"
                          : "text-[#ffb3bd]"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-4 break-words text-xl font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              );

              return item.href ? (
                <Link key={item.label} href={item.href}>
                  {content}
                </Link>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
