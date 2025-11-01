// components/FaqCards.tsx
import Reveal from "@/components/Reveal";

export type QA = { q: string; a: string };

type Props = {
  items: QA[];
  title?: string;          // <-- optional
  compact?: boolean;
};

export default function FaqCards({ items, title, compact }: Props) {
  return (
    <section className="space-y-6">
      {/* Render a heading only if a title is passed */}
      {title ? (
        <Reveal>
          <h2 className="text-3xl font-semibold">{title}</h2>
        </Reveal>
      ) : null}

      <div
        className={`grid md:grid-cols-2 gap-6 ${compact ? "mt-2" : "mt-4"}`}
        aria-label={title ?? "FAQ list"}
      >
        {items.map(({ q, a }) => (
          <div key={q} className="glass rounded-2xl p-5">
            <div className="font-medium mb-2">{q}</div>
            <p className="text-[var(--muted)]">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}