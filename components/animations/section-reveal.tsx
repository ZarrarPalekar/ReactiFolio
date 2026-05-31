"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import {
  prefersReducedMotion,
  premiumEase,
  registerScrollTrigger,
} from "@/lib/animations";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  distance = 42,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const { gsap } = registerScrollTrigger();

    if (prefersReducedMotion()) {
      gsap.set(element, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: distance,
          filter: "blur(14px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay,
          ease: premiumEase,
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        },
      );
    }, element);

    return () => context.revert();
  }, [delay, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
