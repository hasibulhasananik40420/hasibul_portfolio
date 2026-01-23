import type { Metadata } from "next";
import { outfit, playfair } from "./font";
import MainLayout from "./components/Shared/MainLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasibul Hasan | Portfolio",
  description: "Professional Portfolio of Hasibul Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans bg-main-bg text-stone-900 selection:bg-primary selection:text-white">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
