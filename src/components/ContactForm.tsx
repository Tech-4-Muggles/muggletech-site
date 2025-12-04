"use client";

import { useEffect, useState } from "react";
import { sendMessage } from "@/actions/sendMessage";

const MESSAGE_MIN = 10;

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Name state
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameBlurred, setNameBlurred] = useState(false);

  // Email state
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailBlurred, setEmailBlurred] = useState(false);

  // Message state
  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const [messageBlurred, setMessageBlurred] = useState(false);

  const [fadeOutSuccess, setFadeOutSuccess] = useState(false);
  const [fadeOutError, setFadeOutError] = useState(false);

  // Simple client-side validators (aligned with Zod rules on the server)
  const isNameValid = name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const trimmedMessageLength = message.trim().length;
  const isMessageValid = trimmedMessageLength >= MESSAGE_MIN;

  // Messaging visibility logic
  const showMessageCounter =
    messageTouched && trimmedMessageLength > 0 && !isMessageValid;
  const showMessageError = messageBlurred && !isMessageValid;
  const showNameError = nameBlurred && !isNameValid;
  const showEmailError = emailBlurred && !isEmailValid;

  const canSubmit =
    isNameValid && isEmailValid && isMessageValid && status !== "loading";

  // Fade-out logic for success banner
  useEffect(() => {
    if (status !== "success") return;

    setFadeOutSuccess(false);
    const t1 = setTimeout(() => setFadeOutSuccess(true), 4500);
    const t2 = setTimeout(() => {
      setStatus("idle");
      setFadeOutSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [status]);

  // Fade-out logic for error banner
  useEffect(() => {
    if (status !== "error") return;

    setFadeOutError(false);
    const t1 = setTimeout(() => setFadeOutError(true), 4500);
    const t2 = setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
      setFadeOutError(false);
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [status]);

  return (
    <form
      className="glass rounded-2xl p-6 space-y-4"
      action={async (formData) => {
        setStatus("loading");
        setErrorMessage(null);

        const result = await sendMessage(formData);

        if (result?.error) {
          console.error("Contact form error:", result.error);
          setStatus("error");
          setErrorMessage(result.error);
        } else {
          setStatus("success");

          // Reset fields and flags
          setName("");
          setEmail("");
          setMessage("");

          setNameTouched(false);
          setNameBlurred(false);
          setEmailTouched(false);
          setEmailBlurred(false);
          setMessageTouched(false);
          setMessageBlurred(false);
        }
      }}
    >
      {/* success banner */}
      {status === "success" && (
        <div
          className={`mb-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 border border-green-200 transition-opacity duration-500 ${
            fadeOutSuccess ? "opacity-0" : "opacity-100"
          }`}
        >
          Thanks for reaching out. We’ve received your message and emailed you a
          copy.
        </div>
      )}

      {/* error banner */}
      {status === "error" && errorMessage && (
        <div
          className={`mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200 transition-opacity duration-500 ${
            fadeOutError ? "opacity-0" : "opacity-100"
          }`}
        >
          {errorMessage}
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
          className={`w-full rounded-lg px-3 py-2 border ${
            !isNameValid && (nameTouched || nameBlurred)
              ? "border-red-400 bg-red-50/40"
              : "border-[var(--line)]"
          }`}
          placeholder="Jane Doe"
          disabled={status === "loading"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (!nameTouched) setNameTouched(true);
          }}
          onBlur={() => setNameBlurred(true)}
        />
        {showNameError && (
          <p className="mt-1 text-xs text-red-600 transition-opacity duration-200">
            Please enter your name (at least 2 characters).
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          required
          type="email"
          name="email"
          className={`w-full rounded-lg px-3 py-2 border ${
            !isEmailValid && (emailTouched || emailBlurred)
              ? "border-red-400 bg-red-50/40"
              : "border-[var(--line)]"
          }`}
          placeholder="you@email.com"
          disabled={status === "loading"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!emailTouched) setEmailTouched(true);
          }}
          onBlur={() => setEmailBlurred(true)}
        />
        {showEmailError && (
          <p className="mt-1 text-xs text-red-600 transition-opacity duration-200">
            Please enter a valid email address so we can reply to you.
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          className={`w-full rounded-lg px-3 py-2 border ${
            !isMessageValid && (messageTouched || messageBlurred)
              ? "border-red-400 bg-red-50/40"
              : "border-[var(--line)]"
          }`}
          placeholder="How can we help?"
          disabled={status === "loading"}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (!messageTouched) setMessageTouched(true);
          }}
          onBlur={() => setMessageBlurred(true)}
        ></textarea>

        {/* live counter – only under min, after typing */}
        {showMessageCounter && (
          <p className="mt-1 text-xs text-red-600 transition-opacity duration-200">
            {trimmedMessageLength}/{MESSAGE_MIN} characters (minimum required)
          </p>
        )}

        {/* inline validation error – only after blur and still invalid */}
        {showMessageError && (
          <p className="mt-1 text-xs text-red-600 transition-opacity duration-200">
            Your message is a bit short. Please add a few more details (minimum{" "}
            {MESSAGE_MIN} characters).
          </p>
        )}
      </div>

      <button
        className="rounded-xl px-5 py-2.5 font-semibold bg-[var(--brand)] hover:bg-blue-600 text-white cta-shine disabled:opacity-70"
        disabled={!canSubmit}
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