import InstallButton from "@/components/InstallButton";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-block text-xs tracking-wide text-cyan-200/90 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1 mb-4">
          Free for now — Chrome & Edge
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Your job-hunt sidekick, <span className="grad-text">but faster</span> ⚡
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mt-4">
          J.A.N.E. reads any job description, scores your resume, and drafts a cover letter — right in your browser.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <InstallButton />
          <a href="/download" className="underline hover:opacity-90">See how it works</a>
        </div>

        {/* trust row (placeholders now) */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
          <div className="glass rounded-full px-3 py-1">🚀 Lightweight</div>
          <div className="glass rounded-full px-3 py-1">🔒 Privacy-respecting</div>
          <div className="glass rounded-full px-3 py-1">✨ One-click install</div>
        </div>
      </div>
    </section>
  );
}