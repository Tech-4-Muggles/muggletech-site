import Link from "next/link";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-10">
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
            "Design & implement LLM automations",
            "Pilot, measure, iterate"
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

      <Cta />
    </section>
  );
}

function Block({ title, bullets }:{ title:string; bullets:string[] }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="list-disc pl-6 text-sm text-slate-400 mt-2 space-y-1">
        {bullets.map((b)=> <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function Cta(){
  return (
    <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
      <div className="text-slate-300">
        <div className="text-xl font-medium text-slate-100">Pilot in 2–4 weeks</div>
        <div className="text-sm">Fixed-fee pilot, then retainer or handoff. You own your data & infra.</div>
      </div>
      <Link href="/contact" className="ml-auto inline-block rounded-xl px-5 py-2.5 font-medium bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 transition ring-brand">
        Talk to us
      </Link>
    </div>
  );
}