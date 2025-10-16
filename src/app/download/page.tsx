const STORE_URL =
  "https://chromewebstore.google.com/detail/jane-%E2%80%94-job-application-an/cgbimjanhgfjcopnpklcikkpcbgmjgoo?hl=en-US&utm_source=ext_sidebar";

export default function Download() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Install J.A.N.E.</h1>
      <ol className="list-decimal pl-6 space-y-2 text-slate-300">
        <li>Open the Chrome Web Store page.</li>
        <li>Click <span className="text-slate-100 font-medium">Add to Chrome</span>.</li>
        <li>Pin J.A.N.E. and open any job description to start.</li>
      </ol>
      <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl px-5 py-2.5 font-medium bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 transition">
        ▶ Open in Chrome Web Store
      </a>
    </section>
  );
}
