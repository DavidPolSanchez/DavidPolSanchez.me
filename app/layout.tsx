import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollTotop from "@/components/Helper/ScrollTotop";


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
      <body className={`antialiased bg-[#1212bf]`}>
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollTotop/>
      </body>
    </html>
  );
}
