"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BuyCoffee from "@/components/BuyCoffee";

export default function Footer() {
  const [sha, setSha] = useState<string | null>(null);

  // Read commit hash written by the GitHub Action to /public/commit.txt
  useEffect(() => {
    fetch("/commit.txt")
      .then((r) => (r.ok ? r.text() : ""))
      .then((t) => setSha(t.trim()))
      .catch(() => {});
  }, []);

  const short = sha ? sha.slice(0, 7) : null;

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
        {/* Brand & coffee */}
        <div>
          <div className="font-semibold">MuggleTech</div>
          <p className="mt-2 text-[var(--muted)]">
            AI tools that actually save time. Built with curiosity, caffeine, and code.
          </p>
          <div className="mt-3">
            {/* Inline (non-floating) coffee button uses the same styling as the floating one */}
            <BuyCoffee floating={false} className="!px-4 !py-2 !text-sm" />
          </div>

          <div className="mt-6 space-y-1">
            <div className="font-semibold">Contact</div>
            <div className="text-[var(--muted)]">
              <a href="tel:+16178938998">+1 (617) 893-8998</a>
            </div>
            <div className="text-[var(--muted)]">
              <a href="mailto:contactmuggletech@gmail.com">contactmuggletech@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/#products" className="hover:underline">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/jane" className="hover:underline">
                J.A.N.E.
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="font-semibold">Follow us</div>
          <a
            href="https://www.linkedin.com/company/muggletech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-3 py-2 rounded-lg border border-[var(--line)] hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.66 4.8 6.12V24h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V24h-3.86V8.5z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-[var(--muted)] flex items-center gap-2">
          <span>© {new Date().getFullYear()} MuggleTech. All rights reserved.</span>
          <span className="ml-auto">Built with ❤️ using Next.js & Tailwind CSS.</span>
          {/*{short && (
            <>
              <span>•</span>
              <a
                href={`https://github.com/Tech-4-Muggles/muggletech-site/commit/${sha!}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                dep<span className="tracking-widest">{short}</span>
              </a>
            </>
          )}
            */}
        </div>
      </div>
    </footer>
  );
}