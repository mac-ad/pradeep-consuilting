import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import MainLayout from "@/components/layout/MainLayout";
import TopInfo from "@/components/TopInfo";
import BackToTopButton from "@/components/BackToTopButton";
import ModalNotification from "@/components/ModalNotification";
import WhatsappChat from "@/components/WhatsAppChat";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated Metadata for SEO
export const metadata: Metadata = {
  title:
    "Ample International Education | Nepal to UK Consultancy in Kathmandu & Pokhara",
  description:
    "Ample International Education offers expert Nepal to UK consultancy services in Kathmandu and Pokhara. Study abroad with trusted guidance for a bright future.",
  keywords:
    "Ample International Education, Nepal to UK consultancy, study in UK from Nepal, education consultancy Kathmandu, education consultancy Pokhara, study abroad Nepal",
  openGraph: {
    title: "Ample International Education | Nepal to UK Consultancy",
    description:
      "Top consultancy for studying in the UK from Nepal, with offices in Kathmandu and Pokhara. Contact Ample International Education today!",
    url: "https://www.yourwebsite.com", // Replace with your actual website URL
    siteName: "Ample International Education",
    images: [
      {
        url: "https://www.yourwebsite.com/ample-logo-og-image.jpg", // Replace with an actual image URL
        width: 800,
        height: 600,
        alt: "Ample International Education Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ample International Education | Nepal to UK Consultancy",
    description:
      "Expert guidance for studying in the UK from Nepal. Visit us in Kathmandu and Pokhara!",
  },
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
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ample International Education" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Kathmandu, Pokhara" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
      </head>
      <body>
        <ErrorBoundary>
          <Toaster />
          <TopInfo />
          <MainLayout>{children}</MainLayout>
          <BackToTopButton />
          <ModalNotification />
          <WhatsappChat />
        </ErrorBoundary>
      </body>
    </html>
  );
}
