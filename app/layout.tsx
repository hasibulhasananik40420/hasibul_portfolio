import type { Metadata } from "next";
import { outfit } from "./font";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import ScrollToTop from "./components/Shared/ScrollToTop";
import Footer from "./components/Shared/Footer";
import Preloader from "./components/Shared/Preloader";

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
    <html lang="en" className={`${outfit.variable}`}>
      <body className="antialiased font-primary">
        <Preloader />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
