"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [commit, setCommit] = useState<string | null>(null);

  useEffect(() => {
    fetch("/commit.txt")
      .then((r) => (r.ok ? r.text() : ""))
      .then((t) => t && setCommit(t.trim().slice(0, 7)))
      .catch(() => {});
  }, []);

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Brand */}
        <div className="space-y-3">
          <div className="font-semibold text-lg">MuggleTech</div>
          <p className="text-[var(--muted)]">
            AI tools that actually save time. Built with curiosity, caffeine, and code.
          </p>
          <a
            href="https://buymeacoffee.com/muggletech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-semibold bg-[var(--brand)] text-white hover:shadow-sm transition"
          >
            <span className="text-base">☕</span>
            <span>Buy us a coffee</span>
          </a>
        </div>

        {/* Column 2: Product */}
        <div className="space-y-2">
          <div className="font-semibold text-lg">Product</div>
          <ul className="space-y-1">
            <li>
              <a href="/#products" className="hover:underline">All Products</a>
            </li>
            <li>
              <a href="/jane" className="hover:underline">J.A.N.E.</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="space-y-2">
          <div className="font-semibold text-lg">Company</div>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/#services" className="hover:underline">Services</a></li>
            <li><a href="/#contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-2">
          <div className="font-semibold text-lg">Contact</div>
          <a
            href="tel:+16178938998"
            className="block text-[var(--muted)] hover:underline"
          >
            +1 (617) 893-8998
          </a>
          <a
            href="mailto:contactmuggletech@gmail.com"
            className="block text-[var(--muted)] hover:underline"
          >
            contactmuggletech@gmail.com
          </a>

          <div className="mt-3">
            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--brand)] transition"
            >
              <span className="font-semibold">Follow us</span>
              <span className="text-base">in</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pb-6 text-xs text-[var(--muted)]">
        © 2025 MuggleTech. All rights reserved.
        {commit && (
          <div className="mt-1">Deployed: {commit}</div>
        )}
      </div>

      {/* Floating Buy-me-a-coffee button (consistent pill) */}
      <a
        href="https://buymeacoffee.com/muggletech"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 bottom-24 right-5 md:bottom-10 md:right-8 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-semibold bg-[var(--brand)] text-white hover:shadow-sm transition"
      >
        <span className="text-lg">☕</span>
        <span>Buy us a coffee</span>
      </a>
    </footer>
  );
}