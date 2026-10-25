"use client";
import Image from "next/image";
import Link from "next/link";
import { path } from "@/utils/path";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeading from "@/components/UI/SectionHeading";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
    const services = [
        {
            title: "Obstetrics & Gynaecology",
            image: "serv4.jpg",
        },
        {
            title: "Gynaecology",
            image: "Service-7-300x200.jpg",
        },
        {
            title: "Orthopaedics",
            image: "Service-5.jpg",
        },
        {
            title: "Fertility Health Assessment",
            image: "Service-6.jpg",
        },

    ];

    const bullets = [
        "Pregnancy Monitoring Services",
        "Comprehensive Fertility Care",
        "Reproductive Medicine Experts",
        "Infertility Treatment Solutions"
    ];

    return (
        <section className="relative    bg-red/7   overflow-hidden">
            {/* Hexagon Background Pattern (Optional CSS Pattern) */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.923\' viewBox=\'0 0 60 103.923\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\' stroke=\'%23d1d5db\' stroke-width=\'1\'%3E%3Cpath d=\'M30 103.923L0 86.603V51.962l30-17.32 30 17.32v34.641zM30 51.962L0 34.641V0l30-17.32 30 17.32v34.641z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="new-container relative z-10  ">
                {/* Header Section */}
                <SectionHeading
                    badgeText="Services"
                    title="Complete IVF and fertility services"
                    highlightText="under one roof"
                    className="mb-8" // Container ka bottom margin kam karne ke liye
                    badgeClassName="bg-red/10 border-red/20" // Badge ka background change karne ke liye
                    titleClassName="text-3xl md:text-4xl" // Title ka size chhota karne ke liye
                />

                {/* Swiper Slider */}
                <div className="w-full  ">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="pb-12!"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                {/* Card Wrapper - Includes Hover State Logic */}
                                <div className="group relative w-full h-full pt-4 pr-4 cursor-pointer">

                                    {/* The + Button positioned top right */}
                                    <div className="absolute top-0 right-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl z-20 transition-colors duration-300 bg-red/40 group-hover:bg-navy">
                                        +
                                    </div>

                                    {/* Main Card with CSS Mask for exact cutout */}
                                    <div
                                        className="h-full bg-white group-hover:bg-navy transition-colors duration-500 rounded-4xl p-6 flex flex-col border border-gray-100 group-hover:border-navy shadow-lg"
                                        style={{
                                            WebkitMaskImage: 'radial-gradient(circle 42px at top right, transparent 42px, black 43px)',
                                            maskImage: 'radial-gradient(circle 42px at top right, transparent 42px, black 43px)'
                                        }}
                                    >
                                        <h3 className="font-heading text-navy group-hover:text-white font-bold text-lg mb-6 pr-12 transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6">
                                            <Image
                                                src={`${path}images/${service.image}`}
                                                alt={service.title}
                                                fill
                                                quality={100}
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        <ul className="flex flex-col gap-3 mb-3">
                                            {bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red/50 group-hover:bg-white shrink-0"></span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto pt-4 flex items-center justify-between transition-colors duration-300">
                                            {/* Line */}
                                            <span className="grow h-px bg-gray-300 group-hover:bg-white/40 transition-colors duration-300 mr-3"></span>

                                            {/* Text */}
                                            <span className="text-xs font-bold text-navy group-hover:text-white uppercase tracking-wider transition-colors duration-300 whitespace-nowrap">
                                                More
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Footer Link */}
                <div className="flex flex-col md:flex-row shadow items-center justify-center gap-4 text-center   bg-white max-w-fit pe-5 ps-2 py-2 mx-auto rounded-full">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white shadow-md">
                        <Image src={`${path}images/logo-hridansh-1.png`} alt="Logo" width={50} height={50} />
                    </div>
                    <p className="text-gray-500 text-sm md:text-sm font-medium m-0">
                        We strive to lead the way in the caring Hospital.
                        <Link href="/services" className="text-navy font-medium underline hover:text-red transition-colors ml-2 inline-flex items-center gap-1">
                            Know All Services
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}