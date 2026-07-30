import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://deviance.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DEViance Intelligence — Built different?",
  description:
    "A home for the next generation of developers, vibecoders, and researchers. If you are built different, you belong at DEViance.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEViance Intelligence — Built different?",
    description:
      "We are looking for the next generation of developers, vibecoders, and researchers. You belong at DEViance.",
    url: "/",
    siteName: "DEViance.dev",
    images: [{ url: "/deviance-recruitment-banner.jpg", width: 1672, height: 941 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEViance Intelligence — Built different?",
    description:
      "A home for developers, vibecoders, and researchers made different.",
    images: ["/deviance-recruitment-banner.jpg"],
  },
  icons: { icon: "/deviance-wordmark-avatar.png" },
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
