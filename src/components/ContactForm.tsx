"use client";

import { useEffect, useState } from "react";
import { sendMessage } from "@/actions/sendMessage";

const MIN_MESSAGE_LENGTH = 10;

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Touched = {
  name: boolean;
  email: boolean;
  message: boolean;
};

function validateFields(values: {
  name: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name || name.length < 2) {
    errors.name = "Please enter a name with at least 2 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters long.`;
  }

  return errors;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    message: false,
  });
  const [formError, setFormError] = useState<string | null>(null);

  // Revalidate whenever the user types
  useEffect(() => {
    setErrors(validateFields({ name, email, message }));
  }, [name, email, message]);

  const isFormValid = Object.keys(errors).length === 0;

  const markTouched = (field: keyof Touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");
    setFormError(null);
    setTouched({ name: true, email: true, message: true });

    const currentErrors = validateFields({ name, email, message });

    // If client side validation fails, do not call the server at all
    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      setStatus("error");
      setFormError("Please fix the highlighted fields and try again.");
      return;
    }

    try {
      const result = await sendMessage(formData);

      if (result?.error) {
        console.error("Contact form error:", result.error);
        setStatus("error");
        setFormError(result.error); // show exact message from server
        return;
      }

      // Success
      setStatus("success");
      setFormError(null);
      setName("");
      setEmail("");
      setMessage("");
      setTouched({ name: false, email: false, message: false });
      setErrors({});
    } catch (err) {
      console.error("Contact form unexpected error:", err);
      setStatus("error");
      setFormError(
        "Something went wrong while sending your message. Please try again."
      );
    }
  };

  const nameHasError = touched.name && !!errors.name;
  const emailHasError = touched.email && !!errors.email;
  const messageHasError = touched.message && !!errors.message;

  const messageLength = message.trim().length;
  const messageTooShort = messageLength < MIN_MESSAGE_LENGTH;

  return (
    <form
      className="glass rounded-2xl p-6 space-y-4"
      action={handleSubmit}
    >
      {/* success banner */}
      {status === "success" && (
        <div className="mb-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 border border-green-200">
          Thanks for reaching out. We have received your message and emailed you
          a copy.
        </div>
      )}

      {/* error banner */}
      {status === "error" && (
        <div className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
          {formError ||
            "Something went wrong while sending your message. Please try again."}
        </div>
      )}

      {/* honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Your name</label>
        <input
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => markTouched("name")}
          className={[
            "w-full rounded-lg border px-3 py-2",
            nameHasError
              ? "border-red-400 bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-400"
              : "border-[var(--line)] focus:outline-none focus:ring-1 focus:ring-blue-400",
          ].join(" ")}
          placeholder="Jane Doe"
          disabled={status === "loading"}
        />
        {nameHasError && (
          <p className="mt-1 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => markTouched("email")}
          className={[
            "w-full rounded-lg border px-3 py-2",
            emailHasError
              ? "border-red-400 bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-400"
              : "border-[var(--line)] focus:outline-none focus:ring-1 focus:ring-blue-400",
          ].join(" ")}
          placeholder="you@email.com"
          disabled={status === "loading"}
        />
        {emailHasError && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => markTouched("message")}
          className={[
            "w-full rounded-lg border px-3 py-2",
            messageHasError
              ? "border-red-400 bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-400"
              : "border-[var(--line)] focus:outline-none focus:ring-1 focus:ring-blue-400",
          ].join(" ")}
          placeholder="How can we help?"
          disabled={status === "loading"}
        />

        {/* live character counter */}
        <p
          className={[
            "mt-1 text-xs",
            messageTooShort ? "text-red-600" : "text-[var(--muted)]",
          ].join(" ")}
        >
          {messageLength}/{MIN_MESSAGE_LENGTH} characters
          {messageTooShort ? " (minimum required)" : " (minimum reached)"}
        </p>

        {messageHasError && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={status === "loading" || !isFormValid}
      >
        {status === "loading"
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