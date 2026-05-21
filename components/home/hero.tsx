"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

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

// Tunables for the curtain reveal
const CURTAIN_PANEL_DURATION = 1.15;
const CURTAIN_PANEL_DELAY = 0.25;
const CURTAIN_TOTAL_MS =
  (CURTAIN_PANEL_DELAY + CURTAIN_PANEL_DURATION) * 1000 + 60;
// Hero elements start emerging shortly after curtains begin splitting
const HERO_BASE_DELAY = 0.55;
const CURTAIN_EASE: [number, number, number, number] = [0.85, 0, 0.15, 1];

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

  // Curtain state — open when reveal animation finishes (or immediately on reduced motion)
  const [curtainOpen, setCurtainOpen] = useState(prefersReducedMotion ?? false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurtainOpen(true);
      return;
    }

    // Lock body scroll while the curtain plays
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setCurtainOpen(true);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    }, CURTAIN_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [prefersReducedMotion]);

  const heroDelay = (extra: number) =>
    prefersReducedMotion ? 0 : HERO_BASE_DELAY + extra;

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
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: heroDelay(0.5) }}
          className="mono text-[0.7rem] uppercase tracking-[0.4em]"
        >
          [ 01 / Index ]
        </motion.span>
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: heroDelay(0.5) }}
          className="mono hidden text-[0.7rem] uppercase tracking-[0.4em] sm:inline"
        >
          {siteConfig.location} \\ Available for work
        </motion.span>
      </div>

      {/* Hero content — subtle scale settle as curtains open */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.04 }}
        animate={prefersReducedMotion ? {} : { scale: 1 }}
        transition={{
          duration: CURTAIN_PANEL_DURATION + 0.1,
          delay: CURTAIN_PANEL_DELAY,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1480px] flex-col justify-end px-5 pb-28 pt-40 sm:px-10 sm:pt-44 lg:px-14 lg:pb-36"
        style={{ transformOrigin: "50% 65%" }}
      >
        {/* status pill */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: heroDelay(0) }}
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
            initial={prefersReducedMotion ? false : { opacity: 0, y: 80 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: heroDelay(0.05),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Zarrar
          </motion.span>
          <motion.span
            className="block text-gradient-red"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 80 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: heroDelay(0.15),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="serif font-normal">Palekar</span>
            <span className="text-[var(--accent)]">.</span>
          </motion.span>
        </motion.h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: heroDelay(0.3) }}
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
            transition={{ duration: 0.9, delay: heroDelay(0.4) }}
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
          transition={{ duration: 0.9, delay: heroDelay(0.5) }}
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
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: heroDelay(0.7) }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/35 lg:flex"
      >
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
      </motion.div>

      {/* bottom marquee */}
      <motion.div
        initial={prefersReducedMotion ? false : { y: "100%" }}
        animate={prefersReducedMotion ? {} : { y: 0 }}
        transition={{
          duration: 0.9,
          delay: heroDelay(0.55),
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-black/40 backdrop-blur-md"
      >
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
      </motion.div>

      {/* CURTAIN — two black panels split apart from a thin red seam */}
      <AnimatePresence>
        {!curtainOpen ? (
          <motion.div
            key="curtain"
            className="pointer-events-none absolute inset-0 z-40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {/* left panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: CURTAIN_PANEL_DURATION,
                delay: CURTAIN_PANEL_DELAY,
                ease: CURTAIN_EASE,
              }}
              className="absolute left-0 top-0 h-full w-1/2 origin-right bg-[#020101]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 38px), radial-gradient(ellipse 80% 60% at 100% 50%, rgba(255,58,69,0.08), transparent 70%)",
              }}
            />
            {/* right panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                duration: CURTAIN_PANEL_DURATION,
                delay: CURTAIN_PANEL_DELAY,
                ease: CURTAIN_EASE,
              }}
              className="absolute right-0 top-0 h-full w-1/2 origin-left bg-[#020101]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 38px), radial-gradient(ellipse 80% 60% at 0% 50%, rgba(255,58,69,0.08), transparent 70%)",
              }}
            />

            {/* center red seam — visible briefly before split, fades during open */}
            <motion.div
              aria-hidden
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: CURTAIN_PANEL_DELAY + CURTAIN_PANEL_DURATION,
                times: [0, 0.16, 0.42, 1],
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "50% 50%" }}
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--accent)] shadow-[0_0_28px_rgba(255,58,69,0.85)]"
            />

            {/* tiny loading word during the early curtain moment */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.85, 0] }}
              transition={{
                duration: CURTAIN_PANEL_DELAY + 0.55,
                times: [0, 0.4, 1],
                ease: "easeOut",
              }}
              className="mono absolute bottom-12 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] text-white/60"
            >
              Zarrar Palekar — Portfolio &apos;26
            </motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
