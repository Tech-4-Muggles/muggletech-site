"use client";

declare global {
  interface Window { plausible?: (event: string, options?: Record<string, any>) => void }
}

export default function BuyCoffee({ className = "" }: { className?: string }) {
  const handleClick = () => { try { window?.plausible?.("buy_coffee_click"); } catch {} };

  return (
    <a
      href="https://buymeacoffee.com/muggletech"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={[
        // position
        "fixed z-40 bottom-24 right-5 md:bottom-10 md:right-8",
        // blue pill + tiny hover shadow
        "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold",
        "bg-[var(--brand)] text-white hover:shadow-sm transition",
        className
      ].join(" ")}
      aria-label="Buy us a coffee"
    >
      <span className="text-lg">☕</span>
      <span>Buy us a coffee</span>
    </a>
  );
}