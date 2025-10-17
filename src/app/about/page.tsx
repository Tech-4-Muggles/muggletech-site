import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">About MuggleTech</h1>
        <p className="text-slate-300 max-w-3xl">
          We build magical, practical AI tools that give people time back. J.A.N.E. is our flagship.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card title="Mission">
          Ship AI helpers that feel delightful and save hours every week — for students, job seekers, and teams.
        </Card>
        <Card title="What we do">
          We develop browser extensions and micro-apps, and we help businesses automate repetitive workflows.
        </Card>
        <Card title="Values">
          Focus on usefulness, respect privacy, move fast with quality, and keep the experience simple.
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <Founder
            name="Arhan Sibal"
            role="Product Strategy & Analytics — MBA Ross ’25"
            src="/images/Arhan_DP.webp"
          />
          <Founder
            name="Shobhit Datta"
            role="Head of Product Delivery & Ops"
            src="/images/Shobhit_DP.webp"
          />
          <Founder
            name="Nishant Sharma"
            role="Ops & Internal Systems Lead"
            src="/images/Nishant_DP.webp"
          />
          <Founder
            name="Medha"
            role="Marketing & Growth Strategy Lead"
            src="/images/Medha_DP.webp"
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What’s next</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-1">
          <li>“Ops Copilot” — internal automations for teams (SOPs, summaries, docs)</li>
          <li>Deeper resume insights + smarter rewriting in J.A.N.E.</li>
          <li>Private-by-default analytics to keep improving without collecting more than necessary</li>
        </ul>
      </section>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-lg font-medium">{title}</div>
      <div className="text-slate-300 text-sm mt-2">{children}</div>
    </div>
  );
}

function Founder({ name, role, src }: { name: string; role: string; src: string }) {
  return (
    <div className="glass rounded-2xl p-5 flex gap-4 items-center">
      <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-slate-400">{role}</div>
      </div>
    </div>
  );
}