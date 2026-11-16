import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Newsreader } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ultra Shaheens",
  description: "Join the ultimate community of passionate fans, where dedication meets excellence and every moment counts.",
  keywords: ["Ultra Shaheens", "community", "fans", "sports", "membership"],
  authors: [{ name: "Ultra Shaheens" }],
  openGraph: {
    title: "Ultra Shaheens",
    description: "Join the ultimate community of passionate fans, where dedication meets excellence and every moment counts.",
    images: ["/images/brand/ultra-shaheens-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
