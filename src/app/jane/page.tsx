import InstallButton from "@/components/InstallButton";
import Image from "next/image";

export const metadata = {
  title: "J.A.N.E. — Job Application & Networking Engine | MuggleTech",
  description: "Analyze JDs, score fit, improve bullets, and draft cover letters — right in your browser.",
  openGraph: { images: ["/og.jpg"] },
  alternates: { canonical: "https://muggletech.net/jane" }
};

export default function Jane(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 space-y-6">
      <div className="px-6 pt-10"><img src="/images/Jane_text.png" alt="J.A.N.E." className="h-10 md:h-12 w-auto" /></div>

      <div className="glass rounded-2xl p-6 flex items-center gap-6">
        <Image src="/images/jane-icon.png" alt="J.A.N.E." width={72} height={72} className="rounded-xl" />
        <div className="flex-1">
          <p className="text-[var(--muted)]">
            J.A.N.E. helps you analyze job descriptions, spot gaps, upgrade resume bullets, and draft cover letters —
            directly on the page.
          </p>
          <div className="mt-3"><InstallButton /></div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          ["Analyze JDs fast","Highlights keywords and gaps in seconds."],
          ["Find the right resume","Match & adapt bullets instantly."],
          ["Draft better letters","Personalized cover letters to start from."],
        ].map(([h,d])=>(
          <div key={h as string} className="glass rounded-2xl p-6 card-hover">
            <div className="text-lg font-medium">{h}</div>
            <p className="text-[var(--muted)] mt-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
