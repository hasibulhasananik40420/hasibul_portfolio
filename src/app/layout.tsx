import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";


export const metadata: Metadata = {
  title: "Hasibul Portfolio - Web Developer & Designer",
  description:
    "Explore Hasibul's portfolio showcasing web development and design projects. Passionate about creating intuitive and engaging user experiences.",
  keywords: ["Hasibul", "portfolio", "web developer", "web designer", "UI/UX designer", "React", "JavaScript", "Next.js", "front-end development", "design projects"],
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Hasibul" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hasibul Portfolio - Web Developer & Designer",
    description:
      "Explore Hasibul's portfolio showcasing web development and design projects. Passionate about creating intuitive and engaging user experiences.",
    url: "https://hasibulportfolio.vercel.app/",
    images: [
      {
        url: "/Anik Image.png",
        width: 1200,
        height: 630,
        alt: "Hasibul Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasibul Portfolio - Web Developer & Designer",
    description:
      "Explore Hasibul's portfolio showcasing web development and design projects.",
    images: ["/Anik Image.png"],
  },
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
         <ScrollToTop/>
      </body>
    </html>
  );
}
