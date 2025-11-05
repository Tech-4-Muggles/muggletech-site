"use client";
import { useState } from "react";
import Image from "next/image";

export default function JaneTabs() {
  const slides = [
    { label: "Analyze Job Description", src: "/images/jane_walkthrough/Jane Walkthrough 1.png", alt: "Analyze Job Description" },
    { label: "Cover Letter",            src: "/images/jane_walkthrough/Jane Walkthrough 2.png", alt: "Generate Cover Letter" },
    { label: "Connection Note",         src: "/images/jane_walkthrough/Jane Walkthrough 3.png", alt: "Generate Connection Note" },
    { label: "Compare Resumes",         src: "/images/jane_walkthrough/Jane Walkthrough 4.png", alt: "Compare fit with multiple resumes" },
  ];
  const [i, setI] = useState(0);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            onClick={() => setI(idx)}
            className={`px-3 py-1.5 rounded-lg border text-sm sm:text-base transition
              ${i === idx
                ? "bg-[var(--panel)] shadow-sm font-medium"
                : "bg-white/60 hover:bg-white/80 text-gray-700"}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Centered stage */}
      <div className="flex justify-center">
        <div className="glass rounded-2xl shadow-sm p-2 sm:p-3 md:p-4 inline-block">
          {/* Image container */}
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
          </div>

          {/* Fading caption below */}
          <div className="relative h-6 mt-3">
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
        </div>
      </div>
    </div>
  );
}