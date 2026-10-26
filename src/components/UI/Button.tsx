"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'red' | 'red_outline' | 'green' | 'green_outline' | 'navy' | 'navy_outline' | 'glass' | 'unset' | 'navydark';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    href?: string;
}

export default function Button({
    children,
    variant = 'navy',
    icon,
    iconPosition = 'left',
    href,
    className = '',
    ...props
}: ButtonProps & { className?: string }) {

    const baseStyle = "px-6 py-3 rounded-full transition-all duration-300 flex gap-2 items-center justify-center group relative overflow-hidden";

    const variants = {
        red: "bg-red-600 text-white font-medium text-base hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.6)] focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none",
        navydark: "bg-navydark text-white font-medium text-base hover:-translate-y-1 hover:bg-[#342e62] hover:shadow-[0_10px_20px_-10px_rgba(63,56,115,0.6)] focus-visible:ring-2 focus-visible:ring-navydark focus-visible:outline-none",
        red_outline: "bg-transparent border-2 border-red-600 text-red-600 font-medium text-base hover:bg-red-50 dark:hover:bg-red-900/20 hover:-translate-y-1",

        green: "bg-green-600 text-white font-medium text-base hover:-translate-y-1 hover:bg-green-700 hover:shadow-[0_10px_20px_-10px_rgba(22,163,74,0.6)] focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:outline-none",
        green_outline: "bg-transparent border-2 border-green-600 text-green-600 font-medium text-base hover:bg-green-50 dark:hover:bg-green-900/20 hover:-translate-y-1",

        navy: "bg-[#060922] text-white font-medium text-base hover:-translate-y-1 hover:bg-[#0a123a] hover:shadow-[0_10px_20px_-10px_rgba(6,9,34,0.6)] focus-visible:ring-2 focus-visible:ring-[#060922] focus-visible:outline-none",
        navy_outline: "bg-transparent border-2 border-[#060922] text-[#060922] dark:border-white dark:text-white font-medium text-base hover:bg-[#060922]/5 dark:hover:bg-white/10 hover:-translate-y-1",

        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] font-medium text-base",
        unset: "max-w-full px-4 py-2 transition-colors focus:outline-none break-words whitespace-normal text-center inline-flex flex-wrap items-center justify-center",
    };

    const disableIconHover = variant === 'unset';

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className={`transition-transform duration-300 ${disableIconHover ? '' : 'group-hover:-translate-x-1'}`}>
                    {icon}
                </span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
                <span className={`transition-transform duration-300 ${disableIconHover ? '' : 'group-hover:translate-x-1'}`}>
                    {icon}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyle} ${variants[variant]} ${className}`}
            >
                <span className="relative flex items-center gap-1 z-10 transition-transform duration-500 ease-out group-hover:scale-[0.98]">
                    {content}
                </span>
                <div className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-white/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative flex items-center gap-1 z-10 transition-transform duration-500 ease-out group-hover:scale-[0.98]">
                {content}
            </span>
            <div className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-white/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </button>
    );
}