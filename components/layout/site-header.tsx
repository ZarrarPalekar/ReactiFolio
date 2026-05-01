"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { SocialIcon } from "@/components/ui/social-icon";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050202]/72 backdrop-blur-2xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-white"
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-red-500/20 bg-red-500/10 shadow-[0_0_32px_rgba(239,68,68,0.15)] transition group-hover:border-red-500/50">
            <Image
              src="/images/profile/ZP-logo.svg"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="44px"
              priority
              className="object-contain p-1"
            />
          </span>
          <span className="hidden leading-none sm:inline">
            <span className="block">{siteConfig.name}</span>
            <span className="mt-1 block text-[0.55rem] tracking-[0.32em] text-white/38">
              Full stack
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 rounded-full border border-white/10 bg-black/35 p-1.5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] lg:flex">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/66 transition hover:bg-red-500/10 hover:text-red-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="hidden items-center gap-3 lg:flex">
          <span className="hidden items-center gap-2 rounded-full border border-red-500/25 bg-red-950/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-red-300 xl:inline-flex">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_16px_rgba(185,28,28,0.55)]" />
            Available
          </span>
          <CalendlyButton className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-5 text-sm font-medium text-red-200 transition hover:border-red-500/60 hover:bg-red-600 hover:text-white">
            <SocialIcon name="Calendly" className="size-5 shrink-0" />
            Strategy call
          </CalendlyButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-200 lg:hidden"
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
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-[#050202]/96 backdrop-blur-2xl lg:hidden">
          <Container className="flex flex-col py-4">
            {navigation.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/6 py-3 text-sm text-white/72 transition last:border-b-0 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <CalendlyButton
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-sm font-semibold text-white transition hover:bg-red-500 hover:text-white"
            >
              <SocialIcon name="Calendly" className="size-5 shrink-0" />
              Strategy call
            </CalendlyButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
