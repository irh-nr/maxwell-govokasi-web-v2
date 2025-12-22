import type React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/landing-page/navigation-v2";
import { Footer } from "@/components/landing-page/footer";
import "./globals.css";

const _Work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxwell x GOVOKASi - Career Acceleration Platform",
  description:
    "Connect young talent with top corporate opportunities and build the corporate future through mentorship, coaching, and placement support.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <Navigation />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
