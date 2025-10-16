import InstallButton from "@/components/InstallButton";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Your job-hunt sidekick, <span className="underline decoration-wavy decoration-cyan-400/80">but faster</span> ⚡
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mt-4">
          J.A.N.E. reads any job description, scores your resume, and drafts a cover letter—right in your browser.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <InstallButton />
          <a href="/download" className="underline hover:opacity-90">See how it works</a>
        </div>
        <p className="mt-3 text-xs text-slate-500">Free for now. Edge supported via Chrome Web Store.</p>
      </div>
    </section>
  );
}
