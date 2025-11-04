import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import Values from "@/components/Values";

export const metadata = {
  title: "About — MuggleTech",
  description:
    "MuggleTech builds practical AI tools and automations that save people real time. Learn about our mission, values, founders, and story.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/about" },
};

const FOUNDERS = [
  {
    name: "Arhan Sibal",
    role: "Product Strategy & Development",
    img: "/images/founder-arhan.webp",
    blurb:
      "Leads product strategy and technical development. Ex-Bain and BCG. Mixes data-driven decisions with design thinking to ship fast, helpful interfaces and reliable automations.",
  },
  {
    name: "Shobhit Datta",
    role: "Product Delivery & Operations",
    img: "/images/founder-shobhit.webp",
    blurb:
      "Owns delivery and ops from prototype to scale. Process optimizer with a consulting background. Keeps execution crisp and customer focused.",
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
      "Leads marketing, storytelling, and community. Focus on clear narratives, authentic voice, and programs that compound reach.",
  },
];

// Update: start in July 2025 to match OPT
const TIMELINE: Array<[string, string]> = [
  ["2025 • Jul", "J.A.N.E. private beta starts with friends and classmates"],
  ["2025 • Aug", "Vendor tooling and small team automation pilots"],
  ["2025 • Oct", "Public site refresh and services line formalized"],
  ["Next", "Multi-product roadmap and stronger privacy controls by default"],
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
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center space-y-5">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold">About MuggleTech</h1>
        </Reveal>
        <Reveal>
          <p className="text-[var(--muted)] text-lg leading-relaxed">
            We build practical AI tools and automations that save people real time.
            Our flagship helper is <strong>J.A.N.E.</strong> We also partner with teams to streamline
            repetitive workflows with a focus on usefulness, privacy, and simplicity.
          </p>
        </Reveal>
      </section>

      {/* Fast social proof */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <StatsStrip />
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
              <article className="glass rounded-2xl p-5 card-hover text-center flex flex-col items-center h-full" role="region" aria-labelledby={`f-${f.name}`}>
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
                <h3 id={`f-${f.name}`} className="mt-3 font-medium">{f.name}</h3>
                <div className="text-sm text-[var(--muted)] mb-2">{f.role}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.blurb}</p>
              </article>
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
                  <span className="absolute -left-[7px] mt-1 w-3 h-3 rounded-full bg-[var(--brand)]" />
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
            <p className="text-[var(--muted)] mt-1">
              Tell us the pain and we will propose a lightweight pilot.
            </p>
            <a
              href="/#contact"
              className="mt-3 inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
              aria-label="Contact MuggleTech"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}