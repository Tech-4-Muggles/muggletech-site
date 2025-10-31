"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InstallButton from "./InstallButton";

const nav = [
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

<Link href="/careers" className="hover:opacity-90">Careers</Link>

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/images/muggletech-wordmark.png"); // primary
  const fallback = "/images/logo-with-text.jpeg"; // fallback you already added

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2" aria-label="MuggleTech home">
          <Image
            src={logoSrc}
            alt="MuggleTech"
            width={160}
            height={44}
            priority
            onError={() => setLogoSrc(fallback)}
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[var(--muted)] hover:text-[var(--ink)]">
              {n.label}
            </Link>
          ))}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/muggletech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MuggleTech on LinkedIn"
            className="ml-2 text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.83v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.66 4.8 6.12V24h-4v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55V24h-3.86V8.5z"/>
            </svg>
          </a>
        </nav>

        <div className="ml-auto hidden md:block">
          <InstallButton />
        </div>

        <button
          className="ml-auto md:hidden text-[var(--muted)]"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] px-4 py-2 bg-white/95 backdrop-blur">
          <div className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-[var(--muted)] hover:text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}

            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[var(--muted)] hover:text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>

            <InstallButton className="mt-2 w-full text-center" />
          </div>
        </div>
      )}
    </header>
  );
}