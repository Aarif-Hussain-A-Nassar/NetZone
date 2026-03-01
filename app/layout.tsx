import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netzone - The complete solution | CCTV Installation in Kochi & Alappuzha",
  description: "Netzone - The complete solution provides expert CCTV installation services in Kochi, Alappuzha, and Chandiroor. The complete solution for your security needs.",
  metadataBase: new URL("https://www.netzonethecompletesolutions.com/"),
  keywords: [
    "Netzone - The complete solution",
    "Netzone",
    "Google Netzone",
    "netzone chandiroor",
    "cctv installation kochi",
    "cctv installations alappuzha",
    "CCTV",
    "Security Systems"
  ],
  openGraph: {
    title: "Netzone - The complete solution | CCTV Installation in Kochi & Alappuzha",
    description: "Netzone - The complete solution provides expert CCTV installation services in Kochi, Alappuzha, and Chandiroor",
    url: "https://www.netzonethecompletesolutions.com/",
    siteName: "Netzone - The complete solution",
    locale: "en_IN",
    type: "website",
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
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
