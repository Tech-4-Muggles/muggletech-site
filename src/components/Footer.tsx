export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-slate-100 font-semibold">MuggleTech</div>
          <p className="text-sm mt-2">AI tools that actually save time.</p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-slate-200">Product</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-white" href="/jane">J.A.N.E.</a></li>
            <li><a className="hover:text-white" href="/download">Download</a></li>
            <li><a className="hover:text-white" href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium text-slate-200">Company</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-white" href="/about">About</a></li>
            <li><a className="hover:text-white" href="/contact">Contact</a></li>
            <li><a className="hover:text-white" href="/privacy">Privacy</a></li>
            <li><a className="hover:text-white" href="/terms">Terms</a></li>
            <li><a className="hover:text-white" href="/cookies">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} MuggleTech. All rights reserved.
      </div>
    </footer>
  );
}
