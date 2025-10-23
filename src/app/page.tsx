import InstallButton from "@/components/InstallButton";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Making life simpler with AI — <span className="grad-text">it&apos;s not magic, it&apos;s MuggleTech.</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] mt-4 max-w-3xl mx-auto">
          We build practical AI tools that save hours every week. J.A.N.E. helps you analyze JDs, improve resumes, and draft better cover letters.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <InstallButton />
          <a href="#products" className="underline hover:opacity-90">Explore products</a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <h2 className="text-3xl font-semibold">Products</h2>
        <div className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <Image src="/images/jane-icon.png" alt="J.A.N.E." width={72} height={72} className="rounded-xl" />
          <div className="flex-1">
            <div className="text-xl font-medium">J.A.N.E. — Job Application & Networking Engine</div>
            <p className="text-[var(--muted)] mt-1">Analyze job posts, spot gaps, improve bullets, and draft great cover letters — right in your browser.</p>
            <div className="mt-3 flex gap-3 items-center">
              <InstallButton />
              <Link href="/jane" className="underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-14 space-y-4">
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <div className="text-lg font-medium">AI Automation</div>
            <ul className="list-disc pl-6 text-[var(--muted)] mt-2 space-y-1">
              <li>Identify high-leverage workflows</li>
              <li>Design & implement LLM automations</li>
              <li>Pilot, measure, and iterate</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-lg font-medium">Tool Development</div>
            <ul className="list-disc pl-6 text-[var(--muted)] mt-2 space-y-1">
              <li>Browser extensions & internal tools</li>
              <li>Integrations: Slack, GDrive, Notion</li>
              <li>Security & privacy by default</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="text-[var(--muted)] max-w-3xl">
          MuggleTech builds AI tools that actually help people. We started by solving our own job-hunt pains — and created J.A.N.E. Today we expand into automation and B2B services.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {"name":"Arhan Sibal","role":"Product Strategy & Analytics — MBA Ross ’25","src":"/images/founder-arhan.webp","bio":"Arhan blends product intuition with data storytelling. He’s led analytics and go-to-market projects across startups and enterprise, focused on building practical AI that saves real time."},
            {"name":"Shobhit Datta","role":"Head of Product Delivery & Ops","src":"/images/founder-shobhit.webp","bio":"Shobhit ships. He turns vague problems into clear sprints and keeps quality high. He loves turning cluttered workflows into one-click actions that scale."},
            {"name":"Nishant Sharma","role":"Ops & Internal Systems Lead","src":"/images/founder-nishant.webp","bio":"Nishant designs processes that scale, from internal dashboards to automation pipelines. Reliability, documentation, and measurable outcomes are his trademarks."},
            {"name":"Medha","role":"Marketing & Growth Strategy Lead","src":"/images/founder-medha.webp","bio":"Medha connects product value to real user needs. She’s led campaigns across education and consumer tools with clear messaging and measurable growth."},
          ].map(p => (
            <div key={p.name} className="glass rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 ring-2 ring-[var(--brand-2)]/50">
                <Image src={p.src} alt={p.name} width={96} height={96} className="object-cover" />
              </div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-[var(--muted)] mb-2">{p.role}</div>
              <p className="text-sm text-[var(--muted)] leading-snug">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <h2 className="text-3xl font-semibold">What people say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["“J.A.N.E. made tailoring my resume painless.”","Aarav K.","CS Undergrad"],
            ["“The fit score helps me focus fast.”","Maya P.","Data Analyst"],
            ["“Cover letter drafts are on point.”","Daniel R.","MBA Candidate"],
          ].map(([q,n,t]) => (
            <div key={n as string} className="glass rounded-2xl p-5">
              <p className="text-[var(--muted)]">{q}</p>
              <div className="mt-3 text-sm font-medium">{n}</div>
              <div className="text-xs text-[var(--muted)]">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14 space-y-6">
        <h2 className="text-3xl font-semibold">Contact</h2>
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
          <button className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white">Send message</button>
        </form>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Ready to simplify your workflow?</h3>
          <div className="mt-3"><InstallButton /></div>
        </div>
      </section>
    </div>
  );
}
