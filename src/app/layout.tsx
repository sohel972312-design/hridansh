
import type { Metadata } from "next";
import ReactDOM from "react-dom";
import { Rethink_Sans, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BackToTop from "@/components/UI/BackToTop";
import WhatsAppButton from "@/components/UI/WhatsAppButton";

import { path } from "@/utils/path";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hridansh Hospital",
  description: "Creating Family Dreams - Advanced Fertility",
};

const heroVideo = `${path}images/0_Doctor_Pregnant_Woman_1280x720.mp4`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ReactDOM.preload(heroVideo, {
    as: "video",
    fetchPriority: "high",
  });

  return (
    <html lang="en" className={`${rethinkSans.variable} ${onest.variable}`}>
      <body className="  antialiased text-fourth bg-white   transition-colors duration-300">
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
