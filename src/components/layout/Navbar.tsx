// ============================================
// Techglaz Labs — Responsive Navigation Bar
// ============================================

import React from "react";
import { auth } from "@/lib/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  // Fetch session on the server side using NextAuth.js
  const session = await auth();

  return <NavbarClient session={session} />;
}
