"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

const initialForm = {
  name: "",
  email: "",
  message: "",
  website: "", // honeypot
};

function validate(values: typeof initialForm): Errors {
  const errors: Errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!emailRegex.test(values.email.trim()))
    errors.email = "Please enter a valid email.";

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please share a bit more so we know how to help.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const disabled = status === "submitting" || status === "success";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors);
        } else {
          setErrors({ form: json.error || "Something went wrong." });
        }
        setStatus("error");
        return;
      }

      // success - clear form and lock it
      setValues(initialForm);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrors({ form: "Network error. Please try again." });
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-6 space-y-4"
      noValidate
    >
      {/* Honeypot field - hidden from normal users */}
      <div className="hidden">
        <label>
          Website
          <input
            name="website"
            value={values.website}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
      </div>

      {errors.form && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errors.form}
        </div>
      )}

      {status === "success" && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          Thanks for reaching out. We have received your message and emailed you
          a copy.
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="Jane Doe"
          value={values.name}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="you@email.com"
          value={values.email}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-[var(--line)] px-3 py-2"
          placeholder="How can we help?"
          value={values.message}
          onChange={handleChange}
          disabled={disabled}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled}
        className={`rounded-xl px-5 py-2.5 font-semibold text-white cta-shine ${
          disabled
            ? "bg-slate-400 cursor-not-allowed"
            : "bg-[var(--brand)] hover:bg-blue-600"
        }`}
      >
        {status === "submitting"
          ? "Sending..."
          : status === "success"
          ? "Message sent"
          : "Send message"}
      </button>

      <p className="text-xs text-[var(--muted)]">
        We only use your details to reply to this message.
      </p>
    </form>
  );
}