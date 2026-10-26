"use client";
import { useState, useEffect } from "react";
export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-navy text-white shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:bg-[#ee3139] hover:-translate-y-1 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`} aria-label="Back to top">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
        </button>
    );
}