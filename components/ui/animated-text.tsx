"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const container: Variants = {
  hidden: {},
  visible: (custom: number) => ({
    transition: { staggerChildren: 0.04, delayChildren: custom },
  }),
};

const word: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.12em]"
        >
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
