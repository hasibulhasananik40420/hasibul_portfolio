import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hasibul_Portfolio",
  description: "Hasibul_Portfolio for personal uses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-Sora"
      >
        {children}
      </body>
    </html>
  );
}
