"use client";
import Image from "next/image";
import Link from "next/link";
import { path } from "@/utils/path";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionHeading from "@/components/UI/SectionHeading";

export default function Leadership() {
    const [isMounted, setIsMounted] = useState(false);
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const team = [
        {
            name: "Dr. Viral M. Patel",
            role: "M.B, D.N.B., (OBS & GYN)\nConsultant OBS & GYN\nGyn Laproscopic surgeon",
            image: "dr-viral-1.png",
        },
        {
            name: "Dr. Darshan Shah",
            role: "M.B.B.S., D-ortho, Consultant orthopaedic & joint replacement surgeon",
            image: "dr-darshan.png",
        },
        {
            name: "Dr. Kartikey Mahendrakumar Roy",
            role: "M.B.B.S., DGO (obs & gyn) (At Nadiad)",
            image: "kartikey.png",
        },
        {
            name: "Dr. Mayurkumar H. Limbani",
            role: "M.B.B.S., DGO Consultant Obs & Gyn (At Petlad)",
            image: "mayurkumar.png",
        },
        {
            name: "Dr. Payal V. Patel",
            role: "M.B.B.S., DA, IDCCM Consultant Anaesthetist &Critical Care Specialist.",
            image: "payal_patel.png",
        },
        {
            name: "Dr. Viral M. Patel",
            role: "M.B, D.N.B., (OBS & GYN)\nConsultant OBS & GYN\nGyn Laproscopic surgeon",
            image: "dr-viral-1.png",
        },
        {
            name: "Dr. Darshan Shah",
            role: "M.B.B.S., D-ortho, Consultant orthopaedic & joint replacement surgeon",
            image: "dr-darshan.png",
        },
        {
            name: "Dr. Kartikey Mahendrakumar Roy",
            role: "M.B.B.S., DGO (obs & gyn) (At Nadiad)",
            image: "kartikey.png",
        },
        {
            name: "Dr. Mayurkumar H. Limbani",
            role: "M.B.B.S., DGO Consultant Obs & Gyn (At Petlad)",
            image: "mayurkumar.png",
        },
        {
            name: "Dr. Payal V. Patel",
            role: "M.B.B.S., DA, IDCCM Consultant Anaesthetist &Critical Care Specialist.",
            image: "payal_patel.png",
        },
    ];

    return (
        <section className="relative bg-white overflow-hidden">
            <div className="new-container">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="flex flex-col items-start">
                        <SectionHeading
                            badgeText="Our Leadership"
                            title={
                                <>
                                    Dedicated team creating <br className="hidden lg:block" />
                                </>
                            }
                            highlightText="new beginnings"
                            align="left"
                            className="mb-0!"
                        />
                    </div>
                    <div className="max-w-md border-l-2 border-gray-100 pl-6 py-1 lg:mb-2 border-4">
                        <p className="text-gray-500 text-sm md:text-sm leading-[1.8]">
                            Our IVF treatments use cutting-edge technology to help you on your journey to parenthood, with care tailored to your unique needs.
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    {isMounted ? (
                        <>
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={24}
                                slidesPerView={1}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                loop={true}
                                navigation={{
                                    prevEl: prevEl,
                                    nextEl: nextEl,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1280: { slidesPerView: 5 },
                                }}
                                className="pb-4!"
                            >
                                {team.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative group bg-[#f8f9fa] rounded-4xl h-95 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 cursor-pointer">
                                            <div className="absolute inset-0 opacity-40 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-20 50 Q 30 0 80 50 T 180 50\' fill=\'none\' stroke=\'%23e2e8f0\' stroke-width=\'1\'/%3E%3Cpath d=\'M-20 80 Q 30 30 80 80 T 180 80\' fill=\'none\' stroke=\'%23e2e8f0\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}>
                                            </div>
                                            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 group-hover:top-1/2 group-hover:w-full group-hover:h-full rounded-[30rem] group-hover:rounded-4xl border-4 border-white group-hover:border-0 shadow-lg group-hover:shadow-none transition-all duration-800 ease-in-out overflow-hidden z-10">
                                                <Image
                                                    src={`${path}images/${member.image}`}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-800 ease-in-out group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"></div>
                                            </div>
                                            <div className="absolute top-0 right-0 bg-white rounded-bl-3xl w-14 transition-all duration-500 h-14 group-hover:h-39 z-30 overflow-visible">
                                                <div className="absolute right-full top-0 w-5 h-5 bg-transparent rounded-tr-3xl shadow-[5px_-5px_0_5px_white] pointer-events-none"></div>
                                                <div className="absolute top-full right-0 w-5 h-5 bg-transparent rounded-tr-3xl shadow-[5px_-5px_0_5px_white] pointer-events-none"></div>
                                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 h-14">
                                                    <div className="w-9 h-9 rounded-full bg-[#f8f9fa] flex items-center justify-center text-navy shadow-sm cursor-pointer">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-start pt-3 gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    <Link href="#" className="w-9 h-9 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-navy hover:text-white hover:shadow-md hover:scale-110 transition-transform">
                                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                                                        </svg>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 rounded-full bg-[#f8f9fa] text-navy flex items-center justify-center hover:scale-110 transition-transform hover:bg-gray-100">
                                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                        </svg>
                                                    </Link>
                                                    <Link href="#" className="w-9 h-9 rounded-full bg-[#f8f9fa] text-navy flex items-center justify-center hover:scale-110 transition-transform hover:bg-gray-100">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transition-colors duration-500">
                                                <h4 className="font-heading font-bold text-lg text-navy group-hover:text-white transition-colors duration-500 mb-0.5 whitespace-pre-line">
                                                    {member.name}
                                                </h4>
                                                <p className="text-gray-500 text-sm md:text-sm group-hover:text-gray-300 transition-colors duration-500 whitespace-pre-line">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="flex items-center justify-center gap-4 mt-6">
                                <button
                                    ref={setPrevEl}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 shadow-sm z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    ref={setNextEl}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 shadow-sm z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="min-h-95 w-full bg-gray-50 animate-pulse rounded-4xl"></div>
                    )}
                </div>
            </div>
        </section>
    );
}