export default function StatsStrip() {
  const items = [
    { k: "3k+", v: "hours saved" },
    { k: "400+", v: "beta users" },
    { k: "4.8★", v: "user delight" },
  ];
  return (
    //<div className="glass rounded-2xl p-6 grid sm:grid-cols-3 gap-6 text-center">
    <div className="glass rounded-2xl p-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {items.map(i => (
        <div key={i.v}>
          <div className="text-2xl font-semibold">{i.k}</div>
          <div className="text-sm text-[var(--muted)]">{i.v}</div>
        </div>
      ))}
    </div>
  );
}


    