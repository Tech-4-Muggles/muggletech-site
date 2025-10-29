"use client";
import { useState } from "react";
import Image from "next/image";

export function JaneTabs() {
  const slides = [
    {label:"Analyze JD", src:"/images/jane/analysis.png", alt:"Analyze Job Description"},
    {label:"Cover Letter", src:"/images/jane/cover-letter.png", alt:"Generate Cover Letter"},
    {label:"Score Example", src:"/images/jane/cover-letter-81.png", alt:"Score example"},
    {label:"Connection Note", src:"/images/jane/connection-note.png", alt:"Generate Connection Note"},
  ];
  const [i, setI] = useState(0);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {slides.map((s, idx)=>(
          <button key={s.label}
            onClick={()=>setI(idx)}
            className={`px-3 py-1.5 rounded-lg border ${i===idx ? "bg-[var(--panel)] shadow-sm" : "bg-white/50"}`}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="glass rounded-2xl p-3">
        <Image src={slides[i].src} alt={slides[i].alt} width={1600} height={1000} className="w-full h-auto rounded-lg"/>
      </div>
      <div className="text-sm text-[var(--muted)]">{slides[i].alt}</div>
    </div>
  );
}

export default JaneTabs;   // <-- add this line
