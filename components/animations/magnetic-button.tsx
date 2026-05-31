"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { prefersReducedMotion, registerScrollTrigger } from "@/lib/animations";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({
  children,
  className = "",
  strength = 0.28,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion()) {
      return;
    }

    const { gsap } = registerScrollTrigger();

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;

      gsap.to(element, {
        x,
        y,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.45)",
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </span>
  );
}
