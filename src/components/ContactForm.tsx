"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          honeypot: "", // hidden field, kept empty by real users
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json.ok === false) {
        console.error("Contact API error:", json);
        setStatus("error");
        setError(
          json?.error ||
            "Something went wrong while sending your message. Please try again."
        );
        return;
      }

      // Clear fields and show success
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      console.error("Contact fetch error:", err);
      setStatus("error");
      setError(
        "Something went wrong while sending your message. Please try again."
      );
    }
  }

  const isDisabled = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
      {status === "success" && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Thanks for reaching out. We have received your message and emailed you
          a copy.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Honeypot field for bots only */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        value=""
        readOnly
      />

      <div>
        <label className="block text-sm font-medium mb-1">Your name</label>
        <input
          required
          name="name"
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="Jane Doe"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          disabled={isDisabled}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          disabled={isDisabled}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="How can we help?"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          disabled={isDisabled}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isDisabled}
        >
          {status === "loading"
            ? "Sending…"
            : status === "success"
            ? "Message sent"
            : "Send message"}
        </button>

        {status === "success" && (
          <button
            type="button"
            className="text-sm underline"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        )}
      </div>

      <p className="text-xs text-[var(--muted)]">
        We only use your details to reply to this message.
      </p>
    </form>
  );
}