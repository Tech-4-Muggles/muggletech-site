const STORE_URL =
  "https://chromewebstore.google.com/detail/jane-%E2%80%94-job-application-an/cgbimjanhgfjcopnpklcikkpcbgmjgoo";

export default function InstallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold",
        "bg-[var(--brand)] hover:bg-blue-600 text-white",
        // micro animation + tiny hover shadow
        "transition shadow-md hover:shadow-lg transform-gpu hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
        "ring-brand btn-glow",
        className,
      ].join(" ")}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
      Get J.A.N.E. on Chrome
    </a>
  );
}