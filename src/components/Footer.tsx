"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [commit, setCommit] = useState<string | null>(null);

  useEffect(() => {
    // commit.txt is created by the Action before build and copied by Next export
    fetch("/commit.txt", { cache: "no-store" })
      .then((r) => (r.ok ? r.text() : null))
      .then((t) => t && setCommit(t.trim()))
      .catch(() => {});
  }, []);

  const short = commit ? commit.slice(0, 7) : null;
  const commitUrl = commit
    ? `https://github.com/Tech-4-Muggles/muggletech-site/commit/${commit}`
    : null;

  return (
    <footer className="border-t border-[var(--line)] bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-10 md:grid-cols-4">
        {/* Brand blurb */}
        <div>
          <div className="text-sm font-semibold">MuggleTech</div>
          <p className="mt-2 text-sm text-[var(--muted)]">
            AI tools that actually save time. Built with curiosity, caffeine, and code.
          </p>

          {/* Consistent “Buy us a coffee” inline link (same look everywhere) */}
          <p className="mt-3">
            <a
              href="https://buymeacoffee.com/muggletech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400/80 hover:bg-amber-400 px-3 py-1.5 text-sm font-medium text-black shadow-sm transition"
            >
              <span>☕</span> Buy us a coffee
            </a>
          </p>

          {/* Contact */}
          <div className="mt-6 text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-1">
              <a className="hover:underline" href="tel:+16178938998">
                +1 (617) 893-8998
              </a>
            </div>
            <div>
              <a className="hover:underline" href="mailto:contactmuggletech@gmail.com">
                contactmuggletech@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <div className="text-sm font-semibold">Product</div>
          <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
            <li>
              <Link className="hover:underline" href="/#products">
                All Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/jane/">
                J.A.N.E.
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
            <li>
              <Link className="hover:underline" href="/about/">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/services/">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/privacy/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms/">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="text-sm font-semibold">Follow us</div>
          <div className="mt-3">
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] px-3 py-1.5 text-sm hover:bg-gray-50 transition"
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 23h5V7H0v16zM8 7h4.8v2.2h.1C13.7 7.9 15.6 7 17.7 7 22 7 23 9.8 23 14.1V23h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V23H8V7z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-[var(--muted)] flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} MuggleTech. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>
              Built with ❤️ using Next.js & Tailwind CSS.
            </span>
            {short && commitUrl && (
              <a href={commitUrl} target="_blank" rel="noopener noreferrer" className="font-mono hover:underline">
                deploy {short}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}