import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">MuggleTech</div>
          <p className="mt-2 max-w-xs">
            AI tools that actually save time. Built with curiosity, caffeine, and code.
          </p>
          <div className="mt-3">
            <a
              href="https://buymeacoffee.com/muggletech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-medium bg-[var(--brand-soft)] text-[var(--brand-ink)] hover:brightness-95 transition"
            >
              <span aria-hidden>☕</span> Buy us a coffee
            </a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Product</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/#products" className="hover:text-slate-900">All Products</Link></li>
            <li><Link href="/jane" className="hover:text-slate-900">J.A.N.E.</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Company</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/#about" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/services" className="hover:text-slate-900">Services</Link></li>
            <li><Link href="/#contact" className="hover:text-slate-900">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-900">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-slate-900">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm text-[var(--muted)]">
            <a href="tel:+16178938998" className="hover:underline">+1 (617) 893-8998</a><br/>
            <a href="mailto:contactmuggletech@gmail.com" className="hover:underline">contactmuggletech@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} MuggleTech. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>Follow us</span>
            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-slate-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}