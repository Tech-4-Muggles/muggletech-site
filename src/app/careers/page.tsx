import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata = {
  title: "Careers — MuggleTech",
  description:
    "Join MuggleTech. We build practical AI tools and automation that save people time. Apply for internships and early roles.",
  alternates: { canonical: "https://muggletech.net/careers" },
  openGraph: { images: ["/og.jpg"] },
};

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-18 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Build useful AI. Ship fast. Learn a lot.
          </h1>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto">
            We are a small team that cares about craft, speed, and real user value.
            If you like crisp problem statements and clean execution, you will fit right in.
          </p>
        </Reveal>
      </section>

      {/* Why MuggleTech */}
      <Section variant="a">
        <Reveal><h2 className="text-3xl font-semibold">Why MuggleTech</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Real impact", "Ship live features used by real users within days, not months."],
            ["Rapid learning", "Work across product, design, data, and GTM. Get real ownership."],
            ["Mentorship", "Founders work with you directly. Clear feedback. Clean habits."],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <div className="glass rounded-2xl p-6 card-hover">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-1">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Open roles */}
      <Section id="open-roles" variant="b">
        <Reveal><h2 className="text-3xl font-semibold">Internship tracks</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "Product & Growth",
              [
                "Write specs, own small features end to end",
                "Instrument funnels and run small experiments",
                "Craft copy, screenshots, and landing sections",
              ],
            ],
            [
              "Engineering",
              [
                "Ship UI in Next.js and Tailwind",
                "Integrate small LLM workflows safely",
                "Automate tests and improve performance",
              ],
            ],
            [
              "Design",
              [
                "Simplify flows and polish micro-interactions",
                "Make assets for web, store, and socials",
                "Create design tokens and docs",
              ],
            ],
            [
              "Operations",
              [
                "User support and feedback loops",
                "Partnership research and outreach",
                "Docs, light QA, and simple dashboards",
              ],
            ],
          ].map(([role, bullets]) => (
            <Reveal key={role as string}>
              <div className="glass rounded-2xl p-6 card-hover">
                <div className="text-lg font-medium">{role}</div>
                <ul className="list-disc pl-6 text-[var(--muted)] mt-2 space-y-1">
                  {(bullets as string[]).map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section variant="a">
        <Reveal><h2 className="text-3xl font-semibold">How we work</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Remote first", "US time zone overlap is helpful. Clear async writing is a must."],
            ["Tools", "Next.js, Tailwind, GitHub, Figma, Plausible. Simple stack. Few meetings."],
            ["Cadence", "Weekly goals, daily check-ins in a short written note, demo every Friday."],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <div className="glass rounded-2xl p-6 card-hover">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-1">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section variant="b">
        <Reveal><h2 className="text-3xl font-semibold">Hiring process</h2></Reveal>
        <ol className="grid md:grid-cols-4 gap-6 list-decimal pl-6">
          {[
            ["Apply", "Send your details and resume below."],
            ["Short call", "15 minutes to learn about your goals and fit."],
            ["Task", "A small take-home task or a guided pairing session."],
            ["Offer", "Clear scope, mentor, and timeline."],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <li className="glass rounded-2xl p-6 card-hover">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-1">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Application form */}
      <Section id="apply" variant="a">
        <Reveal><h2 className="text-3xl font-semibold">Apply for an internship</h2></Reveal>
        <Reveal>
          {/* Tip: create a separate Formspree form for Careers and replace the id below */}
          <form
            action="https://formspree.io/f/xgvnjydd"
            method="POST"
            encType="multipart/form-data"
            className="glass rounded-2xl p-6 space-y-4 max-w-3xl"
          >
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input type="hidden" name="_subject" value="Careers application - MuggleTech" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full name</label>
                <input name="name" required className="w-full rounded-lg border border-[var(--line)] px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-[var(--line)] px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Track</label>
                <select name="track" className="w-full rounded-lg border border-[var(--line)] px-3 py-2">
                  <option>Product & Growth</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Operations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Availability</label>
                <select name="availability" className="w-full rounded-lg border border-[var(--line)] px-3 py-2">
                  <option>Part time</option>
                  <option>Full time</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn or Portfolio</label>
              <input name="portfolio" placeholder="https://..." className="w-full rounded-lg border border-[var(--line)] px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Why MuggleTech</label>
              <textarea
                name="motivation"
                rows={5}
                placeholder="Two to five sentences are great"
                className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Resume (PDF or DOCX)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm file:mr-4 file:rounded-lg file:border file:border-[var(--line)] file:px-3 file:py-2 file:bg-white file:hover:bg-slate-50"
                required
              />
              <p className="text-xs text-[var(--muted)] mt-1">
                We store applications privately and review weekly.
              </p>
            </div>

            <button className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine">
              Submit application
            </button>
          </form>
        </Reveal>
      </Section>

    {/* Application — Google Form */}
      <section className="mx-auto max-w-3xl px-0 md:px-6 py-14 space-y-4">
        <Reveal>
          <h2 className="text-3xl font-semibold text-center">Feedback</h2>
        </Reveal>
        <p className="text-center text-[var(--muted)]">
          Tell us what you like and what we should improve. This form does not require sign in.
        </p>
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative w-full" style={{ minHeight: 1600 }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform?embedded=true"
              //https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform?usp=dialog
              title="J.A.N.E. feedback form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <p className="text-center text-sm text-[var(--muted)]">
          If the embed does not load, open the form{" "}
          <a
            className="underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgWOm_s8Jfea7Sw87jWbYv_yYADy6emDcs7tcUMUBSYpsf4w/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            in a new tab
          </a>
          .
        </p>
      </section>


      {/* FAQ */}
      <Section variant="b">
        <Reveal><h2 className="text-3xl font-semibold">FAQ</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Is the internship paid?", "Many are unpaid or stipend based. We focus on training, portfolio credit, and strong references. If you need a specific arrangement, tell us in the form."],
            ["Location", "Remote first with US overlap preferred. Occasional in-person days may happen when the team is in the same city."],
            ["Duration", "6 to 12 weeks is common. We also do short sprints if you want to try a focused project."],
            ["International students", "Work must follow your visa rules. If you are on OPT or CPT, include that detail in the form."],
          ].map(([q, a]) => (
            <Reveal key={q as string}>
              <div className="glass rounded-2xl p-6">
                <div className="font-medium">{q}</div>
                <p className="text-[var(--muted)] mt-1">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}