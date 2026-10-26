import React, { ReactNode } from "react";

interface SectionHeadingProps {
    badgeText?: string;
    title: ReactNode;
    highlightText?: ReactNode;
    align?: "left" | "center" | "right";
    className?: string;           // Main container wrapper ke liye
    badgeClassName?: string;      // Badge div ke liye
    titleClassName?: string;      // Main title (Navy) ke liye
    highlightClassName?: string;  // Highlight text (Red) ke liye
}

export default function SectionHeading({
    badgeText,
    title,
    highlightText,
    align = "center",
    className = "",
    badgeClassName = "",
    titleClassName = "",
    highlightClassName = "",
}: SectionHeadingProps) {
    const alignStyles = {
        left: "text-left items-start mr-auto",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    return (
        <div className={`max-w-3xl flex flex-col mb-10 xl:mb-16 ${alignStyles[align]} ${className}`}>
            {badgeText && (
                <div className={`inline-flex items-center gap-2 bg-red/5 border border-red/10 px-4 py-1.5 rounded-full mb-4 ${badgeClassName}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-red"></span>
                    <span className="text-red font-medium text-sm tracking-wide">{badgeText}</span>
                </div>
            )}

            <h2 className={`font-heading text-navy text-3xl lg:text-4xl  font-bold leading-tight ${titleClassName}`}>
                {title}
                {highlightText && (
                    <span className={`text-red ${highlightClassName}`}> {highlightText}</span>
                )}
            </h2>
        </div>
    );
}