"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { useCalendly } from "@/components/ui/calendly-provider";

type CalendlyButtonProps = {
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function CalendlyButton({
  children,
  className = "",
  onClick,
  ...props
}: CalendlyButtonProps) {
  const { openCalendly } = useCalendly();

  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openCalendly();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
