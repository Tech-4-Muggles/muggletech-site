import InstallButton from "@/components/InstallButton";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "MuggleTech — Building AI solutions to simplify your life",
  description: "J.A.N.E. for job seekers, and AI automation services for teams. The only thing we can’t do is actual magic.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net" }
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Building AI solutions to simplify your life.<br className="hidden md:block" />
            <span className="grad-text"> The only thing we can’t do is actual magic.</span>
          </h1>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-lg md:text-xl text-[var(--muted)] mt-2 max-w-3xl mx-auto">
            We build practical AI tools that save hours every week. J.A.N.E. helps you analyze JDs,
            improve resumes, and draft great cover letters — right in your browser.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <div className="flex items-center justify-center gap-3">
            <a className="cta-shine"><InstallButton /></a>
            <a href="#products" className="underline hover:opacity-90">Explore products</a>
          </div>
        </Reveal>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">Products</h2></Reveal>
        <Reveal>
          <div className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 card-hover">
            <Image src="/images/jane-icon.png" alt="J.A.N.E." width={72} height={72} className="rounded-xl" />
            <div className="flex-1">
              <div className="text-xl font-medium">J.A.N.E. — Job Application & Networking Engine</div>
              <p className="text-[var(--muted)] mt-1">
                Analyze job posts, spot gaps, improve bullets, and draft great cover letters — right in your browser.
              </p>
              <div className="mt-3 flex gap-3 items-center">
                <InstallButton />
                <Link href="/jane" className="underline">Learn more →</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14 space-y-4">
        <Reveal><h2 className="text-3xl font-semibold">Services</h2></Reveal>
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
      </section>

      {/* About (teaser) */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">About</h2></Reveal>
        <Reveal>
          <p className="text-[var(--muted)] max-w-3xl">
            MuggleTech builds AI tools that actually help people. We started by solving our own job-hunt pains — and created J.A.N.E.
            Today we expand into automation and B2B services.
          </p>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">What people say</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["“J.A.N.E. made tailoring my resume painless.”","Aarav K.","CS Undergrad"],
            ["“The fit score helps me focus fast.”","Maya P.","Data Analyst"],
            ["“Cover letter drafts are on point.”","Daniel R.","MBA Candidate"],
          ].map(([q,n,t]) => (
            <Reveal key={n as string}>
              <div className="glass rounded-2xl p-5 card-hover">
                <p className="text-[var(--muted)]">{q}</p>
                <div className="mt-3 text-sm font-medium">{n}</div>
                <div className="text-xs text-[var(--muted)]">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal><h2 className="text-3xl font-semibold">Contact</h2></Reveal>
        <Reveal>
          <form action="https://formspree.io/f/xgvnjydd" method="POST" className="glass rounded-2xl p-6 space-y-4">
            <input type="text" name="_gotcha" style={{display:"none"}} />
            <div>
              <label className="block text-sm font-medium mb-1">Your name</label>
              <input required name="name" className="w-full rounded-lg border border-[var(--line)] px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-lg border border-[var(--line)] px-3 py-2" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea required name="message" rows={5} className="w-full rounded-lg border border-[var(--line)] px-3 py-2" placeholder="How can we help?"></textarea>
            </div>
            <input type="hidden" name="_subject" value="New message from muggletech site" />
            <button className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine">Send message</button>
          </form>
        </Reveal>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Ready to simplify your workflow?</h3>
            <div className="mt-3"><InstallButton /></div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
