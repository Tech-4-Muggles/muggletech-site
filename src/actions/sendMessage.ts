"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_FROM = process.env.CONTACT_FROM_EMAIL!;
const EMAIL_TO = process.env.CONTACT_TO_EMAIL!;

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  botField: z.string().max(0),
});

export async function sendMessage(formData: FormData) {
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

  try {
    await resend.emails.send({
      from: `MuggleTech Contact <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    await resend.emails.send({
      from: `MuggleTech <${EMAIL_FROM}>`,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\n— Team MuggleTech`,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Email failed to send. Please try again later." };
  }
}