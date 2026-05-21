"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { navigation, siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07070a]/80 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--tertiary)]/20 shadow-[0_0_24px_rgba(255,75,92,0.2)] transition group-hover:scale-[1.06] group-hover:rotate-3">
            <Image
              src="/images/profile/ZP-logo.svg"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="44px"
              priority
              className="object-contain p-1.5"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight text-white">
              {siteConfig.name}
            </span>
            <span className="text-[0.62rem] font-mono uppercase tracking-[0.32em] text-white/40">
              Senior Engineer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.25)] lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-white/70 transition hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--tertiary)]/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <nav className="hidden items-center gap-3 lg:flex">
          <span className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200 xl:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available
          </span>
          <CalendlyButton className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-deep)] px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,75,92,0.35)] transition hover:shadow-[0_12px_44px_rgba(255,75,92,0.55)]">
            <SocialIcon name="Calendly" className="size-4 shrink-0 transition group-hover:rotate-12" />
            Book a call
          </CalendlyButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative grid h-4 w-5 place-items-center">
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/10 bg-[#07070a]/95 backdrop-blur-2xl lg:hidden"
        >
          <Container className="flex flex-col py-5">
            {navigation.slice(1).map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-base text-white/80 transition hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="text-white/30">→</span>
                </Link>
              </motion.div>
            ))}
            <CalendlyButton
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-deep)] px-5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,75,92,0.4)]"
            >
              <SocialIcon name="Calendly" className="size-4 shrink-0" />
              Book a strategy call
            </CalendlyButton>
          </Container>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
