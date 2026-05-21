import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  duration = 38,
  reverse = false,
  className = "",
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={`flex w-full overflow-hidden ${pauseOnHover ? "marquee-pause" : ""} ${className}`}
    >
      <div
        className={`marquee-track flex shrink-0 items-center ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
