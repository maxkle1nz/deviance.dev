import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://deviance.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DEViance Intelligence — The deviation is the method",
  description:
    "Max Kle1nz's public laboratory for agentic systems, visual compilers, operational doctrine, and software that proves what it claims.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEViance Intelligence — The deviation is the method",
    description:
      "I build the core, prove it under pressure, and launch it raw. The repos are the pitch.",
    url: "/",
    siteName: "DEViance.dev",
    images: [{ url: "/og.png", width: 1672, height: 941 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEViance Intelligence — The deviation is the method",
    description:
      "Public prototypes for the next operating model of human + machine. Evidence included.",
    images: ["/og.png"],
  },
  icons: { icon: "/deviance-prism-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
