import Link from "next/link";
import Image from "next/image";
import InstallButton from "@/components/InstallButton";

export default function Products() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-10">
      <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>

      {/* hero image */}
      <Image
        src="/images/gradient-1.svg"
        width={1600}
        height={750}
        alt="MuggleTech products"
        className="rounded-3xl shadow-2xl w-full h-auto"
        priority
      />

      <p className="text-slate-300 max-w-3xl">
        We build AI-driven assistants and apps that speed up real work — from job hunting to everyday ops.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="J.A.N.E."
          desc="Analyze JDs, see fit gaps, upgrade bullets, draft cover letters."
          cta={<InstallButton />}
          href="/jane"
        />
        <Card
  	  title="Custom Automations for Teams"
  	  desc="We scope and ship AI workflows for your business — faster approvals, better docs, less copy-paste."
  	  cta={<Link href="/services" className="underline">See services</Link>}
  	  href="/services"
	/>
      </div>
    </section>
  );
}

function Card({ title, desc, cta, href }:{
  title:string; desc:string; cta?:React.ReactNode; href:string;
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:shadow-lg transition hover:-translate-y-0.5">
      <h2 className="text-xl font-medium">
        <Link href={href} className="hover:underline">{title}</Link>
      </h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
      <div className="mt-4">{cta}</div>
    </div>
  );
}