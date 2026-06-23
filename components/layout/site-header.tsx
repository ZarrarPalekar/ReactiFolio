"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/portfolio";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(current > 24);
    if (open) {
      setHidden(false);
      return;
    }
    if (current > prev && current > 160) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-white/10 bg-[#050202]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between gap-6 px-5 py-4 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04] backdrop-blur transition group-hover:border-[var(--accent)]/50">
            <Image
              src="/images/profile/ZP-logo.svg"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="40px"
              priority
              className="object-contain p-1"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/45">
              Zarrar Palekar
            </span>
            <span className="mt-1.5 mono text-[0.6rem] uppercase tracking-[0.32em] text-white/30">
              Full Stack Developer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur-md lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono rounded-full px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="hidden items-center gap-2 mono text-[0.65rem] uppercase tracking-[0.28em] text-emerald-300 xl:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available
          </span>
          <CalendlyButton className="mono inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[0.7rem] uppercase tracking-[0.24em] text-black transition hover:bg-white/85">
            Strategy call →
          </CalendlyButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#050202]/96 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1480px] flex-col px-5 py-6 sm:px-10">
              {navigation.slice(1).map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-b border-white/8 py-4 last:border-b-0"
                >
                  <span className="display text-3xl text-white transition group-hover:text-[var(--accent-soft)]">
                    {item.label}
                  </span>
                  <span className="mono text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
              <CalendlyButton
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#ff525d]"
              >
                <SocialIcon name="Calendly" className="size-5 shrink-0" />
                <span className="ml-2">Strategy call</span>
              </CalendlyButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
