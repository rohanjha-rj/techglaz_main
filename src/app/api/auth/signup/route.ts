// ============================================
// Techglaz Labs — Sign Up API Route
// ============================================

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { dbFallback } from "@/lib/dbFallback";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid Indian phone number")
    .optional()
    .or(z.literal("")),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  role: z.enum(["student", "teacher"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const result = signUpSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, phone, password, role } = result.data;

    let existingUser = null;
    if (dbFallback.isFallback) {
      existingUser = await dbFallback.findUserByEmail(email);
    } else {
      await dbConnect();
      existingUser = await User.findOne({ email: email.toLowerCase() });
    }

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    let user: any = null;
    if (dbFallback.isFallback) {
      user = await dbFallback.createUser({
        fullName,
        email: email.toLowerCase(),
        phone: phone || undefined,
        password: hashedPassword,
        role,
      });
    } else {
      user = await User.create({
        fullName,
        email: email.toLowerCase(),
        phone: phone || undefined,
        password: hashedPassword,
        role,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully. You can now log in.",
        userId: user._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sign up error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
