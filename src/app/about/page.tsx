export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold">About MuggleTech</h1>
      <p className="text-slate-300 max-w-3xl">
        We build magical, practical AI tools that give people time back. J.A.N.E. is our flagship.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Founder name="Arhan Sibal" role="Product Strategy & Analytics — MBA Ross ’25; ex-BCG/Bain" />
        <Founder name="Shobhit Datta" role="Head of Product Delivery & Ops" />
        <Founder name="Nishant Sharma" role="Ops & Internal Systems Lead" />
        <Founder name="Medha" role="Marketing & Growth Strategy Lead" />
      </div>
    </section>
  );
}

function Founder({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-slate-400 mt-1">{role}</div>
    </div>
  );
}
