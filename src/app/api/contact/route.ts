// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.CONTACT_FROM_EMAIL;
const emailTo = process.env.CONTACT_TO_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    if (!resendApiKey || !emailFrom || !emailTo || !resend) {
      console.error("[CONTACT API] Missing env vars for email sending");
      return NextResponse.json(
        { error: "Email service not configured. Please try again later." },
        { status: 500 }
      );
    }

    const contentType = req.headers.get("content-type") || "";

    let payload: { name: unknown; email: unknown; message: unknown };

    if (contentType.includes("application/json")) {
      // Old frontend: JSON body
      const body = await req.json();
      payload = {
        name: body.name,
        email: body.email,
        message: body.message,
      };
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      // Newer frontend (if you ever use <form method="POST"> directly)
      const formData = await req.formData();
      payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
    } else {
      console.error("[CONTACT API] Unsupported Content-Type:", contentType);
      return NextResponse.json(
        {
          error:
            'Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded" or "application/json".',
        },
        { status: 400 }
      );
    }

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      console.error("[CONTACT API] Validation error:", parsed.error);
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // 1) Email to you
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `New message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // 2) Confirmation to sender
    await resend.emails.send({
      from: emailFrom,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for reaching out! We received your message and will get back to you shortly.\n\nYour message:\n${message}\n\n- Team MuggleTech`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("[CONTACT API] RESEND ERROR:", err);
    return NextResponse.json(
      {
        error:
          err?.message || "Email failed to send. Please try again later.",
      },
      { status: 500 }
    );
  }
}