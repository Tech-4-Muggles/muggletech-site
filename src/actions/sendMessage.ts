"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  botField: z.string().max(0), // honeypot
});

export async function sendMessage(formData: FormData) {
  // 1) Validate environment – but do NOT throw in constructor
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form misconfigured: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL"
    );
    // Return a safe error so the UI can show a message, but builds don’t fail
    return { error: "Email service is temporarily unavailable." };
  }

  // 2) Validate form data
  const data = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    botField: formData.get("_gotcha"),
  });

  if (!data.success) {
    return { error: "Invalid form submission." };
  }

  const { name, email, message } = data.data;

  // 3) Create Resend client *inside* the function
  const resend = new Resend(apiKey);

  try {
    // Email to you
    await resend.emails.send({
      from: fromEmail,           // already "MuggleTech Contact <no-reply@…>"
      to: toEmail,
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Confirmation to sender
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\n– Team MuggleTech`,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error", err);
    return { error: "Email failed to send. Please try again later." };
  }
}