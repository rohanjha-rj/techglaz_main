// ============================================
// Techglaz Labs — Forgot Password API Route
// ============================================

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { Resend } from "resend";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummykey_for_build");

const schema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    await dbConnect();

    const user = await User.findOne({ email: email.toLowerCase() });

    // Always respond 200 to prevent email enumeration attacks
    if (!user) {
      return NextResponse.json(
        { success: true, message: "If that email exists, a reset link has been sent." },
        { status: 200 }
      );
    }

    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const resetTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Save hashed token to user record
    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpiry = resetTokenExpiry;
    await user.save();

    // Build reset URL
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const resetUrl = `${baseUrl}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;

    // Send email via Resend
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@techglazlabs.com",
      to: email,
      subject: "Reset Your Techglaz Labs Password",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 40px 20px;">
          <div style="background: white; border-radius: 16px; padding: 40px; border: 1px solid #e2e8f0;">
            <h1 style="color: #1A3C6E; font-size: 24px; font-weight: 800; margin: 0 0 8px;">
              Password Reset Request
            </h1>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 24px;">
              Hi ${user.fullName || "there"},<br/>
              We received a request to reset your Techglaz Labs password.
            </p>
            <a
              href="${resetUrl}"
              style="display: inline-block; background: #1A3C6E; color: white; text-decoration: none; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 10px; margin-bottom: 24px;"
            >
              Reset My Password
            </a>
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This link expires in 1 hour. If you didn't request a password reset, ignore this email.
            </p>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 20px;">
            Techglaz Labs Private Limited
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "If that email exists, a reset link has been sent." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const zodError = error as z.ZodError;
      return NextResponse.json(
        { success: false, message: zodError.issues[0].message },
        { status: 400 }
      );
    }
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
