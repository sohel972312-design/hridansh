"use client";
import React, { useState } from "react";
import Image from "next/image";
import { path } from "@/utils/path";
import SectionHeading from "@/components/UI/SectionHeading";

export default function VideoSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bottomLinks = [
        "Fertility Solutions",
        "Healthy Families",
        "Patient Focused",
        "Life Changing",
    ];

    return (
        <section className="relative pt-0! bg-white">
            <div className="new-container  ">

                {/* Main Video Banner Container */}
                <div className="relative w-full h-auto pt-12 lg:pt-0 lg:h-125 xl:h-140 md:h-150 rounded-4xl overflow-hidden shadow-2xl group">

                    {/* Background Image */}
                    {/* Note: Update 'video-bg.jpg' with your actual image filename */}
                    <Image
                        src={`${path}images/Video-Bg.jpg`}
                        alt="IVF Care Background"
                        fill
                        className="object-cover"
                    />

                    {/* Dark/Gradient Overlay for text readability */}
                    {/* <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40"></div> */}

                    {/* Center Content */}
                    <div className="lg:absolute inset-0 flex flex-col items-center justify-center px-6">

                        {/* Rotating Play Button Group */}
                        <div
                            className="relative w-40 h-40 md:w-44 md:h-44 rounded-full bg-red/50 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {/* SVG Rotating Text */}
                            <svg
                                viewBox="0 0 100 100"
                                className="absolute inset-0 w-full h-full animate-spin-slow"
                            >
                                <path
                                    id="textPath"
                                    d="M 50, 12 A 38 38 0 1 1 49.9 12"
                                    fill="none"
                                />
                                <text fill="white" fontSize="9.5" fontWeight="bold" letterSpacing="0.12em" className="uppercase font-sans">
                                    <textPath href="#textPath" startOffset="0%">
                                        WATCH THE VIDEO • WATCH THE VIDEO •
                                    </textPath>
                                </text>
                            </svg>

                            {/* Inner Solid White Play Button */}
                            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-navy " fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Heading Text */}

                        <SectionHeading
                            badgeText=""
                            badgeClassName=""
                            title={
                                <>
                                    Discover Advanced IVF Care With <br className="hidden md:block" />
                                </>
                            }
                            titleClassName="text-white"
                            highlightText="Compassionate Medical"
                            highlightClassName="text-white"
                            className="mb-6! mt-10 z-10 relative "
                        />

                        {/* <h2 className="mt-8 text-center text-white text-2xl md:text-4xl lg:text-[40px] font-bold font-heading leading-snug max-w-2xl drop-shadow-md">
                            Discover Advanced IVF Care With <br className="hidden md:block" /> Compassionate Medical
                        </h2> */}
                    </div>

                    {/* Bottom Links Bar */}
                    <div className="lg:absolute relative bottom-0 left-0 w-full px-8 md:px-16 py-6">
                        <div className="border-t border-white/20 pt-6 flex flex-col lg:flex-row flex-wrap md:flex-nowrap justify-between items-center gap-4">
                            {bottomLinks.map((link, index) => (
                                <div key={index} className="flex items-center gap-2 text-white font-medium text-sm md:text-base hover:text-[#E58B88] transition-colors cursor-pointer group/link">
                                    {/* Small Arrow Icon */}
                                    <svg
                                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/80 group-hover/link:text-[#E58B88] transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" />
                                    </svg>
                                    <span>{link}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 transition-all duration-300">

                    {/* Modal Content */}
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 animate-in fade-in zoom-in duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute -top-12 md:-top-16 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* YouTube iFrame (Replace 'YOUR_VIDEO_ID' with actual YouTube ID) */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Click outside to close area */}
                    <div
                        className="absolute inset-0 -z-10 cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                </div>
            )}
        </section>
    );
}