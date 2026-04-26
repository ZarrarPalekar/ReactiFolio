import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  name: "GitHub" | "LinkedIn" | "Resume" | "Calendly";
};

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const baseProps = {
    "aria-hidden": true,
    focusable: false,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...props,
  } satisfies SVGProps<SVGSVGElement>;

  if (name === "GitHub") {
    return (
      <svg {...baseProps}>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.95 10.95 0 0 1 12 6.04c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...baseProps}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (name === "Resume") {
    return (
      <svg {...baseProps} fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path
          d="M7 3.5h6.25L18 8.25V20.5H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 3.75V8.5h4.75M9 12h6M9 15.5h6M9 19h3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...baseProps} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M7.75 3.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Z"
        strokeLinejoin="round"
      />
      <path
        d="M15.35 9.2A4 4 0 1 0 16 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.4 6.9v4.4h-4.35" strokeLinecap="round" />
    </svg>
  );
}
