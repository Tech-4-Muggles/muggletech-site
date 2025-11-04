import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import ProductBenefits from "@/components/ProductBenefits";
import Values from "@/components/Values";

export const metadata = {
  title: "About — MuggleTech",
  description:
    "MuggleTech builds practical AI tools and automations (like J.A.N.E.) that save people real time. Learn about our mission, values, founders, and story.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/about" },
};

const VALUES = [
  { emoji: "🛠️", title: "Useful > flashy", blurb: "Ship tools that measurably save time or improve outcomes." },
  { emoji: "🔒", title: "Privacy-first", blurb: "Minimize data, keep it local when possible, and be transparent." },
  { emoji: "⚡", title: "Quality at speed", blurb: "Move fast, but keep the bar high—tests, docs, observability." },
  { emoji: "🧭", title: "Simple is kind", blurb: "Clear UI, fewer steps, and obvious defaults." },
];

const STATS = [
  { k: "3k+", v: "hours saved" },
  { k: "400+", v: "beta users" },
  { k: "4.8★", v: "user delight" },
];

const FOUNDERS = [
  {
    name: "Arhan Sibal",
    role: "Product Strategy & Development",
    img: "/images/founder-arhan.webp",
    blurb:
      "Leads product strategy and technical development. Ex-Bain & BCG; blends data-driven decisions with design thinking to ship helpful, fast interfaces and robust automations.",
  },
  {
    name: "Shobhit Datta",
    role: "Product Delivery & Operations",
    img: "/images/founder-shobhit.webp",
    blurb:
      "Owns delivery and ops from prototype to scale. Process optimizer with a consulting background; keeps execution crisp and customer-focused.",
  },
  {
    name: "Nishant Sharma",
    role: "Ops & Internal Systems",
    img: "/images/founder-nishant.webp",
    blurb:
      "Builds scalable internal systems. Ex EY/PwC/IBM; ensures projects are reliable, compliant, and efficient—so teams move quickly without chaos.",
  },
  {
    name: "Medha",
    role: "Marketing & Growth Strategy",
    img: "/images/founder-medha.webp",
    blurb:
      "Leads marketing, storytelling, and community. Puts human value first—clear narratives, authentic voice, and programs that compound reach.",
  },
];

const TIMELINE = [
  ["2025 • Q1", "J.A.N.E. private beta launches to friends & classmates"],
  ["2025 • Q2", "Vendor tooling + small-team automation pilots"],
  ["2025 • Q3", "Public site refresh, services line formalized"],
  ["Next", "Multi-product roadmap; stronger privacy controls by default"],
];

export default function About() {
  return (
    <>
      {/* SEO: Organization JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MuggleTech",
            url: "https://muggletech.net",
            sameAs: ["https://www.linkedin.com/company/muggletech/"],
            founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center space-y-5">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold">About MuggleTech</h1>
        </Reveal>
        <Reveal>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            We build practical AI tools and automations that save people real time.
            Our flagship helper is <strong>J.A.N.E.</strong>. We also partner with teams to
            streamline repetitive workflows—focusing on usefulness, privacy, and simplicity.
          </p>
        </Reveal>
      </section>

    {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
          <Values />
      </section>
      
      {/* Founders */}
      <section id="founders" className="scroll-mt-28 mx-auto max-w-6xl px-6 pb-10 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-center md:text-left">Founders</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS.map((f) => (
            <Reveal key={f.name}>
              <div className="glass rounded-2xl p-5 card-hover text-center flex flex-col items-center h-full">
                <div className="mx-auto w-28 h-28 overflow-hidden rounded-full border border-[var(--line)] shadow-sm">
                  <Image
                    src={f.img}
                    alt={f.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-3 font-medium">{f.name}</div>
                <div className="text-sm text-[var(--muted)] mb-2">{f.role}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Our path</h3>
            <ol className="relative border-l border-[var(--line)] pl-5 space-y-4">
              {TIMELINE.map(([when, what]) => (
                <li key={when} className="ml-1">
                  <span className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-[var(--brand)]"></span>
                  <div className="text-sm font-medium">{when}</div>
                  <div className="text-sm text-[var(--muted)]">{what}</div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <div className="glass rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold">Want to automate a workflow?</h3>
            <p className="text-[var(--muted)] mt-1">Tell us the pain; we’ll propose a lightweight pilot.</p>
            <a
              href="/#contact"
              className="mt-3 inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}