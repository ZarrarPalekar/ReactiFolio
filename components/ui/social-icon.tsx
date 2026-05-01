import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  name: "GitHub" | "LinkedIn" | "Instagram" | "Resume" | "Calendly";
};

export function SocialIcon({ name, ...props }: SocialIconProps) {
  const baseProps = {
    "aria-hidden": true,
    focusable: false,
    viewBox: "0 0 24 24",
    ...props,
  } satisfies SVGProps<SVGSVGElement>;

  if (name === "GitHub") {
    return (
      <svg {...baseProps} fill="none">
        <circle cx="12" cy="12" r="11.5" fill="#ffffff" />
        <path
          fill="#181717"
          d="M12 3.25a8.75 8.75 0 0 0-2.77 17.05c.44.08.6-.19.6-.42v-1.64c-2.43.53-2.95-1.04-2.95-1.04-.4-1-.97-1.27-.97-1.27-.79-.54.06-.53.06-.53.88.06 1.34.9 1.34.9.78 1.33 2.04.94 2.54.72.08-.56.3-.94.55-1.16-1.94-.22-3.98-.97-3.98-4.32 0-.95.34-1.73.9-2.34-.09-.22-.39-1.11.08-2.31 0 0 .73-.23 2.4.9a8.33 8.33 0 0 1 4.38 0c1.66-1.13 2.39-.9 2.39-.9.48 1.2.18 2.09.09 2.31.56.61.9 1.39.9 2.34 0 3.36-2.05 4.09-4 4.31.31.27.59.81.59 1.63v2.4c0 .24.16.51.6.43A8.75 8.75 0 0 0 12 3.25Z"
        />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...baseProps} fill="none">
        <rect width="24" height="24" rx="3" fill="#EF4444" />
        <path
          fill="#ffffff"
          d="M7.06 20.45H3.83V9.97h3.23v10.48ZM5.44 8.54a1.87 1.87 0 1 1 0-3.74 1.87 1.87 0 0 1 0 3.74Zm14.99 11.91H17.2v-5.1c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68v5.19h-3.22V9.97h3.09v1.43h.04c.43-.82 1.49-1.69 3.06-1.69 3.27 0 3.9 2.16 3.9 4.96v5.78Z"
        />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg {...baseProps} fill="none">
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="3.5"
            x2="20.5"
            y1="20.5"
            y2="3.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FCA5A5" />
            <stop offset="0.28" stopColor="#EF4444" />
            <stop offset="0.52" stopColor="#DC2626" />
            <stop offset="0.76" stopColor="#991B1B" />
            <stop offset="1" stopColor="#450A0A" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
        <path
          stroke="#ffffff"
          strokeWidth={2}
          d="M8 5.8h8a2.2 2.2 0 0 1 2.2 2.2v8a2.2 2.2 0 0 1-2.2 2.2H8A2.2 2.2 0 0 1 5.8 16V8A2.2 2.2 0 0 1 8 5.8Z"
        />
        <path
          stroke="#ffffff"
          strokeWidth={2}
          d="M15.1 12a3.1 3.1 0 1 1-6.2 0 3.1 3.1 0 0 1 6.2 0Z"
        />
        <path
          fill="#ffffff"
          d="M16.85 8.25a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z"
        />
      </svg>
    );
  }

  if (name === "Resume") {
    return (
      <svg {...baseProps} fill="none" strokeWidth={1.8}>
        <rect width="24" height="24" rx="6" fill="#EF4444" />
        <path
          fill="#ffffff"
          d="M8 5h5.9L18 9.1V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        />
        <path
          stroke="#EF4444"
          d="M13.6 5.25V9.4h4.15M9.8 12.25h4.4M9.8 15h4.4M9.8 17.75h2.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...baseProps} fill="none" strokeWidth={2}>
      <rect width="24" height="24" rx="6" fill="#EF4444" />
      <path
        stroke="#ffffff"
        d="M15.9 8.85A4.55 4.55 0 1 0 16.45 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.75 6.65v4.7h-4.7" stroke="#ffffff" strokeLinecap="round" />
    </svg>
  );
}
