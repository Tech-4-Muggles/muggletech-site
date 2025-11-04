"use client";
import { useEffect, useState } from "react";

export default function GoogleFormEmbed({
  src,
  title = "Form",
  minHeight = 1200,
}: { src: string; title?: string; minHeight?: number }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOk(false), 7000); // fallback after 7s
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="glass rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-sm">
      <div className="relative w-full" style={{ minHeight }}>
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src={src}
          title={title}
          loading="lazy"
          onLoad={() => setOk(true)}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {!ok && (
        <div className="p-4 text-center text-sm text-[var(--muted)]">
          If the form does not appear, your browser or an extension may be blocking
          third-party cookies. You can{" "}
          <a href={src.replace("?embedded=true", "")} target="_blank" rel="noopener noreferrer" className="underline">
            open the form in a new tab
          </a>.
        </div>
      )}
    </div>
  );
}