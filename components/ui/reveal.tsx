"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  amount?: number;
};

const offsets = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  scale: { y: 0, x: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const o = offsets[direction];
  const initial =
    direction === "scale"
      ? { opacity: 0, scale: 0.95 }
      : { opacity: 0, x: o.x, y: o.y };
  const animate =
    direction === "scale"
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : initial}
      whileInView={prefersReducedMotion ? {} : animate}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
