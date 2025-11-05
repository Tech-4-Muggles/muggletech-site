import InstallButton from "@/components/InstallButton";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";
import JaneTabs from "@/components/JaneTabs";
import ProductBenefits from "@/components/ProductBenefits";
import StatsStrip from "@/components/StatsStrip";

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
        <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h1 className="tracking-tight">
              {/* Primary line — gradient, wraps naturally on small screens */}
              <span
                className="font-extrabold hero-grad block"
                style={{
                  fontSize: "clamp(2.1rem, 5.4vw, 3.6rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.01em",
                  whiteSpace: "normal",   // ✅ allow wrapping
                  display: "inline",      // behaves naturally inside text flow
                }}
              >
                Building AI solutions to simplify your life
              </span>

              {/* Secondary line — smaller, calmer */}
              <span
                className="block mt-3 font-medium text-slate-800/90"
                style={{ fontSize: "clamp(1.25rem, 2.6vw, 2rem)" }}
              >
                The only thing we can’t do is actual{" "}
                <span className="shimmer inline-block align-baseline" style={{ fontSize: "1.06em" }}>
                  magic
                </span>
              </span>
            </h1>

          </Reveal>

          <Reveal className="mt-5">
            <p className="text-lg md:text-xl text-[var(--muted)] mt-2 max-w-3xl mx-auto">
              We build practical AI tools that save hours every week. J.A.N.E. helps you analyze JDs,
              improve resumes, and draft great cover letters, right in your browser.
            </p>
          </Reveal>

          <Reveal className="mt-7">
            <div className="flex items-center justify-center gap-3">
              <span className="cta-shine">
                <InstallButton />
              </span>
              <a href="/#products" aria-label="Explore MuggleTech products" className="underline hover:opacity-90">
                Explore products
              </a>
            </div>
          </Reveal>
        </section>
        
      {/* Slim stats band */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <StatsStrip />
      </section>        
      
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
        
        {/* Redacted teaser card */}
        <Reveal>
          <div className="relative glass rounded-2xl p-6 overflow-hidden">

            <div className="flex items-start gap-6 opacity-90">
              {/* blurred logo block */}
              <div className="relative w-40 h-20 md:w-48 md:h-24 rounded-xl overflow-hidden ring-1 ring-[var(--line)]">
                <div
                  className="absolute inset-0 blur-md"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 0% 0%, #c7d9ff 0%, #eaf2ff 55%, #ffeaa7 95%)",
                  }}
                />
                <div className="absolute inset-0 bg-white/50" />
              </div>

              {/* blurred text content (looks real, reveals nothing) */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-56 rounded-md bg-slate-300/60 blur-[2px]" />
                  <div className="h-5 w-24 rounded-full bg-slate-200/80 blur-[2px]" />
                </div>

                <div className="mt-3 space-y-2 select-none pointer-events-none" aria-hidden>
                  <div className="h-4 w-5/6 rounded bg-slate-200/75 blur-[2px]" />
                  <div className="h-4 w-4/6 rounded bg-slate-200/75 blur-[2px]" />
                  <div className="h-4 w-3/5 rounded bg-slate-200/75 blur-[2px]" />
                </div>
              </div>
            </div>
            {/* stamp */}
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="px-4 py-2 text-sm md:text-base font-semibold tracking-wide uppercase
                              bg-amber-100/90 text-amber-800 rounded-full ring-1 ring-amber-300
                              shadow-sm">
                New Products Coming soon
              </span>
            </div>
            
            {/* accessibility note for screen readers only */}
            <p className="sr-only">MuggleTech Labs: new product coming soon. Details are hidden.</p>
          </div>
        </Reveal>
      </Section>

      

     {/* Screenshots */}
      <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">See J.A.N.E. in action</h2></Reveal>
        <JaneTabs />
      </section>

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

      {/* Testimonials */}
      <Section id="testimonials" variant="b">
        <Reveal>
          <h2 className="text-3xl font-semibold">What people say</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["“Cover letter drafts are on point, helps me apply much faster. Much recommended to all job-seekers!”", "Aarav K.", "CS Undergrad"],
            ["“The fit score helps me select my optimal resume for the role.”", "Maya P.", "Data Analyst"],
            ["“J.A.N.E. made networking with recruiters so easy.”", "Daniel R.", "MBA Candidate"],
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
          <h2 className="text-3xl font-semibold">Contact Us</h2>
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