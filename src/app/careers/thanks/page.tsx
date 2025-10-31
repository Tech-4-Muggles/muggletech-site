import Link from "next/link";

export const metadata = {
  title: "Thank you - Careers",
};

export default function Thanks() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center space-y-4">
      <h1 className="text-3xl md:text-4xl font-semibold">Thanks for applying</h1>
      <p className="text-[var(--muted)]">
        We received your application. We review every submission. If it looks like a fit, we will reach out soon.
      </p>
      <div className="mt-4">
        <Link href="/" className="underline">Back to home</Link>
      </div>
    </section>
  );
}