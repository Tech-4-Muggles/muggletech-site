import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold">About MuggleTech</h1>
      <p className="text-slate-300 max-w-3xl">
        We build magical, practical AI tools that give people time back. J.A.N.E. is our flagship.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Founder
          name="Arhan Sibal"
          role="Product Strategy & Analytics — MBA Ross ’25"
          src="/images/Arhan_DP.webp"
        />
        <Founder
          name="Shobhit Datta"
          role="Head of Product Delivery & Ops"
          src="/images/Shobhit_DP.webp"
        />
        <Founder
          name="Nishant Sharma"
          role="Ops & Internal Systems Lead"
          src="/images/Nishant_DP.webp"
        />
        <Founder
          name="Medha"
          role="Marketing & Growth Strategy Lead"
          src="/images/Medha_DP.webp"
        />
      </div>
    </section>
  );
}

function Founder({
  name,
  role,
  src,
}: {
  name: string;
  role: string;
  src: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 hover:-translate-y-0.5 transition">
      <div className="flex items-center gap-4">
        <Image
          src={src}
          alt={name}
          width={72}
          height={72}
	  className="h-18 w-18 rounded-xl object-cover [animation:float_6s_ease-in-out_infinite]"
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </div>
      </div>
    </div>
  );
}