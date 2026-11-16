import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Newsreader } from "next/font/google";
import SiteLoader from "@/components/SiteLoader";
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
  metadataBase: new URL("https://ultrashaheens.com"),
  title: "Ultra Shaheens · Pakistan Football's Ultra Fanbase",
  description: "Matchdays, screenings and a seat in the stands. Join the most passionate community of Pakistan football supporters.",
  keywords: ["Ultra Shaheens", "community", "fans", "sports", "membership"],
  authors: [{ name: "Ultra Shaheens" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ultra Shaheens",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: "Ultra Shaheens supporters in the stands" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ultrashaheens",
    images: ["/images/brand/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        {/* Hide the intro loader before first paint on repeat visits or reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('us-loader-seen')||matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-loader-seen','')}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${newsreader.variable} antialiased`}
      >
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
