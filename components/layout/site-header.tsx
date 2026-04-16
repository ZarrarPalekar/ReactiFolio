"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { CalendlyButton } from "@/components/ui/calendly-button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/5 shadow-[0_0_30px_rgba(239,68,68,0.16)]">
            <Image
              src="/favicon.svg"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <CalendlyButton className="inline-flex min-h-11 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 px-5 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-black">
            Calendly
          </CalendlyButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "≡"}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <Container className="flex flex-col py-4">
            {navigation.map((item) => (
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
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-red-500 px-5 text-sm font-medium text-black transition hover:bg-red-400"
            >
              Calendly
            </CalendlyButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
