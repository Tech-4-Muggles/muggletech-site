// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

// This endpoint is currently unused.
// The actual contact form uses the `sendMessage` server action instead.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Contact API is disabled. Please use the contact form on the site.",
    },
    { status: 404 }
  );
}