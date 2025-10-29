import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — MuggleTech",
  description: "Why we exist, what we build, and our values.",
};

export default function About() {
  return (
    <>
      {/* About Overview */}
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-6 text-center md:text-left">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-semibold">About MuggleTech</h1>
        </Reveal>

        <Reveal>
          <p className="text-[var(--muted)] text-lg">
            We build practical AI tools and automations that save people real time. 
            Our flagship helper is <strong>J.A.N.E.</strong>, and we also work with teams 
            to automate repetitive workflows. We focus on usefulness, privacy, and simplicity.
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-3 text-[var(--muted)] text-base">
            <div><strong>Mission.</strong> Ship delightful AI helpers that give people time back.</div>
            <div><strong>What we do.</strong> Browser extensions, micro-apps, and workflow automations.</div>
            <div><strong>Values.</strong> Respect privacy, move fast with quality, keep it simple.</div>
          </div>
        </Reveal>
      </section>

      {/* Founders Section */}
      <section id="founders" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-14 space-y-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-center md:text-left">Founders</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Arhan Sibal",
              role: "Product Strategy & Development",
              img: "/images/founder-arhan.webp",
              blurb:
                "Leads product strategy and technical development at MuggleTech. Arhan combines data-driven decision making with design thinking to build tools that simplify complex workflows. He previously worked at Bain and BCG, bringing expertise in AI integration, automation, and product analytics to bridge business goals with technical execution.",
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
                "Manages MuggleTech’s internal operations and systems architecture. Nishant focuses on building scalable infrastructure and efficient workflows across teams. With experience at EY, PwC, and IBM, he ensures projects are operationally sound, compliant, and optimized for collaboration—balancing performance, process, and innovation from behind the scenes.",
            },
            {
              name: "Medha",
              role: "Marketing & Growth Strategy",
              img: "/images/founder-medha.webp",
              blurb:
                "Drives marketing, storytelling, and growth strategy for MuggleTech. Medha focuses on authentic communication that connects technology with human value. With experience in digital marketing and community engagement, she leads campaigns that amplify product reach, shape brand identity, and foster meaningful relationships with users and partners.",
            },
          ].map((f) => (
            <Reveal key={f.name}>
              <div className="glass rounded-2xl p-5 card-hover text-center flex flex-col items-center">
                <div className="mx-auto w-28 h-28 overflow-hidden rounded-full border border-[var(--line)] shadow-sm">
                  <Image
                    src={f.img}
                    alt={f.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
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
    </>
  );
}