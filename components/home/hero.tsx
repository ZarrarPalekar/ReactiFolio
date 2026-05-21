"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { heroStats, projects, siteConfig, socialLinks } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcon } from "@/components/ui/social-icon";
import { Marquee } from "@/components/ui/marquee";

const heroStack = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "GraphQL",
  ".NET",
  "AI-assisted SDLC",
  "Scrum",
];

const previewProjects = projects.filter((p) => p.featured).slice(0, 3);

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sBg = useSpring(yBg, { stiffness: 90, damping: 22 });
  const sContent = useSpring(yContent, { stiffness: 90, damping: 22 });

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-b border-white/5"
    >
      {/* Animated mesh */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? 0 : sBg }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-[var(--primary)] opacity-[0.18] blur-[140px]" />
        <div className="absolute right-0 top-40 h-[520px] w-[520px] rounded-full bg-[var(--tertiary)] opacity-[0.16] blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[var(--secondary)] opacity-[0.12] blur-[140px]" />
      </motion.div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,#000_30%,transparent_80%)]"
      />

      <Container className="relative">
        <motion.div
          style={{ y: reduce ? 0 : sContent, opacity: reduce ? 1 : opacity }}
          className="flex min-h-[calc(94svh-5rem)] flex-col justify-between py-14 sm:py-20 lg:py-24"
        >
          <div className="max-w-6xl pt-6 lg:pt-10">
            {/* Eyebrow chip */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-white/70">
                Open to senior / lead roles
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mt-7 text-balance text-[clamp(3.2rem,9.4vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.025em]">
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white"
              >
                Building software
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient"
              >
                that ships,
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white/90"
              >
                <span className="italic font-light text-white/60">led by</span>{" "}
                <span className="text-gradient-warm">people who care</span>
                <span className="cursor-blink ml-2 inline-block h-[0.85em] w-[0.06em] translate-y-1 bg-[var(--primary)]" />
              </motion.span>
            </h1>

            {/* Subhead + meta */}
            <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_1fr]">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.28 }}
                className="max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl"
              >
                I&apos;m{" "}
                <span className="font-semibold text-white">
                  {siteConfig.name}
                </span>{" "}
                — a Senior MERN/PERN engineer and Certified Scrum Master in{" "}
                {siteConfig.location}. I lead remote teams, stay hands-on across
                React, Node, PostgreSQL, GraphQL and .NET, and use AI-assisted
                SDLC with human review.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.34 }}
                className="flex flex-wrap items-start gap-3"
              >
                <Magnetic strength={0.4}>
                  <Link
                    href="/#projects"
                    className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-deep)] px-7 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,75,92,0.35)] transition hover:shadow-[0_14px_60px_rgba(255,75,92,0.55)]"
                  >
                    <span className="relative z-10">See selected work</span>
                    <span className="relative z-10 transition group-hover:translate-x-1">
                      →
                    </span>
                    <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-[var(--primary-deep)] to-[var(--primary)] transition group-hover:translate-y-0" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <CalendlyButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.06]">
                    <SocialIcon name="Calendly" className="size-4 shrink-0" />
                    Book a call
                  </CalendlyButton>
                </Magnetic>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="group relative overflow-hidden bg-[#0c0c12]/85 p-6 backdrop-blur-md"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 blur-2xl transition group-hover:opacity-100"
                  />
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-white/35">
                    0{i + 1}
                  </p>
                  <p className="mt-3 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
              <div className="grid gap-2 sm:grid-cols-3">
                {previewProjects.map((project, i) => (
                  <Link
                    key={project.slug}
                    href={project.liveUrl ?? project.repoUrl ?? "/projects"}
                    target={project.liveUrl || project.repoUrl ? "_blank" : undefined}
                    rel={project.liveUrl || project.repoUrl ? "noreferrer" : undefined}
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/8"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 30vw, 200px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                    <div className="absolute inset-x-3 bottom-3">
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.24em] text-white/50">
                        Project · {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {project.name}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/80 backdrop-blur transition group-hover:bg-[var(--primary)] group-hover:text-white"
                    >
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/50"
          >
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <SocialIcon name={link.label} className="size-4 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="/#about"
              className="group hidden items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-white/40 transition hover:text-white sm:inline-flex"
            >
              <span className="floaty inline-block">↓</span>
              Scroll to explore
            </a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Tech marquee strip */}
      <div className="relative border-y border-white/5 bg-black/30 py-5 backdrop-blur-sm">
        <Marquee>
          {heroStack.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-white/40"
            >
              <span className="text-[var(--primary)]">◇</span>
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
