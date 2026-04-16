import Link from "next/link";

import { siteConfig } from "@/data/portfolio";

export function WhatsAppFab() {
  return (
    <Link
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-15 w-15 items-center justify-center rounded-full border border-white/12 bg-[#25D366] text-black shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] hover:bg-[#1fbc59] sm:bottom-6 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.74.46 3.45 1.34 4.95L2 22l5.4-1.42a9.8 9.8 0 0 0 4.62 1.18h.01c5.42 0 9.82-4.41 9.82-9.83a9.76 9.76 0 0 0-2.8-7.02Zm-7.02 15.19h-.01a8.1 8.1 0 0 1-4.12-1.13l-.29-.17-3.2.84.86-3.12-.19-.31a8.12 8.12 0 0 1-1.25-4.3 8.2 8.2 0 0 1 8.2-8.19 8.14 8.14 0 0 1 5.8 2.4 8.12 8.12 0 0 1 2.4 5.8 8.2 8.2 0 0 1-8.2 8.18Zm4.5-6.15c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.57.12-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.24-1.47-1.39-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.77-1.88-.2-.47-.41-.41-.57-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.72 2.63 4.17 3.69.58.25 1.04.4 1.39.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
      </svg>
    </Link>
  );
}
