import Image from "next/image";

export const metadata = {
  title: "J.A.N.E. — Job Application & Networking Engine | MuggleTech",
  description:
    "Analyze JDs, improve bullets, and draft strong cover letters right in your browser.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/jane" },
};

export default function JanePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
      {/* Header / wordmark */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/Jane_text.png"
          alt="J.A.N.E. — Job Application & Networking Engine"
          width={420}
          height={120}
          className="h-14 w-auto md:h-20"
          priority
        />
      </div>

      {/* Tagline */}
      <p className="text-center text-[var(--muted)] max-w-3xl mx-auto">
        J.A.N.E. helps you analyze job posts, spot gaps, tailor bullets, and
        draft cover letters — directly inside LinkedIn and Indeed.
      </p>

      {/* Video */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <video
            controls
            playsInline
            preload="metadata"
            //poster="/images/jane-poster.jpg"   // optional; remove if you don’t add one
            className="absolute inset-0 h-full w-full object-cover"
          >
            {/* Prefer WEBM if you have it */}
            {/* <source src="/videos/jane-demo.webm" type="video/webm" /> */}
            <source src="/videos/jane-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="J.A.N.E. demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a className="cta-shine inline-block">
          {/* reuse your existing button */}
          {/* or link straight to the store if you prefer */}
          <a
            href="https://chromewebstore.google.com/detail/jane-%E2%80%94-job-application-an/cgbimjanhgfjcopnpklcikkpcbgmjgoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white transition shadow-md ring-brand btn-glow"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
            Get J.A.N.E. on Chrome
          </a>
        </a>
      </div>
    </div>
  );
}