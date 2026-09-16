import type { Metadata } from "next";
import { Manrope, Fraunces, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "Innerlight — Vishal Gautam",
  description: "A luxury spiritual studio platform.",
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

import Navigation from "@/components/Navigation";
import LuxuryCursor from "@/components/LuxuryCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${fraunces.variable} ${notoDevanagari.variable} font-sans`}
      >
        <LanguageProvider>
          <LuxuryCursor />
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

