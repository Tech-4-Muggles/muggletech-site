// src/app/services/page.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata = {
  title: "Services - MuggleTech",
  description:
    "AI automation and internal tools for small teams. We design and ship practical workflows that save time and reduce manual work.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/services" },
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-18 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            AI automation and internal tools for small teams
          </h1>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto">
            We help you turn messy manual workflows into simple, reliable flows backed by AI.
            No hype, just practical systems that save hours each week and are comfortable for your team to use.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine"
            >
              Talk to us about a workflow
            </Link>
            <a
              href="mailto:hello@muggletech.com?subject=Services inquiry - MuggleTech"
              className="underline text-sm md:text-base"
            >
              Or email hello@muggletech.com
            </a>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <Section variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">What we do</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "AI workflow automation",
              "Identify high value flows, add LLMs where they help, and keep humans in control. Think triage, drafting, summarizing, and routing.",
            ],
            [
              "Internal tools and extensions",
              "Simple dashboards, admin panels, and browser extensions that sit on top of tools you already use such as Chrome, Gmail, and Notion.",
            ],
            [
              "Light data plumbing",
              "Glue systems together with scripts and APIs. Pull data into clean views so decisions are faster and less painful.",
            ],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <div className="glass rounded-2xl p-6 card-hover h-full">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Example projects */}
      <Section id="examples" variant="b">
        <Reveal>
          <h2 className="text-3xl font-semibold">Example projects</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Recruiting inbox triage",
              "LLM assisted triage for inbound candidates that tags, scores, and suggests next steps, while recruiters stay in the loop.",
            ],
            [
              "Client update drafting",
              "Draft weekly status updates from tickets and docs so project leads can review and polish instead of starting from scratch.",
            ],
            [
              "Research and outreach assistant",
              "Pull target accounts, enrich light context, and draft first pass outreach messages for review by a human marketer or founder.",
            ],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <div className="glass rounded-2xl p-6 card-hover h-full">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">How an engagement works</h2>
        </Reveal>
        <ol className="grid md:grid-cols-4 gap-6 list-decimal pl-6">
          {[
            [
              "01. Discovery",
              "You walk us through the current workflow, tools, and pain points. We ask simple questions and sketch where automation helps.",
            ],
            [
              "02. Proposal",
              "We share a short written plan with scope, rough timeline, constraints, and what success looks like in plain language.",
            ],
            [
              "03. Build",
              "We ship a small first version, get feedback quickly, and tighten the loop until it feels natural for your team.",
            ],
            [
              "04. Support",
              "We document flows, hand off usage guides, and stay available for tweaks and light maintenance if you want it.",
            ],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <li className="glass rounded-2xl p-6 card-hover">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-2">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Who we are a fit for */}
      <Section variant="b">
        <Reveal>
          <h2 className="text-3xl font-semibold">Who we are a good fit for</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Small and growing teams",
              "Startups and small businesses that feel the pain of manual work but do not have a full internal tools team yet.",
            ],
            [
              "Leads with clear ownership",
              "Founders, product owners, and operations leads who can point at a real workflow and say what a good outcome looks like.",
            ],
            [
              "Privacy conscious teams",
              "Teams that want AI help but are careful with data. We keep things simple, traceable, and aligned with your policies.",
            ],
          ].map(([t, d]) => (
            <Reveal key={t as string}>
              <div className="glass rounded-2xl p-6 card-hover h-full">
                <div className="text-lg font-medium">{t}</div>
                <p className="text-[var(--muted)] mt-2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Security and privacy */}
      <Section variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">Security and privacy</h2>
        </Reveal>
        <Reveal>
          <div className="glass rounded-2xl p-6 max-w-4xl">
            <p className="text-[var(--muted)]">
              We design with safety and respect for your data from the start. For most projects we:
            </p>
            <ul className="list-disc pl-6 text-[var(--muted)] mt-3 space-y-1">
              <li>Use your preferred LLM provider and region where possible</li>
              <li>Minimize what is sent to models and avoid storing raw content unnecessarily</li>
              <li>Keep clear logs for debugging without exposing sensitive payloads</li>
              <li>Document data flows so your team understands what happens at each step</li>
            </ul>
            <p className="text-sm text-[var(--muted)] mt-3">
              For more detail, see our{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>{" "}
              or ask for a short written note on how we would handle your specific use case.
            </p>
          </div>
        </Reveal>
      </Section>

      
      {/* Is AI even right for your workflow? */}
      <Section variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">Not sure if AI is the right fit?</h2>
        </Reveal>

        <Reveal>
          <div className="glass rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-[var(--muted)]">
              A lot of teams we talk to are unsure whether AI automation is worth the effort.
              They worry it will be expensive, too technical, or simply unnecessary. 
              That’s completely normal.
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <div className="font-medium">Common concerns we hear:</div>
                <ul className="list-disc pl-6 text-[var(--muted)] space-y-1 mt-1">
                  <li>“Our workflow is too unique or messy for automation.”</li>
                  <li>“We’re not sure AI will be accurate or safe enough.”</li>
                  <li>“We don’t want to over-engineer something simple.”</li>
                  <li>“We don’t know what AI can actually do beyond ChatGPT.”</li>
                </ul>
              </div>

              <div className="mt-4">
                <div className="font-medium">How we help you think clearly:</div>
                <ul className="list-disc pl-6 text-[var(--muted)] space-y-1 mt-1">
                  <li>We walk through your current workflow step-by-step in plain language.</li>
                  <li>We highlight where automation helps, and where it doesn’t.</li>
                  <li>We estimate savings, risks, and trade-offs upfront.</li>
                  <li>If AI isn’t the right answer, we’ll tell you honestly.</li>
                </ul>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-50 text-blue-900 text-sm text-center border border-blue-200">
                <strong>You don’t have to believe your business needs AI.</strong><br/>
                Just talk to us. You might be surprised by what’s possible.
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine"
              >
                Explore possibilities with us
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section variant="b">
        <Reveal>
          <h2 className="text-3xl font-semibold">Services FAQ</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "What does a typical project cost?",
              "We like small, clear projects. Many start as a fixed scope pilot. After we understand your workflow, we share a written range before you commit.",
            ],
            [
              "How long does a project take?",
              "Simple flows can be live in a few weeks. Larger tools can take longer, but we try to ship something useful early rather than wait for a big reveal.",
            ],
            [
              "Do you work with very early stage teams?",
              "Yes. If you are early, we keep scope tight and focus on one or two workflows that are clearly painful for you today.",
            ],
            [
              "Can you work with our internal engineers?",
              "Yes. We are happy to pair with your team, use your repos, and hand off clean, documented code for long term ownership.",
            ],
          ].map(([q, a]) => (
            <Reveal key={q as string}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="font-medium">{q}</div>
                <p className="text-[var(--muted)] mt-2">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="a">
        <Reveal>
          <div className="glass rounded-2xl p-6 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold">Have a workflow in mind?</h3>
            <p className="text-[var(--muted)] mt-1">
              Send us a short note with what you are trying to improve. A few sentences and a link or two are enough to start.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine"
              >
                Describe a workflow
              </Link>
              <a
                href="mailto:hello@muggletech.com?subject=Services inquiry - MuggleTech"
                className="underline text-sm md:text-base"
              >
                Or email hello@muggletech.com
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}