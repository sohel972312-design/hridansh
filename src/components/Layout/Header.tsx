"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { path } from "@/utils/path";
export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) setIsDarkMode(true);
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { name: "HOME", href: "/" }, { name: "SERVICES", href: "/services" },
        { name: "ABOUT", href: "/about" }, { name: "PROJECT", href: "/project" },
        { name: "PRICING", href: "/pricing" }, { name: "NEWS", href: "/news" },
    ];

    return (
        <div className="absolute top-0 left-0 w-full z-50 mt-4">
            <div className="new-container relative">
                <header className="w-full py-4 flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        <Image src={`${path}images/logo-hridansh.png`} alt="Hridansh Hospital" width={180} height={60} className="object-contain" priority />
                    </Link>

                    {/* Dark theme text for desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8 bg-black/10 backdrop-blur-md px-8 py-3 rounded-full border border-black/10">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="text-navy text-sm font-bold tracking-wider hover:text-red transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    {/* <button
                        onClick={toggleTheme}
                        className="p-2 bg-black/5 dark:bg-white/10 rounded-full text-navy dark:text-white hover:text-red transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            // Sun Icon (Light Mode switch)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            // Moon Icon (Dark Mode switch)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                    </button> */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Dark theme search icon */}
                        {/* <button className="text-navy hover:text-red transition-colors" aria-label="Search">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button> */}
                        <a href="tel:+919428875036" className="flex items-center gap-3 bg-red text-white ps-3 pe-6 py-3 rounded-full hover:bg-red-600 transition-colors shadow-lg">
                            <div className="bg-white/20 p-2 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-medium opacity-90">Call Us</span>
                                <span className="text-sm font-bold">+91 9428875036</span>
                            </div>
                        </a>
                    </div>

                    {/* Dark theme mobile hamburger icon */}

                    <button className="lg:hidden relative z-50 text-navy p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
                    </button>

                    <div className={`fixed inset-0 bg-navy/95 backdrop-blur-lg z-40 transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex flex-col items-start justify-center h-full px-12 gap-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-white text-2xl font-heading font-bold hover:text-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                            <a href="tel:+919428875036" className="mt-8 flex items-center gap-4 text-white">
                                <div className="bg-red p-3 rounded-full">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-sm font-medium opacity-90">Call Anytime</span>
                                    <span className="text-xl font-bold">+91 9428875036</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}