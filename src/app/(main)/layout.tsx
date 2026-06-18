import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header Navigation */}
      <Navbar />
      
      {/* Main content viewport */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer information */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </>
  );
}
