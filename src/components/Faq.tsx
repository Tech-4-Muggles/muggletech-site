"use client";
import { useState } from "react";

type QA = { q: string; a: string };

export default function Faq({
  items,
  title = "Frequently Asked Questio123ns",
  compact = false,
  showBorder = true,
}: {
  items: QA[];
  title?: string;
  compact?: boolean;
  showBorder?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-6" id="faq">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <div
            key={it.q}
            className={`rounded-2xl p-5 ${
              showBorder ? "glass" : "bg-white/60 border border-[var(--line)]"
            }`}
          >
            <button
              className="w-full text-left font-medium leading-snug"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              {it.q}
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                open === idx ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              } ${compact ? "text-sm" : "text-base"}`}
            >
              <p className="text-[var(--muted)]">{it.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}