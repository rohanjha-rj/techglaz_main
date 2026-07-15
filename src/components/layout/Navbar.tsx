// ============================================
// Techglaz Labs — Responsive Navigation Bar
// ============================================

import React from "react";
import { auth } from "@/lib/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  // Fetch session on the server side using NextAuth.js
  // Wrapped in try/catch: if auth config is broken (missing secret, DB error, etc.)
  // the navbar gracefully falls back to the logged-out state.
  let session = null;
  try {
    session = await auth();
  } catch {
    // Auth configuration error — show logged-out navbar
    console.error("[Navbar] Failed to fetch auth session — falling back to logged-out state.");
  }

  return <NavbarClient session={session} />;
}
