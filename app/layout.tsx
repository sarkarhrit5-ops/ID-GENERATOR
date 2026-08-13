import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HH Goa 2026 Builder Credential",
  description:
    "Create a social-ready HH Goa 2026 Builder Credential from your photo, name, and stack.",
  applicationName: "HH Goa 2026 Builder Credential",
  keywords: ["HH Goa 2026", "Hacker House", "builder credential", "#FrameInGoa"],
  openGraph: {
    title: "HH Goa 2026 Builder Credential",
    description:
      "Build your social-ready HH Goa 2026 credential in a few seconds.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "HH Goa 2026 Builder Credential",
    description:
      "Build your social-ready HH Goa 2026 credential in a few seconds."
  }
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
