const STORE_URL =
  "https://chromewebstore.google.com/detail/jane-%E2%80%94-job-application-an/cgbimjanhgfjcopnpklcikkpcbgmjgoo?hl=en-US&utm_source=ext_sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="bg-slate-800/70 p-10 rounded-2xl shadow-2xl text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Your job-hunt sidekick, <span className="underline decoration-wavy">but faster</span> ⚡
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          J.A.N.E. reads any job description, scores your resume, and drafts a cover letter — right in your browser.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-6 py-3 font-medium bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 transition"
          >
            ▶ Install on Chrome
          </a>
          <a href="/download" className="underline hover:opacity-90">
            See how it works
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-400">Free for now. Edge supported via Chrome Web Store.</p>
      </div>
    </main>
  );
}