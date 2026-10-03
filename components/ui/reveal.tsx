import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// CSS-only scroll reveal (see `.reveal` in globals.css). Browsers without
// scroll-driven animations simply render the content as-is.
export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
