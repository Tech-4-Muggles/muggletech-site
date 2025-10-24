"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InstallButton from "./InstallButton";
import { Linkedin } from "lucide-react";

const nav = [
  { href: "/#products", label: "Products" }, // anchor on home
  { href: "/services", label: "Services" },  // real page
  { href: "/#about", label: "About" },       // anchor on home
  { href: "/#contact", label: "Contact" },   // anchor on home
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center gap-3">
        {/* Logo (constrained) */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="MuggleTech home">
          <Image
            src="/images/MuggleTech-logo-with-text.avif"
            alt="MuggleTech"
            width={148}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 ml-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/muggletech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MuggleTech on LinkedIn"
            className="text-slate-600 hover:text-slate-900"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </nav>

        {/* Right CTA */}
        <div className="ml-auto hidden md:block">
          <InstallButton />
        </div>

        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden text-slate-700"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--line)] px-4 py-3 bg-white/95 backdrop-blur">
          <div className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-slate-700 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-slate-700 hover:text-slate-900"
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