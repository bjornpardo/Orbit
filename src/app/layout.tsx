import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbit Ventures | A Teleport Venture Studio",
  description:
    "Building the next satisfying chapter on Teleport's foundation. Consumer ventures built on Teleport's 3 Powers — eCommerce, Cross-border.",
  keywords: [
    "venture studio",
    "teleport",
    "orbit ventures",
    "cross-border ecommerce",
    "SEA logistics",
  ],
  openGraph: {
    title: "Orbit Ventures | A Teleport Venture Studio",
    description:
      "Building the next satisfying chapter on Teleport's foundation.",
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
      <body className="antialiased font-sans">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
