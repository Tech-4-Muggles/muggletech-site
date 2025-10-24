export const metadata = {
  title: "About — MuggleTech",
  description: "Why we exist, what we build, and our values."
};

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">About MuggleTech</h1>
      <p className="text-[var(--muted)]">
        We build practical AI tools and automations that save people real time.
        Our flagship helper is J.A.N.E., and we also work with teams to automate
        repetitive workflows. We focus on usefulness, privacy, and simplicity.
      </p>
      <div className="space-y-3">
        <div><strong>Mission.</strong> Ship delightful AI helpers that give people time back.</div>
        <div><strong>What we do.</strong> Browser extensions, micro-apps, and workflow automations.</div>
        <div><strong>Values.</strong> Respect privacy, move fast with quality, keep it simple.</div>
      </div>
    </section>
  );
}
