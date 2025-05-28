import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World App",
  description: "A simple Hello World application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
