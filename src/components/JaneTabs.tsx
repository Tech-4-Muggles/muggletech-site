"use client";
import { useState } from "react";
import Image from "next/image";

export default function JaneTabs() {
  const slides = [
    { label: "Analyze JD",      src: "/images/jane/analysis.png",       alt: "Analyze Job Description" },
    { label: "Cover Letter",    src: "/images/jane/cover-letter.png",    alt: "Generate Cover Letter" },
    { label: "Score Example",   src: "/images/jane/cover-letter-81.png", alt: "Score example" },
    { label: "Connection Note", src: "/images/jane/connection-note.png", alt: "Generate Connection Note" },
  ];
  const [i, setI] = useState(0);

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            onClick={() => setI(idx)}
            className={`px-3 py-1.5 rounded-lg border text-sm sm:text-base transition ${
              i === idx ? "bg-[var(--panel)] shadow-sm font-medium" : "bg-white/60 hover:bg-white/80 text-gray-700"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Crossfade stage */}
      <div className="glass rounded-2xl p-3 flex justify-center">
        <div
          className="
            relative w-full overflow-hidden
            max-w-[92vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[45vw] xl:max-w-[33vw]
          "
          style={{ maxHeight: "70vh" }}
        >
          {slides.map((s, idx) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1200}
              height={800}
              sizes="(min-width:1280px) 33vw, (min-width:1024px) 45vw, (min-width:768px) 60vw, 92vw"
              // Crossfade
              className={`absolute inset-0 w-full h-auto rounded-lg shadow-sm transition-opacity duration-300 ease-out
                ${i === idx ? "opacity-100" : "opacity-0"}
              `}
              // Lazy for non-active; eager for current
              loading={i === idx ? "eager" : "lazy"}
              priority={i === idx}
            />
          ))}
          {/* Preserve height so the container does not collapse while images overlap */}
          <div className="invisible">
            <Image
              src={slides[i].src}
              alt=""
              width={1200}
              height={800}
              sizes="(min-width:1280px) 33vw, (min-width:1024px) 45vw, (min-width:768px) 60vw, 92vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[var(--muted)]">{slides[i].alt}</div>
    </div>
  );
}