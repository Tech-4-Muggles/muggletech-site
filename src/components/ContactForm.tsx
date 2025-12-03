"use client";

import { useState } from "react";
import { sendMessage } from "@/actions/sendMessage";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <form
      className="glass rounded-2xl p-6 space-y-4"
      action={async (formData) => {
        setStatus("loading");
        try {
          const result = await sendMessage(formData);

          if (result?.error) {
            console.error("Contact form error:", result.error);
            setStatus("error");
          } else {
            setStatus("success");
          }
        } catch (err) {
          console.error("Contact form unexpected error:", err);
          setStatus("error");
        }
      }}
    >
      {/* success banner */}
      {status === "success" && (
        <div className="mb-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 border border-green-200">
          Thanks for reaching out. We have received your message and emailed you a copy.
        </div>
      )}

      {/* error banner */}
      {status === "error" && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
          Something went wrong while sending your message. Please try again.
        </div>
      )}

      {/* honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      <div>
        <label className="block text-sm font-medium mb-1">Your name</label>
        <input
          required
          name="name"
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="Jane Doe"
          disabled={status === "loading"}
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
          disabled={status === "loading"}
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
          disabled={status === "loading"}
        ></textarea>
      </div>

      <button
        className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Message sent" : "Send message"}
      </button>

      <p className="text-xs text-[var(--muted)]">
        We only use your details to reply to this message.
      </p>
    </form>
  );
}