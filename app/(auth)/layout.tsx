import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // dont let search engines index this page
  robots: {
    index: false,
  },
  title: "Login",
  description: "Admin Login for Ample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/ample-logo.svg" type="image/png" />
      </head>
      <body>
        <main>{children}</main>
        <BackToTopButton />
      </body>
    </html>
  );
}
