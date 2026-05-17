import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Parkinsans — ARTA brand display font for all main headers
const parkinsans = Inter({
  subsets: ['latin'],
  variable: '--font-parkinsans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARTA | Infrastructure for Modern Brand Builders',
  description: 'AI-powered operational tools and end-to-end brand building for founders, influencers, and investors.',
};

import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Parkinsans — not yet in next/font, load via Google Fonts link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${parkinsans.variable} font-sans antialiased bg-stone-50 dark:bg-[#0a0a0c] text-stone-900 dark:text-stone-50 selection:bg-indigo-500/30`}>
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
