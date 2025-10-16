import Link from "next/link";
import InstallButton from "@/components/InstallButton";

export default function Products() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-8">
      <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>
      <p className="text-slate-300 max-w-3xl">
        We build AI-driven assistants and apps that speed up real work — from job hunting to everyday ops.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="J.A.N.E."
          desc="Job Application & Networking Engine — analyze JDs, see fit gaps, upgrade bullets, draft cover letters."
          href="/jane"
          cta={<InstallButton />}
        />
        <Card
          title="Upcoming: Ops Copilot"
          desc="Automate repetitive team tasks (draft SOPs, summarize threads, create docs). Join the waitlist."
          href="/contact"
          cta={<Link href="/contact" className="underline">Talk to us</Link>}
        />
      </div>
    </section>
  );
}

function Card({
  title, desc, href, cta,
}: { title: string; desc: string; href: string; cta?: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-xl font-medium"><Link href={href} className="hover:underline">{title}</Link></h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
      <div className="mt-4">{cta}</div>
    </div>
  );
}
