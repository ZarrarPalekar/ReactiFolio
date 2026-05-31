import Image from "next/image";
import Link from "next/link";

import { ImageReveal } from "@/components/animations/image-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { SectionReveal } from "@/components/animations/section-reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";
import { heroStats, projects, siteConfig, socialLinks } from "@/data/portfolio";

const heroStack = [
  "React",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  ".NET",
  "Scrum",
  "AI SDLC",
];

const previewProjects = projects.filter((project) => project.featured).slice(0, 3);

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/10 bg-[#050608]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,77,95,0.16),transparent_28%),linear-gradient(245deg,rgba(142,240,223,0.1),transparent_34%),linear-gradient(180deg,transparent_0%,rgba(5,6,8,0.88)_85%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/18 to-transparent sm:left-8 lg:left-10"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[92rem] flex-col px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="grid flex-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="pt-8 lg:pt-10">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#8ef0df]">
                Senior Software Developer / Team Lead / CSM
              </p>
            </SectionReveal>

            <TextReveal
              as="h1"
              text={siteConfig.name}
              className="mt-5 max-w-[11ch] text-6xl font-semibold leading-[0.9] text-white sm:text-8xl lg:text-9xl"
              delay={0.1}
            />

            <SectionReveal delay={0.16}>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
                I build scalable web products, lead remote engineering teams,
                and turn product ambiguity into shipped full-stack systems.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/52 sm:text-lg">
                {siteConfig.title} based in {siteConfig.location}, with 9+
                years across SaaS, CRM, CMS, enterprise delivery, SEO-aware
                web builds, and AI-assisted development workflows.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.22} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton>
                <Link
                  href="/#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#050608] shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition hover:bg-[#8ef0df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef0df]"
                >
                  Explore selected work
                </Link>
              </MagneticButton>
              <MagneticButton>
                <CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-7 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f8c85b]/50 hover:text-[#f8c85b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f8c85b]">
                  <SocialIcon name="Calendly" className="size-5 shrink-0" />
                  Book a strategy call
                </CalendlyButton>
              </MagneticButton>
            </SectionReveal>

            <SectionReveal delay={0.28} className="mt-9 flex flex-wrap gap-2">
              {heroStack.map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                    index % 3 === 0
                      ? "border-[#8ef0df]/24 bg-[#8ef0df]/10 text-[#b9fff3]"
                      : index % 3 === 1
                        ? "border-[#ff4d5f]/24 bg-[#ff4d5f]/10 text-[#ffd2d7]"
                        : "border-[#f8c85b]/24 bg-[#f8c85b]/10 text-[#ffe7a3]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </SectionReveal>
          </div>

          <div className="relative grid gap-4 lg:pl-8">
            <ImageReveal className="relative min-h-[30rem] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] sm:min-h-[36rem] lg:min-h-[42rem]">
              <Image
                src="/images/profile/profile.webp"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                priority
                data-reveal-media
                className="object-cover object-[50%_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/12 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-[#050608]/72 p-4 backdrop-blur-xl"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-xs leading-5 text-white/58">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ImageReveal>

            <SectionReveal delay={0.12} className="grid gap-4 md:grid-cols-[0.86fr_1.14fr]">
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/36">
                  Connect
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3.5 py-2 text-sm text-white/66 transition hover:border-[#8ef0df]/45 hover:text-[#8ef0df]"
                    >
                      <SocialIcon name={link.label} className="size-5 shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                {previewProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={project.liveUrl ?? project.repoUrl ?? "/projects"}
                    target={project.liveUrl ?? project.repoUrl ? "_blank" : undefined}
                    rel={project.liveUrl ?? project.repoUrl ? "noreferrer" : undefined}
                    aria-label={`Open ${project.name}`}
                    className="group relative min-h-28 overflow-hidden rounded-md border border-white/10"
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 30vw, 190px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
                    <span className="absolute bottom-3 left-3 right-3 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-white/86">
                      {project.name}
                    </span>
                  </Link>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

        <SectionReveal delay={0.36}>
          <div className="mt-8 flex items-center justify-between gap-5 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.28em] text-white/38">
            <span>Scroll for the build story</span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:block" />
            <span>2026 portfolio system</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
