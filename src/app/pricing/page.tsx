export default function Pricing() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="text-slate-300">J.A.N.E. is <span className="text-slate-100 font-medium">free</span> right now.</p>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="font-medium">Pro (coming soon)</div>
        <ul className="list-disc pl-6 text-sm text-slate-400 mt-2 space-y-1">
          <li>Smarter rewriting</li>
          <li>Multi-resume library</li>
          <li>Custom templates</li>
        </ul>
      </div>
    </section>
  );
}
