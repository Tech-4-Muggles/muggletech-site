import Reveal from "@/components/Reveal";

const items = [
  { icon: "🧰", title: "Useful over flashy", body: "Focus on outcomes. J.A.N.E. saves time and improves application quality." },
  { icon: "🔒", title: "Privacy first", body: "Keep data minimal, prefer local, and stay transparent about what we process." },
  { icon: "⚡️", title: "Quality at speed", body: "Fast results with a high bar for correctness, tests, and reliability." },
  { icon: "🧭", title: "Simple is kind", body: "Clear UI, fewer steps, and sensible defaults that just work." },
];


export default function ProductBenefits() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(i => (
        <Reveal key={i.title}>
          <div className="glass rounded-2xl p-5 card-hover h-full">
            <div className="text-2xl mb-2">{i.icon}</div>
            <div className="mt-2 font-medium">{i.title}</div>
            <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{i.body}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
/*
 <section className="mx-auto max-w-6xl px-6 pb-6">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-5 card-hover h-full">
                <div className="text-2xl">{v.emoji}</div>
                <div className="mt-2 font-medium">{v.title}</div>
                <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{v.blurb}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
*/