"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (href: string) =>
    `hover:text-blue-600 transition-colors ${
      pathname === href ? "text-blue-600 font-medium" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="MuggleTech home">
          <img src="/MuggleTech-logo.jpeg" alt="MuggleTech logo" className="h-7 w-auto rounded-md" />
          <span className="font-semibold text-lg text-gray-800">MuggleTech</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/products/" className={linkClasses("/products/")}>Products</Link>
          <Link href="/services/" className={linkClasses("/services/")}>Services</Link>
          <Link href="/about/" className={linkClasses("/about/")}>About</Link>
          <Link href="/contact/" className={linkClasses("/contact/")}>Contact</Link>

          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/company/muggletech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
            title="Follow us on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67V24h-5v-7.3c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.82 1.9-2.82 3.86V24h-5V8z" />
            </svg>
          </a>

          <Link
            href="/jane/"
            className="cta-boost bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Get J.A.N.E. on Chrome
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-2">
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/products/" className={linkClasses("/products/")} onClick={() => setOpen(false)}>Products</Link>
            <Link href="/services/" className={linkClasses("/services/")} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about/" className={linkClasses("/about/")} onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact/" className={linkClasses("/contact/")} onClick={() => setOpen(false)}>Contact</Link>
            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>
            <Link
              href="/jane/"
              className="cta-boost mt-2 text-center bg-blue-600 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-700"
              onClick={() => setOpen(false)}
            >
              Get J.A.N.E. on Chrome
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}