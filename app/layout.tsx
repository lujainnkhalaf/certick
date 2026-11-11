import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Certick | Trusted skills", description: "Consent-based micro-credentials and skill evidence" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
