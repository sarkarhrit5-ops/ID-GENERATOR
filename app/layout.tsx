import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HH Goa Builder Credential",
  description: "Generate a social-first HH Goa 2026 Builder Credential."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
