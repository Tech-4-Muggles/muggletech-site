export default function Footer(){
  return (
    <footer className="border-t border-[var(--line)] mt-10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} MuggleTech. All rights reserved.
      </div>
    </footer>
  );
}
