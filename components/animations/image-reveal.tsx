"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import {
  prefersReducedMotion,
  premiumEase,
  registerScrollTrigger,
} from "@/lib/animations";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const { gsap } = registerScrollTrigger();
    const media = element.querySelector("[data-reveal-media]");

    if (prefersReducedMotion()) {
      gsap.set(element, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(media, { scale: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { clipPath: "inset(16% 12% 16% 12%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.15,
          delay,
          ease: premiumEase,
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        },
      );

      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.14 },
          {
            scale: 1,
            duration: 1.35,
            delay,
            ease: premiumEase,
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      }
    }, element);

    return () => context.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
