import InstallButton from "@/components/InstallButton";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata = {
  title: "MuggleTech - Building AI solutions to simplify your life",
  description:
    "J.A.N.E. for job seekers, and AI automation services for teams. The only thing we can’t do is actual magic.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net" },
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Section variant="b" className="mx-auto max-w-1xl px-6 py-20 md:py-28 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Building AI solutions to{" "}
            <span className="whitespace-nowrap">simplify&nbsp;your&nbsp;life.</span>
            <br className="hidden md:block" />
            <span className="grad-text">
              {" "}
              The only thing we can’t do is actual{" "}
              <span className="shimmer text-[1.15em]">magic</span>.
            </span>
          </h1>
        </Reveal>

        <Reveal className="mt-4">
          <p className="text-lg md:text-xl text-[var(--muted)] mt-2 max-w-3xl mx-auto">
            We build practical AI tools that save hours every week. J.A.N.E. helps you analyze JDs,
            improve resumes, and draft great cover letters, right in your browser.
          </p>
        </Reveal>

        <Reveal className="mt-6">
          <div className="flex items-center justify-center gap-3">
            <a className="cta-shine">
              <InstallButton />
            </a>
            <a href="/#products" className="underline hover:opacity-90">
              Explore products
            </a>
          </div>
        </Reveal>
      </Section>

      {/* Products */}
      <Section id="products" variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">Products</h2>
        </Reveal>

        <Reveal>
          <div className="relative glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 card-hover">
            {/* Full-card overlay link (server-safe) */}
            <Link
              href="/jane"
              aria-label="Open J.A.N.E. page"
              className="absolute inset-0 rounded-2xl z-10"
              tabIndex={-1}
            />

            {/* Wordmark (also a link for accessibility) */}
            <Link href="/jane" aria-label="Go to J.A.N.E. page" className="relative z-20 shrink-0">
              <Image
                src="/images/Jane_text.png"
                alt="J.A.N.E."
                width={220}
                height={64}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            <div className="relative z-20 flex-1">
              <div className="text-xl font-medium">J.A.N.E. - Job Application & Networking Engine</div>
              <p className="text-[var(--muted)] mt-1">
                Analyze job posts, spot gaps, improve bullets, and draft great cover letters, right in your browser.
              </p>
              <div className="mt-3 flex gap-3 items-center">
                {/* Keep button above the overlay so it’s clickable */}
                <div className="relative z-20">
                  <InstallButton />
                </div>
                <Link href="/jane" className="underline relative z-20">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Services */}
      <Section id="services" variant = "b">
        <Reveal>
          <h2 className="text-3xl font-semibold">Services</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-lg font-medium">AI Automation</div>
              <ul className="list-disc pl-6 text-[var(--muted)] mt-2 space-y-1">
                <li>Identify high-leverage workflows</li>
                <li>Design & implement LLM automations</li>
                <li>Pilot, measure, and iterate</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="text-lg font-medium">Tool Development</div>
              <ul className="list-disc pl-6 text-[var(--muted)] mt-2 space-y-1">
                <li>Browser extensions & internal tools</li>
                <li>Integrations: Slack, GDrive, Notion</li>
                <li>Security & privacy by default</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* About (teaser) */}
      <Section id="about" variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">About</h2>
        </Reveal>
        <Reveal>
          <p className="text-[var(--muted)] max-w-3xl">
            MuggleTech builds AI tools that actually help people. We started by solving our own job-hunt pains, and
            created J.A.N.E. Today we expand into automation and B2B services.
          </p>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" variant="b">
        <Reveal>
          <h2 className="text-3xl font-semibold">What people say</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["“J.A.N.E. made networking with recruiters so easy.”", "Aarav K.", "CS Undergrad"],
            ["“The fit score helps me focus fast.”", "Maya P.", "Data Analyst"],
            ["“Cover letter drafts are on point.”", "Daniel R.", "MBA Candidate"],
          ].map(([q, n, t]) => (
            <Reveal key={n as string}>
              <div className="glass rounded-2xl p-5 card-hover">
                <p className="text-[var(--muted)]">{q}</p>
                <div className="mt-3 text-sm font-medium">{n}</div>
                <div className="text-xs text-[var(--muted)]">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" variant="a">
        <Reveal>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-[var(--muted)]">
            Prefer phone? Call{" "}
            <a className="underline" href="tel:+16178938998">
              +1 (617) 893-8998
            </a>
            .
          </p>
        </Reveal>
        <Reveal>
          <form action="https://formspree.io/f/xgvnjydd" method="POST" className="glass rounded-2xl p-6 space-y-4">
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input
                required
                name="name"
                className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <input type="hidden" name="_subject" value="New message from muggletech site" />
            <button className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine">
              Send message
            </button>
          </form>
        </Reveal>
      </Section>

      {/* Footer CTA */}
      <Section variant="b">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Ready to simplify your workflow?</h3>
            <div className="mt-3">
              <InstallButton />
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}