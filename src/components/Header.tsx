"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InstallButton from "./InstallButton";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/download", label: "Download" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2" aria-label="MuggleTech home">
          <Image
            src="/images/MuggleTech-logo-with-text.avif"
            alt="MuggleTech"
            width={160}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 ml-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-slate-300 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden md:block">
          <InstallButton />
        </div>

        <button
          className="ml-auto md:hidden text-slate-200"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 px-4 py-2 bg-slate-900">
          <div className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-slate-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <InstallButton className="mt-2 w-full text-center" />
          </div>
        </div>
      )}
    </header>
  );
}
