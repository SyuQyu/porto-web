import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kyreon.space";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pandu Utomo | Web & App Developer – Indonesia",
    template: "%s | Pandu Utomo",
  },
  description:
    "Professional web and mobile app developer based in Indonesia. Specializing in Next.js, React, UI/UX design, and scalable software solutions for businesses of all sizes.",
  keywords: [
    "web developer Indonesia",
    "jasa pembuatan website",
    "jasa website profesional",
    "Next.js developer Indonesia",
    "React developer",
    "mobile app developer",
    "UI UX design",
    "jasa pembuatan aplikasi",
    "freelance web developer",
    "Pandu Utomo",
  ],
  authors: [{ name: "Pandu Utomo", url: BASE_URL }],
  creator: "Pandu Utomo",
  publisher: "Pandu Utomo",
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Pandu Utomo | Web & App Developer – Indonesia",
    description:
      "Professional web and mobile app developer based in Indonesia. Specializing in Next.js, React, UI/UX design, and scalable software solutions.",
    url: BASE_URL,
    siteName: "Pandu Utomo Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pandu Utomo – Web & App Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandu Utomo | Web & App Developer – Indonesia",
    description:
      "Professional web and mobile app developer. Next.js, React, UI/UX & mobile solutions.",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pandu Utomo",
  url: BASE_URL,
  email: "pandu.utomo.2002@gmail.com",
  telephone: "+6282137138687",
  jobTitle: "Web & Mobile App Developer",
  description:
    "Professional web and mobile app developer based in Indonesia, specializing in Next.js, React, and modern software solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

