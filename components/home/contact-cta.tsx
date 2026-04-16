import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactCta() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal className="overflow-hidden rounded-[2.25rem] border border-red-500/18 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.24),_rgba(0,0,0,0.96)_58%)] p-8 sm:p-12 lg:p-16">
          <SectionHeading
            eyebrow="Contact"
            title="Need a frontend lead who cares about product quality as much as shipping velocity?"
            description="I’m available for product work, consulting, and focused collaborations where design quality and engineering standards both matter."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/36">Email</p>
              <Link href={`mailto:${siteConfig.email}`} className="mt-3 block text-lg text-white transition hover:text-red-400">
                {siteConfig.email}
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/36">Phone</p>
              <Link href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="mt-3 block text-lg text-white transition hover:text-red-400">
                {siteConfig.phone}
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/36">Location</p>
              <p className="mt-3 text-lg text-white">{siteConfig.location}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-7 text-sm font-medium text-black transition hover:bg-red-400"
            >
              Schedule on Calendly
            </Link>
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
