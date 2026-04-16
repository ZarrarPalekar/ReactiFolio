import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/portfolio";
import { getExperienceYears } from "@/lib/date";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  const experienceYears = getExperienceYears("2017-03-01");

  return (
    <section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Dedicated full stack web development with a strong React and Node.js foundation."
            description="The copy below restores the original personal positioning from the earlier portfolio so the new site stays true to your existing brand and experience."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="mx-auto flex max-w-[320px] flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/images/profile/profile.webp"
                    alt={siteConfig.name}
                    width={200}
                    height={200}
                    priority
                    sizes="(max-width: 768px) 200px, 320px"
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="text-xs uppercase tracking-[0.38em] text-red-500">
                    Snapshot
                  </p>
                  <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    {experienceYears}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                    years of professional experience building full stack
                    products with React on the frontend and Node.js on the
                    backend.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                  Focus
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  React + Node.js
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Building elegant UI systems and robust application logic
                  together.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                  Based In
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  {siteConfig.location}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Available for consulting, product builds, and long-term
                  engineering work.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-5 text-base leading-8 text-white/68 sm:text-lg">
                <p>
                  Hi there! I am{" "}
                  <strong className="font-semibold text-white">
                    Zarrar Palekar
                  </strong>
                  .
                </p>
                <p>
                  With over{" "}
                  <strong className="font-semibold text-red-400">
                    {experienceYears} years
                  </strong>{" "}
                  of dedicated experience in Full Stack Web Development, my
                  passion lies in crafting elegant and intuitive web
                  applications that provide seamless user experiences.
                </p>
                <p>
                  From ideation to deployment, I prioritize delivering
                  exceptional outcomes that surpass expectations. My attention
                  to detail ensures visually appealing and functionally robust
                  applications that drive business growth and enhance user
                  engagement.
                </p>
                <p>
                  Let&apos;s collaborate to turn your vision to reality and
                  create something truly exceptional together!
                </p>
              </div>

              <div className="grid content-start gap-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Speciality
                  </p>
                  <p className="mt-3 text-xl font-medium text-white">
                    Full stack delivery with product-focused execution
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Core Stack
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    MongoDB, Express, React, Node.js, TypeScript, scalable UI
                    architecture, and modern web delivery practices.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/38">
                    Working Style
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    From ideation to deployment, focused on clean execution,
                    clear communication, and outcomes that genuinely move
                    products forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 text-sm font-medium text-black transition hover:bg-red-400"
              >
                Start a conversation
              </Link>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400"
              >
                View resume
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
