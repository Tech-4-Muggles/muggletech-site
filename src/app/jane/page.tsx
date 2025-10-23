import InstallButton from "@/components/InstallButton";
import Image from "next/image";

export default function Jane(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-4">
      <h1 className="text-3xl md:text-4xl font-semibold">J.A.N.E.</h1>
      <div className="glass rounded-2xl p-6 flex items-center gap-6">
        <Image src="/images/jane-icon.png" alt="J.A.N.E." width={72} height={72} className="rounded-xl" />
        <div className="flex-1">
          <p className="text-[var(--muted)]">J.A.N.E. helps you analyze job descriptions, spot gaps, upgrade resume bullets, and draft cover letters — directly on the page.</p>
          <div className="mt-3"><InstallButton /></div>
        </div>
      </div>
    </section>
  );
}
