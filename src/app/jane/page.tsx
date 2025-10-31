import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import JaneTabs from "@/components/JaneTabs";

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
        draft cover letters right inside LinkedIn and Indeed.
      </p>

      {/* Video */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <video
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/jane-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Optional YouTube embed (keep or remove) */}
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

      {/* Screenshots — carousel */}
      <section className="mx-auto max-w-6xl px-0 md:px-6 py-14 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">See J.A.N.E. in action</h2>
        </Reveal>

        <div className="relative">
          <div
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-3"
            style={{ scrollbarWidth: "thin" }}
            aria-label="J.A.N.E. screenshots carousel"
          >
            {[
              { src: "/images/jane/analysis.png", alt: "Analyze Job Description" },
              { src: "/images/jane/connection-note.png", alt: "Generate Connection Note" },
              { src: "/images/jane/cover-letter-81.png", alt: "Cover Letter with score" },
              { src: "/images/jane/cover-letter.png", alt: "Generate Cover Letter" },
            ].map((img) => (
              <div key={img.src} className="min-w-[80%] sm:min-w-[60%] md:min-w-[48%] snap-center">
                <div className="glass rounded-2xl p-3 shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots — lightbox */}
      <section className="mx-auto max-w-6xl px-0 md:px-6 py-14 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">Screenshots</h2>
        </Reveal>
        <Lightbox
          items={[
            { src: "/images/jane/analysis.png", alt: "Analyze Job Description" },
            { src: "/images/jane/connection-note.png", alt: "Generate Connection Note" },
            { src: "/images/jane/cover-letter-81.png", alt: "Cover Letter with score" },
            { src: "/images/jane/cover-letter.png", alt: "Generate Cover Letter" },
          ]}
        />
      </section>

      {/* Walkthrough — tabs */}
      <section className="mx-auto max-w-6xl px-0 md:px-6 py-14 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">Walkthrough</h2>
        </Reveal>
        <JaneTabs />
      </section>

      {/* Feedback — Google Form */}
      <section className="mx-auto max-w-4xl px-0 md:px-6 py-14 space-y-4">
        <Reveal>
          <h2 className="text-3xl font-semibold text-center">Feedback</h2>
        </Reveal>
        <p className="text-center text-[var(--muted)]">
          Tell us what you like and what we should improve. This form does not require sign in.
        </p>
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative w-full" style={{ minHeight: 1000 }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://docs.google.com/forms/d/e/1FAIpQLSft-MnYlFaqoFrt7mjJOPu9W5C8DAqKLl8xjnwnax2igAq8-g/viewform?embedded=true"
              title="J.A.N.E. feedback form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <p className="text-center text-sm text-[var(--muted)]">
          If the embed does not load, open the form{" "}
          <a
            className="underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSft-MnYlFaqoFrt7mjJOPu9W5C8DAqKLl8xjnwnax2igAq8-g/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            in a new tab
          </a>
          .
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <span className="cta-shine inline-block">
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
        </span>
      </div>
    </div>
  );
}