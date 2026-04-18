"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { heroStats, siteConfig, socialLinks } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const haloY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 220],
  );
  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    prefersReducedMotion ? [0.18, 0.18] : [0.28, 0.08],
  );

  return (
    <section className="relative overflow-hidden border-b border-white/10 lg:min-h-[calc(100svh-5rem)]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-20%] top-[-10rem] h-[38rem] rounded-full bg-[radial-gradient(circle,_rgba(239,68,68,0.34),_rgba(239,68,68,0.06)_38%,_transparent_68%)] blur-3xl"
        style={{ y: haloY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
        style={{ opacity: gridOpacity }}
      />

      <Container className="relative flex py-20 sm:py-24 lg:min-h-[calc(100svh-5rem)] lg:items-center lg:py-10">
        <div className="grid w-full gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:items-stretch xl:gap-14">
          <div className="flex h-full flex-col justify-between">
            <div>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xs font-semibold uppercase tracking-[0.45em] text-red-500"
              >
                Full stack engineer and delivery lead
              </motion.p>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08 }}
                className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.8rem] lg:leading-[0.92] xl:text-[6.5rem]"
              >
                End-to-end applications led with engineering depth and clear
                communication.
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
              >
                I&apos;m {siteConfig.name}, a {siteConfig.location}-based full
                stack engineer who builds frontend and backend systems, works
                closely with stakeholders, and helps teams deliver complex
                products with confidence.
              </motion.p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28 }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row"
            >
              <Link
                href="/#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-7 text-sm font-medium text-black transition hover:bg-red-400"
              >
                Explore selected work
              </Link>
              <CalendlyButton className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 px-7 text-sm font-medium text-white transition hover:border-red-500 hover:text-red-400">
                Book a strategy call
              </CalendlyButton>
            </motion.div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34 }}
            className="relative h-full"
          >
            <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/44">
                    Now shipping
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {siteConfig.title}
                  </p>
                </div>
                <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-red-400">
                  Available
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-black/40 p-4 transition hover:border-red-500/30"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/56">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-red-500/40 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <CalendlyButton className="rounded-full border border-white/10 px-4 py-2 transition hover:border-red-500/40 hover:text-white">
                  Calendly
                </CalendlyButton>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
