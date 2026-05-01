"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { heroStats, projects, siteConfig, socialLinks } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";

const heroStack = ["React", "Node.js", "TypeScript", ".NET", "SQL", "Delivery"];
const previewProjects = projects.filter((project) => project.featured).slice(0, 3);

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scanOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    prefersReducedMotion ? [0.18, 0.18] : [0.26, 0.08],
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#050202]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(239,68,68,0.14),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(185,28,28,0.08),transparent_28%),linear-gradient(90deg,#050202_0%,rgba(5,2,2,0.96)_48%,rgba(5,2,2,0.86)_100%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]"
        style={{ opacity: scanOpacity }}
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent sm:left-8 lg:left-12"
      />

      <Container className="relative flex min-h-[calc(92svh-5rem)] flex-col justify-between py-14 sm:py-16 lg:py-18">
        <div className="max-w-5xl pt-5 lg:pt-12">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-semibold uppercase tracking-[0.38em] text-red-200/85"
          >
            Senior full stack engineer / delivery lead
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="mt-5 max-w-[12ch] text-6xl font-semibold leading-[0.92] text-white sm:text-8xl lg:text-[7.4rem] xl:text-[8.6rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14 }}
            className="mt-6 flex max-w-3xl flex-wrap gap-2"
          >
            {heroStack.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-3.5 py-2 text-xs font-medium uppercase tracking-[0.18em] ${
                  index % 3 === 0
                    ? "border-red-300/24 bg-red-300/10 text-red-100"
                    : index % 3 === 1
                      ? "border-red-500/24 bg-red-500/10 text-red-200"
                      : "border-red-800/24 bg-red-950/45 text-red-300"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl"
          >
            {siteConfig.title} in {siteConfig.location}, building polished
            product interfaces, reliable backend systems, and the kind of
            stakeholder rhythm that gets complex work shipped.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(239,68,68,0.18)] transition hover:bg-red-500 hover:text-white"
            >
              Explore selected work
            </Link>
            <CalendlyButton className="inline-flex min-h-12 items-center justify-center rounded-full border border-red-500/22 bg-black/45 px-7 text-sm font-semibold text-red-200 backdrop-blur transition hover:border-red-500/55 hover:bg-red-500/10">
              Book a strategy call
            </CalendlyButton>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.36 }}
          className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#100506]/86 p-5 backdrop-blur-md transition hover:bg-red-500/10"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-wrap content-start gap-2 rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur-md">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-red-500/15 bg-black/30 px-3.5 py-2 text-sm text-white/72 transition hover:border-red-500/45 hover:bg-red-500/10 hover:text-red-200"
                >
                  <SocialIcon name={link.label} className="size-5 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-black/35 p-3 backdrop-blur-md">
              <div className="flex gap-3">
                {previewProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={project.liveUrl ?? project.repoUrl ?? "/projects"}
                    target={project.liveUrl ?? project.repoUrl ? "_blank" : undefined}
                    rel={project.liveUrl ?? project.repoUrl ? "noreferrer" : undefined}
                    className="group relative min-h-28 flex-1 overflow-hidden rounded-md border border-white/10"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 30vw, 180px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 right-3 text-xs font-medium uppercase tracking-[0.16em] text-white/86">
                      {project.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </motion.div>
      </Container>
    </section>
  );
}
