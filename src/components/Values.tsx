import Reveal from "@/components/Reveal";

const VALUES = [
  { emoji: "🛠️", title: "Useful > flashy", blurb: "Ship tools that measurably save time or improve outcomes." },
  { emoji: "🔒", title: "Privacy-first", blurb: "Minimize data, keep it local when possible, and be transparent." },
  { emoji: "⚡", title: "Quality at speed", blurb: "Move fast, but keep the bar high with tests, docs and observability." },
  { emoji: "🧭", title: "Simple is kind", blurb: "Clear UI, fewer steps, and obvious defaults." },
];


export default function Values() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {VALUES.map(i => (
        <Reveal key={i.title}>
          <div className="glass rounded-2xl p-5 card-hover h-full">
            <div className="text-2xl mb-2">{i.emoji}</div>
            <div className="mt-2 font-medium">{i.title}</div>
            <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{i.blurb}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
