// src/actions/sendMessage.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.CONTACT_FROM_EMAIL;
const emailTo = process.env.CONTACT_TO_EMAIL;

if (!resendApiKey) {
  console.error("[CONTACT] Missing RESEND_API_KEY env var");
}

if (!emailFrom || !emailTo) {
  console.error("[CONTACT] Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL env vars");
}

const resend = new Resend(resendApiKey);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  botField: z.string().max(0), // honeypot
});

export async function sendMessage(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    botField: formData.get("_gotcha"),
  });

  if (!parsed.success) {
    const issues = parsed.error.issues;

    // Turn Zod errors into readable messages
    const message = issues
      .map((i) => {
        if (i.path.includes("name")) return "Please enter a valid name (min 2 characters).";
        if (i.path.includes("email")) return "Please enter a valid email address.";
        if (i.path.includes("message")) return "Message must be at least 10 characters long.";
        return "Invalid input. Please check your form.";
      })
      .join(" ");

    return { error: message };
    //return { error: "Invalid form submission." };
  }

  if (!resendApiKey || !emailFrom || !emailTo) {
    // Fail fast but gracefully if env is misconfigured
    return { error: "Email service is not configured. Please try again later." };
  }

  const { name, email, message } = parsed.data;

  try {
    // 1) Email to you
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `New message from ${name}`,
      // replyTo: email,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // 2) Confirmation to sender
    await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\n- Team MuggleTech`,
    });

    return { success: true };
  } catch (err: any) {
    console.error("[CONTACT] RESEND ERROR:", err);
    return {
      error: err?.message || "We could not send your message right now. Please try again in a few minutes.",
    };
  }
}