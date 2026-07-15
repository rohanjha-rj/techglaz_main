// ============================================
// Techglaz Labs — Contact Submission API Route
// ============================================

import { NextResponse } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import { sendContactNotification } from "@/lib/resend";
import { dbFallback } from "@/lib/dbFallback";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    // 1. Parse and validate body
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form fields", errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    let contact = null;
    if (dbFallback.isFallback) {
      contact = await dbFallback.createContact({
        name,
        email: email.toLowerCase(),
        phone: phone || undefined,
        subject,
        message,
      });
    } else {
      // 2. Connect to Database
      await dbConnect();

      // 3. Create document in MongoDB
      contact = await ContactSubmission.create({
        name,
        email: email.toLowerCase(),
        phone: phone || undefined,
        subject,
        message,
      });
    }

    // 4. Trigger Resend notification in the background
    sendContactNotification({
      name,
      email,
      phone,
      subject,
      message,
    }).catch((err) => console.error("Background task: sendContactNotification failed", err));

    return NextResponse.json(
      {
        success: true,
        message: "Message submitted successfully",
        contactId: contact._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API error in /api/contact:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
