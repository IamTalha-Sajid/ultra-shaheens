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
  title: "Ultra Shaheens",
  description: "Join the ultimate community of passionate fans, where dedication meets excellence and every moment counts.",
  keywords: ["Ultra Shaheens", "community", "fans", "sports", "membership"],
  authors: [{ name: "Ultra Shaheens" }],
  openGraph: {
    title: "Ultra Shaheens",
    description: "Join the ultimate community of passionate fans, where dedication meets excellence and every moment counts.",
    images: ["/ultra-shaheens-logo.png"],
  },
  icons: {
    icon: "/ultra-shaheens-logo.png",
    shortcut: "/ultra-shaheens-logo.png",
    apple: "/ultra-shaheens-logo.png",
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
