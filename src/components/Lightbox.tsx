"use client";
import { useState } from "react";
import Image from "next/image";

export default function Lightbox({ items }: { items: {src:string;alt:string}[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <button key={it.src} onClick={() => setOpen(i)} className="text-left">
            <div className="glass rounded-2xl p-3 card-hover">
              <Image src={it.src} alt={it.alt} width={1400} height={900} className="w-full h-auto rounded-lg" />
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{it.alt}</p>
          </button>
        ))}
      </div>

      {/* modal */}
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div className="max-w-5xl w-full" onClick={(e)=>e.stopPropagation()}>
            <Image src={items[open].src} alt={items[open].alt} width={1920} height={1080} className="w-full h-auto rounded-xl" />
            <div className="mt-2 text-sm text-white/80">{items[open].alt}</div>
          </div>
        </div>
      )}
    </>
  );
}