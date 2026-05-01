"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { siteConfig } from "@/data/portfolio";

type CalendlyContextValue = {
  openCalendly: () => void;
  closeCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextValue | null>(null);

function CalendlyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.82] p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Calendly booking popup"
      onClick={onClose}
    >
      <div
        className="relative flex h-[min(88vh,860px)] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-white/12 bg-[#050706] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/80">
              Schedule a call
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Book time with {siteConfig.name}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 text-white/72 transition hover:border-cyan-200/50 hover:text-white"
            aria-label="Close Calendly popup"
          >
            <span className="relative h-4 w-4">
              <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 rotate-45 bg-current" />
              <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <iframe
          src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1`}
          title="Calendly scheduling"
          className="h-full w-full bg-white"
        />
      </div>
    </div>
  );
}

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      openCalendly: () => setIsOpen(true),
      closeCalendly: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <CalendlyContext.Provider value={value}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={value.closeCalendly} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);

  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }

  return context;
}
