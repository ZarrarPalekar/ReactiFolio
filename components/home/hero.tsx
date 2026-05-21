"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import { siteConfig } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Magnetic } from "@/components/ui/magnetic";
import { Marquee } from "@/components/ui/marquee";

const marqueeStack = [
  "React",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "MongoDB",
  ".NET",
  "Express",
  "Apollo",
  "AI-assisted SDLC",
  "Scrum",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const titleY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.4]);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(40);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,58,69,0.30), transparent 55%)`;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* mouse-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={prefersReducedMotion ? undefined : { background: glowBg }}
      />
      {/* corner brackets */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-24 flex justify-between text-white/30 sm:inset-x-10 lg:inset-x-14"
      >
        <span className="mono text-[0.7rem] uppercase tracking-[0.4em]">
          [ 01 / Index ]
        </span>
        <span className="mono hidden text-[0.7rem] uppercase tracking-[0.4em] sm:inline">
          {siteConfig.location} \\ Available for work
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-end px-5 pb-28 pt-40 sm:px-10 sm:pt-44 lg:px-14 lg:pb-36">
        {/* status pill */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="mono text-[0.7rem] uppercase tracking-[0.32em] text-white/70">
            Senior MERN / PERN / Team Lead / CSM
          </span>
        </motion.div>

        <motion.h1
          style={
            prefersReducedMotion
              ? undefined
              : { y: titleY, opacity: titleOpacity }
          }
          className="display text-[clamp(3.5rem,12vw,12rem)] text-white"
        >
          <motion.span
            className="block"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Zarrar
          </motion.span>
          <motion.span
            className="block text-gradient-red"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Palekar<span className="text-[var(--accent)]">.</span>
          </motion.span>
        </motion.h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34 }}
            className="max-w-2xl text-lg leading-[1.6] text-white/65 sm:text-xl"
          >
            Senior full-stack engineer building production-grade web software in{" "}
            <span className="text-white">React, Node.js, PostgreSQL</span>, and{" "}
            <span className="text-white">.NET</span>. I lead remote product
            teams, stay close to the code, and ship with AI-assisted,
            human-reviewed discipline.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42 }}
            className="flex flex-col items-start gap-4 sm:flex-row lg:justify-end"
          >
            <Magnetic strength={0.35}>
              <Link
                href="/#projects"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[var(--accent)] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_24px_60px_-20px_rgba(255,58,69,0.7)] transition hover:bg-[#ff525d]"
              >
                <span className="relative z-10">Selected work →</span>
                <span className="absolute inset-0 -z-0 translate-y-full bg-white/15 transition group-hover:translate-y-0" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.35}>
              <CalendlyButton className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 text-sm font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur transition hover:border-white/50 hover:bg-white/[0.07]">
                Book a call
              </CalendlyButton>
            </Magnetic>
          </motion.div>
        </div>

        {/* meta row */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 grid gap-6 border-t border-white/10 pt-6 text-white/55 md:grid-cols-4"
        >
          {[
            ["Role", "Senior SWE · Team Lead"],
            ["Years", "9+ across MERN / PERN / .NET"],
            ["Team", "Leading 9 developers + 3 QA"],
            ["Cert", "Certified Scrum Master"],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                {label}
              </span>
              <span className="text-sm text-white/85">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/35 lg:flex">
        <span className="mono text-[0.65rem] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <motion.span
            className="absolute inset-x-0 top-0 block h-3 bg-[var(--accent)]"
            initial={{ y: "-100%" }}
            animate={prefersReducedMotion ? {} : { y: "300%" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>

      {/* bottom marquee */}
      <div className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-black/40 backdrop-blur-md">
        <Marquee duration={48}>
          {marqueeStack.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="mono flex items-center gap-6 px-6 py-4 text-sm uppercase tracking-[0.32em] text-white/55"
            >
              {item}
              <span className="text-[var(--accent)]">●</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
