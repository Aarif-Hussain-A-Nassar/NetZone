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
  title: "Netzone - The complete solution | CCTV & Security Systems",
  description: "Netzone - The complete solution provides expert CCTV installation services in Kochi, Ernakulam, Alappuzha, and Chandiroor. The complete solution for your security needs.",
  metadataBase: new URL("https://www.netzonethecompletesolutions.com/"),
  keywords: [
    "Netzone - The complete solution",
    "Netzone",
    "Google Netzone",
    "netzone chandiroor",
    "cctv installation kochi",
    "cctv installations alappuzha",
    "cctv installation ernakulam",
    "CCTV",
    "Security Systems"
  ],
  openGraph: {
    title: "Netzone - The complete solution | CCTV & Security Systems",
    description: "Netzone - The complete solution provides expert CCTV installation services in Kochi, Ernakulam, Alappuzha, and Chandiroor",
    url: "https://www.netzonethecompletesolutions.com/",
    siteName: "Netzone - The complete solution",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Netzone - The complete solution',
  description: 'Netzone - The complete solution provides expert CCTV installation services in Kochi, Ernakulam, Alappuzha, and Chandiroor.',
  url: 'https://www.netzonethecompletesolutions.com/',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandiroor',
    addressRegion: 'Kerala',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Kochi'
    },
    {
      '@type': 'City',
      name: 'Alappuzha'
    },
    {
      '@type': 'City',
      name: 'Chandiroor'
    },
    {
      '@type': 'City',
      name: 'Ernakulam'
    }
  ]
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
