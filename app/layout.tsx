import type { Metadata } from 'next'
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "BDO Search",
  description: "Search for BDO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
