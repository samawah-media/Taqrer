import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "سماوة | تقرير الأصول الإعلامية 2025",
  description: "تقرير استراتيجي حصري لتحويل الميزانيات التسويقية إلى أصول إعلامية مستدامة.",
};

import { Analytics } from "@vercel/analytics/react"

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Analytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6XD66SZJX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P6XD66SZJX');
          `}
        </Script>
      </body>
    </html>
  );
}
