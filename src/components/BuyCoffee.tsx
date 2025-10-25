"use client";

/** Optional Plausible typing so TS stops complaining */
declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, any>) => void;
  }
}

/**
 * BuyCoffee
 * - `floating` = true renders a fixed floating button
 * - `floating` = false renders a normal inline button (use this inside the footer)
 */
export default function BuyCoffee({
  className = "",
  floating = true,
}: {
  className?: string;
  floating?: boolean;
}) {
  const handleClick = () => {
    try {
      window?.plausible?.("buy_coffee_click");
    } catch {}
  };

  const base = [
    "inline-flex items-center gap-2 rounded-xl font-semibold",
    "px-5 py-2.5",
    "bg-[var(--brand)] hover:bg-blue-600 text-white transition shadow-md",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-brand btn-glow",
  ].join(" ");

  const position = floating ? "fixed bottom-8 right-5 md:bottom-8 md:right-6" : "";

  return (
    <a
      href="https://buymeacoffee.com/muggletech"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={[position, base, className].join(" ").trim()}
      aria-label="Buy us a coffee"
    >
      <span aria-hidden>☕</span>
      <span>Buy us a coffee</span>
    </a>
  );
}