import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nero | Premium App & Web Development",
  description: "We craft beautiful, high-performance web and mobile applications that mesmerize.",
  openGraph: {
    title: "Nero | Creative Web & App Agency",
    description: "Award-winning design and development for ambitious brands.",
    url: "https://nero.agency",
    siteName: "Nero Agency",
    images: [
      {
        url: "https://nero.agency/og.png",
        width: 1200,
        height: 630,
        alt: "Nero Agency Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nero | Digital Excellence",
    description: "Transforming ideas into high-performance products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
