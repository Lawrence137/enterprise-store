
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Store | Shop Everything",
  description: "Discover quality products at E-Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
