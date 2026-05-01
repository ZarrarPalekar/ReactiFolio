import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
      className="bg-[linear-gradient(180deg,transparent,rgba(41,211,208,0.055)_42%,rgba(255,67,87,0.055)_100%)] py-18 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="If the fit is right, let's make the next screen clearer."
            description="Available for focused product work, frontend leadership, and full stack support."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
              Collaboration path
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["01", "Brief", "Understand the product, audience, and pressure points."],
                ["02", "Build", "Shape the architecture, interface, and delivery plan."],
                ["03", "Launch", "Review, refine, and ship with clean handover."],
              ].map(([step, label, copy], index) => (
                <div key={step} className="bg-[#06100d] p-5">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                      index === 0
                        ? "text-cyan-100/72"
                        : index === 1
                          ? "text-lime-100/72"
                          : "text-red-100/72"
                    }`}
                  >
                    {step}
                  </p>
                  <p className="mt-8 text-2xl font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-black transition hover:bg-cyan-100">
                <SocialIcon name="Calendly" className="size-5 shrink-0" />
                Schedule on Calendly
              </CalendlyButton>
              <Link
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-7 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:text-cyan-100"
              >
                <SocialIcon name="LinkedIn" className="size-5 shrink-0" />
                Connect on LinkedIn
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-5">
            {contactCards.map((item, index) => {
              const content = (
                <div className="rounded-lg border border-white/10 bg-black/35 p-5 transition hover:border-cyan-200/35">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                      index === 0
                        ? "text-cyan-100/70"
                        : index === 1
                          ? "text-lime-100/70"
                          : "text-red-100/70"
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
