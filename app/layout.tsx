import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cyrix Lab — Custom Software for Operations",
  description:
    "We build internal tools, automation systems, and monitoring dashboards that help teams move faster, catch problems early, and resolve them before they get expensive.",
  keywords: [
    "custom software",
    "internal tools",
    "automation",
    "monitoring dashboards",
    "operational software",
    "business software",
  ],
  authors: [{ name: "Cyrix Lab" }],
  openGraph: {
    title: "Cyrix Lab — Custom Software for Operations",
    description:
      "We build internal tools, automation systems, and monitoring dashboards that help businesses move faster and fix problems in real time.",
    url: "https://cyrixlab.com",
    siteName: "Cyrix Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyrix Lab — Custom Software for Operations",
    description:
      "Internal tools, automation, and monitoring dashboards built around how your team actually works.",
  },
  metadataBase: new URL("https://cyrixlab.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Righteous&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
