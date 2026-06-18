import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Techglaz Labs",
    default: "Techglaz Labs — High-End Engineering Professional Development & Training",
  },
  description: "Techglaz Labs Private Limited delivers premium specialized engineering training, R&D projects, and internship tracks in CSE, IT, VLSI, VLSI Design, IoT, Embedded Systems, and Mechanical Engineering in collaboration with IITs, CDAC, and Cyber Cells.",
  metadataBase: new URL("https://techglazlabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}


