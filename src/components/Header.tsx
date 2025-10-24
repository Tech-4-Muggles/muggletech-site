"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InstallButton from "./InstallButton";
import { Linkedin } from "lucide-react";

const nav = [
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2" aria-label="MuggleTech home">
          <picture>
            <source srcSet="/images/MuggleTech-logo-with-text.avif" type="image/avif" />
            <Image
              src="/images/muggletech-wordmark.png" // PNG/SVG fallback
              alt="MuggleTech"
              width={160}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </picture>
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[var(--muted)] hover:text-[var(--ink)]">
              {n.label}
            </Link>
          ))}
          <Link
            href="https://www.linkedin.com/company/muggletech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MuggleTech on LinkedIn"
            className="text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </nav>

        <div className="ml-auto hidden md:block">
          <InstallButton />
        </div>

        <button
          className="ml-auto md:hidden text-[var(--ink)]"
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] px-4 py-2 bg-white/95">
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
            <Link
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[var(--muted)] hover:text-[var(--ink)]"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </Link>
            <InstallButton className="mt-2 w-full text-center" />
          </div>
        </div>
      )}
    </header>
  );
}