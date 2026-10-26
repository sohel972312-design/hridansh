"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { path } from "@/utils/path";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Scroll handler for Sticky Header
    useEffect(() => {
        const handleScroll = () => {
            // Header height + 1rem approx = 120px-150px
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open (Fixes the glitch)
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) setIsDarkMode(true);
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    const navLinks = [
        { name: "HOME", href: "/" }, { name: "SERVICES", href: "/services" },
        { name: "ABOUT", href: "/about" }, { name: "PROJECT", href: "/project" },
        { name: "PRICING", href: "/pricing" }, { name: "NEWS", href: "/news" },
    ];

    return (
        <>
            {/* Custom keyframes for smooth slide-down animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slideDown {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(0); }
                }
                .animate-slide-down {
                    animation: slideDown 0.4s ease-out forwards;
                }
            `}} />

            {/* Main Header */}
            <div className={`w-full z-50 left-0 top-0 transition-colors duration-300 ${isSticky
                ? "fixed bg-white shadow-md py-2 md:py-4 animate-slide-down"
                : "absolute bg-transparent mt-4 py-4"
                }`}>
                <div className="new-container relative">
                    <header className="w-full flex items-center justify-between">
                        {/* Main Desktop Logo */}
                        <Link href="/" className="relative z-40">
                            <Image
                                src={`${path}images/logo-hridansh.png`}
                                alt="Hridansh Hospital"
                                width={180}
                                height={60}
                                className="object-contain h-13 md:h-15 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className={`hidden lg:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 ${isSticky ? "bg-gray-100/80" : "bg-black/10 backdrop-blur-md border border-black/10"
                            }`}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-navy text-sm font-bold tracking-wider hover:text-red transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Call to Action */}
                        <div className="hidden lg:flex items-center gap-6">
                            <a href="tel:+919428875036" className="flex items-center gap-3 bg-red text-white ps-3 pe-6 py-3 rounded-full hover:bg-red-600 transition-colors shadow-lg">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-xs font-medium opacity-90">Call Us</span>
                                    <span className="text-sm font-bold">+91 9428875036</span>
                                </div>
                            </a>
                        </div>

                        {/* Mobile Hamburger Open Button */}
                        <button
                            className="lg:hidden relative z-40 text-navy p-2 hover:text-red transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </header>
                </div>
            </div>

            {/* Mobile Offcanvas Menu (z-[100] to cover everything) */}
            <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* Offcanvas Top Bar (Logo + Close Button) */}
                <div className="flex items-center justify-between px-6 py-8">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src={`${path}images/logo-hridansh.png`}
                            alt="Hridansh Hospital"
                            width={160}
                            height={55}
                            className="object-contain"
                        />
                    </Link>
                    <button
                        className="text-navy p-2 hover:text-red transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Offcanvas Links & CTA (Aligned properly below logo) */}
                <div className="flex flex-col items-start px-8 gap-5 mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-navy text-base font-heading font-bold hover:text-red transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a href="tel:+919428875036" className="mt-6 flex items-center gap-4 text-navy">
                        <div className="bg-red p-3 rounded-full text-white shadow-md">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-medium opacity-70">Call Anytime</span>
                            <span className="text-xl font-bold">+91 9428875036</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}