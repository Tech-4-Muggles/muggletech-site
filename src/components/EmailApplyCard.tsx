"use client";

export default function EmailApplyCard() {
  const subject = encodeURIComponent("Internship application - MuggleTech");
  const body = encodeURIComponent(
    [
      "Hi MuggleTech team,",
      "",
      "Full name:",
      "Location:",
      "Track:",
      "Availability:",
      "LinkedIn or Portfolio:",
      "",
      "(Attach your resume as a PDF.)",
    ].join("\n")
  );
  const mailto = `mailto:careers@muggletech.com?subject=${subject}&body=${body}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("careers@muggletech.com");
    } catch {
      // no-op if clipboard not available
    }
  };

  const trackClick = () => {
    // Optional Plausible
    // @ts-ignore
    window.plausible && window.plausible("Careers Email Click");
  };

  return (
    <div className="glass rounded-2xl p-6 max-w-1xl mx-auto">
      <h3 className="text-xl font-semibold mb-2">Send us an email</h3>

      <p className="text-[var(--muted)] mb-3">
        You can apply by sending your resume and details directly to{" "}
        <button
          onClick={copyEmail}
          className="underline underline-offset-2 hover:opacity-90"
          aria-label="Copy careers@muggletech.com to clipboard"
          title="Copy email to clipboard"
          type="button"
        >
          careers@muggletech.com
        </button>
        . Include the following:
      </p>

      <ul className="list-disc pl-6 text-[var(--muted)] space-y-1">
        <li>Full name and location</li>
        <li>Preferred track (Product, Engineering, Design, or Operations)</li>
        <li>Availability (part time or full time, start date)</li>
        <li>LinkedIn or portfolio link</li>
        <li>Resume as a PDF attachment</li>
      </ul>

      <div className="mt-5 text-center">
        <a
          href={mailto}
          onClick={trackClick}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white transition shadow-md"
        >
          📧 Email your application
        </a>
      </div>

      <p className="text-xs text-[var(--muted)] mt-3 text-center">
        We only use your data for application review. See our{" "}
        <a href="/privacy" className="underline">privacy policy</a>.
      </p>
    </div>
  );
}