import InstallButton from "@/components/InstallButton";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";
import JaneTabs from "@/components/JaneTabs";

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
        <section className="mx-auto max-w-[1100px] px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h1 className="tracking-tight">
              {/* Primary line — gradient, single line, responsive size */}
              <span
                className="inline-block font-extrabold hero-grad"
                style={{
                  // smaller max so it never overflows the 1100px container
                  fontSize: "clamp(2.1rem, 5.4vw, 3.6rem)",
                  lineHeight: 1.06,
                  whiteSpace: "nowrap",          // keep in one line
                  overflow: "visible",            // avoid clipping the right edge
                  letterSpacing: "-0.01em",
                }}
              >
                Building AI solutions to simplify your life.
              </span>

              {/* Secondary line — smaller, calmer */}
              <span
                className="block mt-3 font-medium text-slate-800/90"
                style={{ fontSize: "clamp(1.25rem, 2.6vw, 2rem)" }}
              >
                The only thing we can’t do is actual{" "}
                <span className="shimmer inline-block align-baseline" style={{ fontSize: "1.06em" }}>
                  magic
                </span>.
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

     {/* Screenshots */}
      <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">See J.A.N.E. in action</h2></Reveal>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-3"
              style={{scrollbarWidth:"thin"}}
              aria-label="J.A.N.E. screenshots carousel">
            {[
              {src:"/images/jane/analysis.png", alt:"Analyze Job Description"},
              {src:"/images/jane/connection-note.png", alt:"Generate Connection Note"},
              {src:"/images/jane/cover-letter-81.png", alt:"Cover Letter with score"},
              {src:"/images/jane/cover-letter.png", alt:"Generate Cover Letter"},
            ].map((img) => (
              <div key={img.src} className="min-w-[80%] sm:min-w-[60%] md:min-w-[48%] snap-center">
                <div className="glass rounded-2xl p-3 shadow-sm">
                  <Image src={img.src} alt={img.alt} width={1400} height={900} className="w-full h-auto rounded-lg" />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">Screenshots</h2></Reveal>
        <Lightbox items={[
          {src:"/images/jane/analysis.png", alt:"Analyze Job Description"},
          {src:"/images/jane/connection-note.png", alt:"Generate Connection Note"},
          {src:"/images/jane/cover-letter-81.png", alt:"Cover Letter with score"},
          {src:"/images/jane/cover-letter.png", alt:"Generate Cover Letter"},
        ]}/>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">Walkthrough</h2></Reveal>
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

      {/* Founders */}
      <section id="founders" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">Founders</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Arhan Sibal",
              role: "Product Strategy & Development",
              img: "/images/founder-arhan.webp",
              blurb:
                "Leads product strategy and technical development at MuggleTech. Arhan combines data-driven decision making with design thinking to build tools that simplify complex workflows. He previously worked at Bain and BCG, and brings expertise in AI integration, automation, and product analytics to help bridge business goals with technical execution.",
            },
            {
              name: "Shobhit Datta",
              role: "Product Delivery & Operations",
              img: "/images/founder-shobhit.webp",
              blurb:
                "Oversees product delivery and operations, ensuring smooth execution from prototype to scale. Shobhit blends strong analytical thinking with process optimization to deliver practical, high-impact solutions. His background in consulting and project management helps the team stay agile while maintaining exceptional delivery standards and user satisfaction.",
            },
            {
              name: "Nishant Sharma",
              role: "Ops & Internal Systems",
              img: "/images/founder-nishant.webp",
              blurb:
                "Manages MuggleTech’s internal operations and systems architecture. Nishant focuses on building scalable infrastructure and efficient workflows across teams. With a consulting background with EY, PwC and IBM, he ensures projects are operationally sound, compliant, and optimized for collaboration. Nishant balances performance, process, and innovation from behind the scenes."
            },
            {
              name: "Medha",
              role: "Marketing & Growth Strategy",
              img: "/images/founder-medha.webp",
              blurb:
                "Drives marketing, storytelling, and growth strategy for MuggleTech. Medha focuses on authentic communication that connects technology with human value. With experience across digital marketing and community engagement, she leads campaigns that amplify product reach, shape brand identity, and foster meaningful relationships with users and partners.",
            },
          ].map((f) => (
            <Reveal key={f.name}>
              <div className="glass rounded-2xl p-5 card-hover text-center flex flex-col items-center">
                <div className="mx-auto w-28 h-28 overflow-hidden rounded-full border border-[var(--line)] shadow-sm">
                  <Image src={f.img} alt={f.name} width={224} height={224} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 font-medium">{f.name}</div>
                <div className="text-sm text-[var(--muted)] mb-2">{f.role}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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