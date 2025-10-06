import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — Fun Memecoin with Clear Buy Steps & Tokenomics",
  description: "MemePulse blends playful vibes with transparent tokenomics. Simple buy steps, community-first vibes, and a meme-friendly future.",
  keywords: ["memecoin", "memecoin landing", "buy MEME", "tokenomics", "cryptocurrency", "community", "fun crypto", "crypto meme", "how to buy memecoin"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemePulse — Fun Memecoin with Clear Buy Steps & Tokenomics",
    description: "MemePulse blends playful vibes with transparent tokenomics. Simple buy steps, community-first vibes, and a meme-friendly future.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759756077111-32862407.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse mascot logo in a vibrant style",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — Fun Memecoin with Clear Buy Steps & Tokenomics",
    description: "MemePulse blends playful vibes with transparent tokenomics. Simple buy steps, community-first vibes, and a meme-friendly future.",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759756077111-32862407.jpg",
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}