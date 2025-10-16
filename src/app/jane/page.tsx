import InstallButton from "@/components/InstallButton";

export default function Jane() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">J.A.N.E. — Job Application & Networking Engine</h1>
      <p className="text-slate-300 max-w-3xl">
        J.A.N.E. helps you move faster: see Fit Score, fill keyword gaps, upgrade bullets, and draft cover letters on any job page.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="Instant Fit Score" desc="See what's missing vs the JD—skills, tools, keywords." />
        <Feature title="Sharper Bullets" desc="Rewrite suggestions that keep your voice and add substance." />
        <Feature title="1-click Cover Letters" desc="Drafts aligned to the JD—edit in seconds." />
      </div>
      <InstallButton />
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-slate-400 mt-1">{desc}</div>
    </div>
  );
}
