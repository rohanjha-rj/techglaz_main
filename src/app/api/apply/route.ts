// ============================================
// Techglaz Labs — Application Submission API Route
// ============================================

import { NextResponse } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Application from "@/models/Application";
import { auth } from "@/lib/auth";
import { generateRefNumber } from "@/lib/utils";
import { sendApplicationConfirmation, sendApplicationNotification } from "@/lib/resend";

const phoneRegex = /^[6-9]\d{9}$/;

const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex),
  branch: z.enum(["CSE_IT", "EE", "ECE", "ME", "CIVIL"]),
  course: z.string().min(1),
  trainingTrack: z.enum(["Teachers' School", "Teachers' College", "Students", "General"]),
  institution: z.string().optional(),
  yearOrExperience: z.string().optional(),
  message: z.string().max(500).optional(),
  referralSource: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    // 1. Authenticate user if logged in
    const session = await auth();
    const userId = session?.user?.id;

    // 2. Parse and validate body
    const body = await req.json();
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form fields", errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      branch,
      course,
      trainingTrack,
      institution,
      yearOrExperience,
      message,
      referralSource,
    } = parsed.data;

    // 3. Connect to Database
    await dbConnect();

    // 4. Generate unique reference number
    const referenceNumber = generateRefNumber();

    // 5. Create application document in MongoDB
    const application = await Application.create({
      userId: userId || undefined,
      fullName,
      email: email.toLowerCase(),
      phone,
      branch,
      course,
      trainingTrack,
      institution: institution || undefined,
      yearOrExperience: yearOrExperience || undefined,
      message: message || undefined,
      referralSource: referralSource || undefined,
      referenceNumber,
      status: "pending",
    });

    // 6. Trigger transactional emails in the background (asynchronous, do not block the thread)
    // Send confirmation to the applicant
    sendApplicationConfirmation({
      to: email,
      name: fullName,
      course,
      referenceNumber,
    }).catch((err) => console.error("Background task: sendApplicationConfirmation failed", err));

    // Send alert to the admin
    sendApplicationNotification({
      name: fullName,
      email,
      phone,
      course,
      branch,
      referenceNumber,
    }).catch((err) => console.error("Background task: sendApplicationNotification failed", err));

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        referenceNumber,
        applicationId: application._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API error in /api/apply:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
