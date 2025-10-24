export const metadata = {
  title: "Services — AI Automation & Tools | MuggleTech",
  description: "We help teams automate workflows, build internal tools, and integrate AI safely.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/services" }
};

export default function Services(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">Services</h1>
      <p className="text-[var(--muted)] max-w-3xl">
        We partner with teams to identify high-leverage use-cases, prototype quickly, and ship reliable automations and tools.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Workflow Automation","Map processes, build LLM or rules automations, measure ROI."],
          ["Internal Assistants","Search docs, summarize updates, and draft content with control."],
          ["Custom Extensions","Purpose-built browser extensions like J.A.N.E. for your team."],
          ["Integrations","Slack, Notion, GDrive, Sheets — secure, permission-aware pipelines."],
        ].map(([h, d])=>(
          <div key={h as string} className="glass rounded-2xl p-6 card-hover">
            <div className="text-lg font-medium">{h}</div>
            <p className="text-[var(--muted)] mt-2">{d}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="text-lg font-medium">Let’s build together</div>
        <p className="text-[var(--muted)]">Tell us your goals and constraints — we’ll suggest a practical plan.</p>
        <a href="/#contact" className="inline-block mt-3 underline">Contact us →</a>
      </div>
    </section>
  );
}
