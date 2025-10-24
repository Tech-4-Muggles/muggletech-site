"use client";

// Extend global type safely without overwriting
declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, any>) => void;
  }
}

export default function BuyCoffee({ className = "" }: { className?: string }) {
  const handleClick = () => {
    try { window?.plausible?.("buy_coffee_click"); } catch {}
  };

  return (
    <a
      href="https://buymeacoffee.com/muggletech"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={[
        "fixed bottom-6 right-6 z-40",
        "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold",
        "bg-[var(--brand)] text-white shadow-sm hover:shadow-md transition",
        "btn-glow",
        className
      ].join(" ")}
    >
      <span aria-hidden>☕</span>
      Buy us a coffee
    </a>
  );
}