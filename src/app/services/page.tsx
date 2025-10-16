import Link from "next/link";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold">B2B Services</h1>
        <p className="text-slate-300 max-w-3xl mt-2">
          We help teams ship AI automation fast — scoping, building, and integrating tools that remove busywork.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Block
          title="AI Automation"
          bullets={[
            "Identify 3–5 high-leverage workflows",
            "Design + implement LLM automations",
            "Pilot, measure, and iterate"
          ]}
        />
        <Block
          title="Tool Development"
          bullets={[
            "Internal tools (extensions, micro-apps)",
            "Integrations with Slack, GDrive, Notion",
            "Security & privacy by default"
          ]}
        />
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-xl font-medium">Engagement model</h2>
        <ul className="list-disc pl-6 text-sm text-slate-400 mt-2 space-y-1">
          <li>2–4 week sprint → tangible automation in prod</li>
          <li>We work with your ops/IT; you own your data & infra</li>
          <li>Fixed-fee pilot, then retainer or handoff</li>
        </ul>
        <div className="mt-4">
          <Link href="/contact" className="inline-block rounded-xl px-5 py-2.5 font-medium bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 transition">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

function Block({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="list-disc pl-6 text-sm text-slate-400 mt-2 space-y-1">
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}
