import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollProgress from "@/components/shared/ScrollProgress";
import BackToTop from "@/components/shared/BackToTop";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Top scroll progress indicator */}
      <ScrollProgress />

      {/* Header Navigation */}
      <Navbar />
      
      {/* Main content viewport */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer information */}
      <Footer />

      {/* Back to top scroll button */}
      <BackToTop />
      
      {/* Floating Action Button */}
      <WhatsAppButton />
    </>
  );
}

