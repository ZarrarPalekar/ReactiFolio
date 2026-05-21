"use client";

import { ReactNode, useRef } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    // @ts-expect-error - dynamic tag
    <Tag
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight glow-border rounded-2xl ${className}`}
    >
      {children}
    </Tag>
  );
}
