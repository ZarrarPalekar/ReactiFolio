import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactCta() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal className="overflow-hidden rounded-[2.25rem] border border-red-500/18 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.24),_rgba(0,0,0,0.96)_58%)] p-8 sm:p-12 lg:p-16">
          <SectionHeading
            eyebrow="Contact"
            title="If the fit is right, let’s make the next screen clearer."
            description="Available for focused product work, frontend leadership, and full stack support."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 sm:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,68,68,0.28),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.1),transparent_18%)]" />
                <div className="relative grid gap-4 sm:grid-cols-3">
                  {[
                    ["01", "Brief"],
                    ["02", "Build"],
                    ["03", "Launch"],
                  ].map(([step, label]) => (
                    <div
                      key={step}
                      className="rounded-[1.25rem] border border-white/10 bg-black/35 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                        {step}
                      </p>
                      <p className="mt-6 text-xl font-medium text-white">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/36">
                  Email
                </p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-lg text-white transition hover:text-red-400"
                >
                  {siteConfig.email}
                </Link>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/36">
                  Phone
                </p>
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="mt-3 block text-lg text-white transition hover:text-red-400"
                >
                  {siteConfig.phone}
                </Link>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/36">
                  Location
                </p>
                <p className="mt-3 text-lg text-white">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CalendlyButton
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-7 text-sm font-medium text-black transition hover:bg-red-400"
            >
              Schedule on Calendly
            </CalendlyButton>
            <Link
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-7 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
