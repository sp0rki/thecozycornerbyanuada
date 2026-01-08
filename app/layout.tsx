import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Cozy Corner - Your Online Bookstore for Calm & Meaningful Stories",
    template: "%s | The Cozy Corner",
  },
  description: "Discover hand-picked book recommendations at The Cozy Corner. A curated online bookstore for readers who enjoy calm, comfort, and meaningful stories.",
  keywords: ["books", "bookstore", "book recommendations", "reading", "cozy books", "meaningful stories", "curated books"],
  authors: [{ name: "The Cozy Corner" }],
  creator: "The Cozy Corner",
  publisher: "The Cozy Corner",
  metadataBase: new URL("https://thecozycornerbyanuada.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thecozycornerbyanuada.vercel.app",
    siteName: "The Cozy Corner",
    title: "The Cozy Corner - Your Online Bookstore for Calm & Meaningful Stories",
    description: "Discover hand-picked book recommendations at The Cozy Corner. A curated online bookstore for readers who enjoy calm, comfort, and meaningful stories.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cozy Corner - Your Online Bookstore",
    description: "Discover hand-picked book recommendations at The Cozy Corner.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GN4muD5uCeObGfaKkEyBT0O3mp4wrRBxBVryfyQMvsc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}