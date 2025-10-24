import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-16 py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">MuggleTech</h3>
          <p className="max-w-sm leading-relaxed">
            AI tools that actually save time. Built with curiosity, caffeine, and code.
          </p>
          <a
            href="https://buymeacoffee.com/muggletech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-yellow-400 text-black font-medium px-3 py-1.5 rounded-full shadow-sm hover:shadow-[0_0_12px_rgba(255,221,0,0.5)] transition-transform hover:-translate-y-0.5"
          >
            ☕ Buy us a coffee
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Product</h4>
            <ul className="space-y-1">
              <li><Link href="/products/" className="hover:text-blue-600">All Products</Link></li>
              <li><Link href="/jane/" className="hover:text-blue-600">J.A.N.E.</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/about/" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/services/" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/contact/" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy/" className="hover:text-blue-600">Privacy</Link></li>
              <li><Link href="/terms/" className="hover:text-blue-600">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Follow us</h4>
            <a
              href="https://www.linkedin.com/company/muggletech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67V24h-5v-7.3c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.82 1.9-2.82 3.86V24h-5V8z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} MuggleTech. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}