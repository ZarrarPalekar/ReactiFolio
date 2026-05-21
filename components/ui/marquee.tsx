import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
};

export function Marquee({ children, className = "", slow = false, reverse = false }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] ${className}`}>
      <div
        className={`marquee ${slow ? "marquee-slow" : ""}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
