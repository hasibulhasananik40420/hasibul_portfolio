import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hasibul Portfolio - Web Developer & Designer",
  description: "Explore Hasibul's portfolio showcasing web development and design projects. Passionate about creating intuitive and engaging user experiences.",
  keywords: "Hasibul, portfolio, web developer, web designer, UI/UX designer, React, JavaScript, next js, front-end development, design projects",
  viewport: "width=device-width, initial-scale=1.0",
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
