import type { Metadata } from "next";
import {
  Inter,
  Bricolage_Grotesque,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-ui",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kyreon.space";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kyreon · Web & Product Studio building high-performance sites & apps",
    template: "%s | Kyreon Studio",
  },
  description:
    "Kyreon is an independent web & product studio. We design and build fast, conversion-focused websites, web apps, and mobile products with Next.js, React, and thoughtful UI/UX, for startups and companies worldwide.",
  applicationName: "Kyreon Studio",
  keywords: [
    "web design studio",
    "web development agency",
    "Next.js development",
    "React development",
    "product design studio",
    "UI UX design agency",
    "custom web application development",
    "mobile app development",
    "jasa pembuatan website profesional",
    "SEO optimization",
    "Kyreon",
  ],
  category: "technology",
  authors: [{ name: "Kyreon Studio", url: BASE_URL }],
  creator: "Kyreon Studio",
  publisher: "Kyreon Studio",
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
    title: "Kyreon · Web & Product Studio",
    description:
      "An independent studio designing and building fast, conversion-focused websites, web apps, and mobile products.",
    url: BASE_URL,
    siteName: "Kyreon Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kyreon · Web & Product Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyreon · Web & Product Studio",
    description:
      "We design and build fast, conversion-focused websites, web apps, and mobile products.",
    images: ["/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kyreon Studio",
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  email: "pandu.utomo.2002@gmail.com",
  telephone: "+6282137138687",
  description:
    "Independent web & product studio designing and building high-performance websites, web apps, and mobile products with Next.js and React.",
  priceRange: "$$",
  areaServed: "Worldwide",
  knowsAbout: [
    "Web Development",
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO",
    "Next.js",
    "React",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  sameAs: ["https://github.com/SyuQyu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable} ${instrumentSerif.variable} antialiased h-full`}
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
          defaultTheme="light"
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
