const STORE_URL =
  "https://chromewebstore.google.com/detail/jane-%E2%80%94-job-application-an/cgbimjanhgfjcopnpklcikkpcbgmjgoo?hl=en-US&utm_source=ext_sidebar";

export default function InstallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-block rounded-xl px-5 py-2.5 font-medium bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 transition " +
        className
      }
    >
      ▶ Install on Chrome
    </a>
  );
}
