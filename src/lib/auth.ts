// ============================================
// Techglaz Labs — NextAuth.js Configuration
// ============================================

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { authConfig } from "./auth.config";
import { dbFallback } from "./dbFallback";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    // Email + Password Provider
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        let user: any = null;

        // Attempt MongoDB first; dbConnect will set fallback mode if it fails
        const db = await dbConnect();
        if (!db || dbFallback.isFallback) {
          user = await dbFallback.findUserByEmail(credentials.email as string);
        } else {
          user = await User.findOne({
            email: (credentials.email as string).toLowerCase(),
          }).select("+password");
        }

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.fullName,
          image: user.image,
          role: user.role,
          phone: user.phone,
        };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user, account }) {
      // First run base jwt callback logic
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "student";
        token.phone = (user as any).phone;
      }

      // For OAuth sign-ins, create/update user in DB
      if (account?.provider === "google" && user) {
        const db = await dbConnect();
        if (!db || dbFallback.isFallback) {
          const existingUser = await dbFallback.findUserByEmail(user.email || "");
          if (!existingUser) {
            const newUser = await dbFallback.createUser({
              email: user.email || "",
              fullName: user.name || "Google User",
              image: user.image || undefined,
              emailVerified: new Date().toISOString(),
              role: "student",
            });
            token.id = newUser.id;
            token.role = "student";
          } else {
            token.id = existingUser.id;
            token.role = existingUser.role;
            token.phone = existingUser.phone;
            if (user.image && user.image !== existingUser.image) {
              await dbFallback.updateUserImage(user.email || "", user.image);
            }
          }
        } else {
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            const newUser = await User.create({
              email: user.email || "",
              fullName: user.name || "Google User",
              image: user.image || undefined,
              emailVerified: new Date(),
              role: "student" as const,
            });
            token.id = newUser._id.toString();
            token.role = "student";
          } else {
            token.id = existingUser._id.toString();
            token.role = existingUser.role;
            token.phone = existingUser.phone;
            // Update image if changed
            if (user.image && user.image !== existingUser.image) {
              existingUser.image = user.image;
              await existingUser.save();
            }
          }
        }
      }

      return token;
    },
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "techglaz-labs-super-secret-key-32-chars-fallback-value",
});
