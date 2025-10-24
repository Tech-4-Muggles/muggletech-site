"use client";

export default function BuyCoffee() {
  const url = "https://buymeacoffee.com/muggletech";
  const handleClick = () => {
    try { window?.plausible?.("buy_coffee_click"); } catch {}
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy us a coffee"
      onClick={handleClick}
      className="fixed z-50 bottom-24 right-5 md:bottom-6 md:right-6"
    >
      <div className="rounded-full bg-[var(--brand)] hover:bg-blue-600 text-white shadow-lg px-4 py-2 flex items-center gap-2 cta-shine">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 3h15v2h2a3 3 0 1 1-3 3h-1v5a5 5 0 1 1-10 0V3Zm13 7V5H5v8a3 3 0 1 0 6 0V5h3v5h2Z"/>
        </svg>
        <span className="font-semibold">Buy us a coffee</span>
      </div>
    </a>
  );
}
