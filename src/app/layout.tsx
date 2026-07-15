import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ToastProvider } from "@/components/shared/ToastProvider";
import CommandPalette from "@/components/shared/CommandPalette";

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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || system;
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-200">
        <SessionProvider>
          <ThemeProvider>
            <ToastProvider>
              {children}
              <CommandPalette />
            </ToastProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}



