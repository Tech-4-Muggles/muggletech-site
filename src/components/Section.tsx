import React from "react";
type Variant = "a" | "b" | "neutral";

export default function Section({
  id,
  variant = "a",
  className = "",
  containerClassName = "",
  children,
}: {
  id?: string;
  variant?: Variant;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  const bandClass =
    variant === "a" ? "band band-a"
    : variant === "b" ? "band band-b"
    : "band band-neutral";

  return (
    <section id={id} className={`${bandClass} ${className}`}>
      <div className={`mx-auto max-w-6xl px-6 py-14 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}