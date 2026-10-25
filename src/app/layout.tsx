import type { Metadata } from "next";
import { Rethink_Sans, Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${onest.variable}`}>
      <body className="font-sans antialiased text-fourth bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        {children}
      </body>
    </html>
  );
}