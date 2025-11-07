import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/public/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Pol Sánchez - Portfolio",
  description:
    "Welcome to my website! I'm David Pol Sánchez, a passionate software developer specializing in web development and technology solutions. Explore my projects, skills, and experiences as I share my journey in the world of coding and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1212bf]`}>
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
