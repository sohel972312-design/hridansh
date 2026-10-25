"use client";
import React, { useState } from "react";
import Image from "next/image";
import { path } from "@/utils/path";
import Link from "next/link";
import SectionHeading from "@/components/UI/SectionHeading";
export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dummy data for 4-column masonry layout (Mixed text and video cards)
    // 4-Column Masonry ke liye ordered data
    const testimonials = [
        // Column 1: Video upar, Text niche
        {
            id: 1,
            type: "video",
            image: "Bg.jpg",
        },
        {
            id: 2,
            type: "text",
            name: "Esther Howard",
            role: "Operations Manager",
            avatar: "Testi-1.jpg",
            text: "Always available to answer our questions. Thanks to their dedication and advanced fertility care, our dream of becoming parents",
        },

        // Column 2: Text upar, Video niche
        {
            id: 3,
            type: "text",
            name: "Brittni Lando",
            role: "Senior Manager",
            avatar: "Testi-2.jpg",
            text: "Always available to answer our questions. Thanks to their dedication and advanced fertility care, our dream of becoming parents",
        },
        {
            id: 4,
            type: "video",
            image: "Bg2.jpg",
        },

        // Column 3: Video upar, Text niche
        {
            id: 5,
            type: "video",
            image: "Bg-3.jpg",
        },
        {
            id: 6,
            type: "text",
            name: "Tynisha Obey",
            role: "Business Owner",
            avatar: "Testi-3.jpg",
            text: "Always available to answer our questions. Thanks to their dedication and advanced fertility care, our dream of becoming parents",
        },

        // Column 4: Text upar, Video niche
        {
            id: 7,
            type: "text",
            name: "Ralph Edwards",
            role: "Marketing Head",
            avatar: "Testi-1.jpg",
            text: "Always available to answer our questions. Thanks to their dedication and advanced fertility care, our dream of becoming parents",
        },
        {
            id: 8,
            type: "video",
            image: "video-bg.jpg",
        },
    ];

    // Reusable Star SVG
    const RatingStars = () => (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    return (
        <section className="relative    bg-red/7   overflow-hidden">
            {/* Hexagon Background Pattern (Optional CSS Pattern) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.923\' viewBox=\'0 0 60 103.923\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23d1d5db\' stroke-width=\'1\'%3E%3Cpath d=\'M30 103.923L0 86.603V51.962l30-17.32 30 17.32v34.641zM30 51.962L0 34.641V0l30-17.32 30 17.32v34.641z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            {/* Top Right Decorative SVG Pattern */}
            <div className="absolute top-0 right-0 opacity-40 pointer-events-none w-64 h-64">
                <svg viewBox="0 0 200 200" fill="none" stroke="#E99894" strokeWidth="1" strokeOpacity="0.5">
                    <path d="M150,0 Q180,50 200,80" />
                    <circle cx="160" cy="40" r="4" />
                    <path d="M120,-20 Q160,60 220,100" />
                    <circle cx="180" cy="80" r="6" />
                </svg>
            </div>

            <div className="new-container ">

                {/* Header Section */}
                <div className=" ">




                    <SectionHeading
                        badgeText="Testimonials"
                        title={
                            <>
                                That showcase excellence in IVF <br className="hidden lg:block" />
                            </>
                        }
                        highlightText=" and fertility treatment"
                        align="center"
                    />






                </div>

                {/* 4-Column Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
                    {testimonials.map((item) => (
                        <div key={item.id} className="break-inside-avoid block">

                            {item.type === "text" ? (
                                /* Text Card */
                                <div className="bg-white rounded-4xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full">

                                    {/* Giant Quote Icon */}
                                    <div className="absolute top-6 right-8 opacity-[0.04] pointer-events-none">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>

                                    <div className="relative z-10">
                                        <RatingStars />
                                        <p className="text-gray-600 text-sm leading-[1.8] mt-6 mb-8 font-medium">
                                            {item.text}
                                        </p>

                                        <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                                {/* <Image src={`${path}images/${item.avatar}`} alt={item.name} fill className="object-cover" /> */
                                                    <Image src={`${path}images/${item.avatar || ""}`} alt={item.name || "User Avatar"} fill className="object-cover" />}
                                            </div>
                                            <div>
                                                <h4 className="text-navy font-bold text-lg font-heading">{item.name}</h4>
                                                <p className="text-gray-400 text-xs md:text-sm">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Video Card */
                                <div
                                    className="relative rounded-4xl overflow-hidden w-full h-95 md:h-105 group shadow-sm hover:shadow-lg transition-all cursor-pointer"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <Image src={`${path}images/${item.image}`} alt="Video Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white " fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Link Area */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
                    {/* Small Avatars Stack */}
                    <div className="flex -space-x-3">
                        <div className="relative w-8 h-8 rounded-full border-2 border-[#FDF8F9] overflow-hidden z-20"><Image src={`${path}images/Testi-1.jpg`} alt="user" fill className="object-cover" /></div>
                        <div className="relative w-8 h-8 rounded-full border-2 border-[#FDF8F9] overflow-hidden z-10"><Image src={`${path}images/Testi-2.jpg`} alt="user" fill className="object-cover" /></div>
                    </div>
                    <p className="text-gray-500 text-sm text-center md:text-sm font-medium m-0">
                        let's make something great work together.{" "}
                        <Link href="/services" className="text-navy font-medium underline hover:text-red transition-colors ml-2 inline-flex items-center gap-1">
                            All Testimonials
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </p>

                </div>

            </div>

            {/* Video Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[3px] p-4 transition-all duration-300">

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

                        {/* YouTube iFrame */}
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