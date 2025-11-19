import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Honeypot: if a bot fills this hidden field, silently pretend success
    if (honeypot) {
      console.warn("Spam / bot submission dropped");
      return NextResponse.json({ ok: true });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      console.error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
      return NextResponse.json(
        { ok: false, error: "Email is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL, email],
      replyTo: email,
      subject: `New contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New contact message from muggletech.net</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("Resend email sent:", data?.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error." },
      { status: 500 }
    );
  }
}