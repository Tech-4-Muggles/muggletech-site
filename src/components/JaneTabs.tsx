"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function JaneTabs() {
  const slides = [
    { label: "Analyze Job Description", src: "/images/jane-walkthrough/jane-walkthrough-1.png", alt: "Analyze Job Description" },
    { label: "Cover Letter",            src: "/images/jane-walkthrough/jane-walkthrough-2.png", alt: "Generate Cover Letter" },
    { label: "Connection Note",         src: "/images/jane-walkthrough/jane-walkthrough-3.png", alt: "Generate Connection Note" },
    { label: "Compare Resumes",         src: "/images/jane-walkthrough/jane-walkthrough-4.png", alt: "Compare fit with multiple resumes" },
  ];

  const [i, setI] = useState(0);
  const [active, setActive] = useState(false); // true when hovered or focused
  const regionRef = useRef<HTMLDivElement>(null);

  const next = () => setI((n) => (n + 1) % slides.length);
  const prev = () => setI((n) => (n - 1 + slides.length) % slides.length);

  // Attach a temporary window key listener ONLY while active (hovered OR focused)
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            onClick={() => setI(idx)}
            className={`px-3 py-1.5 rounded-lg border text-sm sm:text-base transition
              ${i === idx ? "bg-[var(--panel)] shadow-sm font-medium" : "bg-white/60 hover:bg-white/80 text-gray-700"}`}
            aria-pressed={i === idx}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Stage + chevrons */}
      <div className="flex justify-center">
        <div
          ref={regionRef}
          role="region"
          aria-label="J.A.N.E. demo gallery"
          tabIndex={0}
          onFocus={() => setActive(true)}
          onBlur={(e) => {
            if (!regionRef.current?.contains(e.relatedTarget as Node)) setActive(false);
          }}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          //className="group glass rounded-2xl shadow-sm p-2 sm:p-3 md:p-4 inline-block outline-none focus:ring-2 focus:ring-[var(--brand)]"
          className="  group glass rounded-2xl shadow-sm p-2 sm:p-3 md:p-4 inline-block
            outline-none focus:outline-none
            dark:focus-visible:ring-offset-slate-950"
//focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-white
        >
          
            
          <div
            className="
              relative mx-auto overflow-hidden
              w-[92vw] sm:w-[640px] md:w-[720px] lg:w-[780px]
              max-h-[72vh] aspect-[3/2]
            "
          >
            {slides.map((s, idx) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width:1280px) 780px, (min-width:1024px) 720px, (min-width:768px) 640px, 92vw"
                className={`rounded-xl shadow transition-opacity duration-300 ease-out object-contain ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                priority={i === idx}
              />
            ))}

            {/* Left chevron */}
            <button
              type="button"
              onClick={() => { prev(); regionRef.current?.focus(); }}
              aria-label="Previous slide"
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100 focus:opacity-100
                transition-opacity duration-200
                rounded-full p-2.5 shadow-md
                bg-white/85 hover:bg-white backdrop-blur
                border border-[var(--line)]
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Right chevron */}
            <button
              type="button"
              onClick={() => { next(); regionRef.current?.focus(); }}
              aria-label="Next slide"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100 focus:opacity-100
                transition-opacity duration-200
                rounded-full p-2.5 shadow-md
                bg-white/85 hover:bg-white backdrop-blur
                border border-[var(--line)]
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Optional side scrims */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/60 to-transparent rounded-l-xl hidden sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/60 to-transparent rounded-r-xl hidden sm:block" />
          </div>

          {/* Caption */}
          <div className="relative h-6 mt-3" aria-live="polite" aria-atomic="true">
            {slides.map((s, idx) => (
              <div
                key={s.alt}
                className={`absolute inset-0 flex items-center justify-center text-sm text-[var(--muted)] transition-opacity duration-300 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                {s.alt}
              </div>
            ))}
          </div>
          <p className="sr-only">Use left and right arrows when this gallery is hovered or focused.</p>
        </div>
      </div>
    </div>
  );
}