
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { path } from "@/utils/path";
import SectionHeading from "@/components/UI/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

type Testimonial =
    | {
        id: number;
        type: "video";
        image: string;
    }
    | {
        id: number;
        type: "text";
        name: string;
        role: string;
        avatar: string;
        text: string;
    };

export default function Testimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    const testimonials: Testimonial[] = [
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

    const openVideo = () => {
        setActiveVideo("dQw4w9WgXcQ");
        setIsModalOpen(true);
    };

    const closeVideo = () => {
        setIsModalOpen(false);
        setActiveVideo(null);
    };

    const RatingStars = () => (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="h-4 w-4 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 1.118-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    const TextCard = ({ item }: { item: Extract<Testimonial, { type: "text" }> }) => (
        <div className="relative h-full overflow-hidden rounded-4xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:p-10">
            <div className="pointer-events-none absolute right-8 top-6 opacity-[0.04]">
                <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>

            <div className="relative z-10">
                <RatingStars />

                <p className="mb-8 mt-6 text-sm font-medium leading-[1.8] text-gray-600">
                    {item.text}
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                        <Image
                            src={`${path}images/${item.avatar}`}
                            alt={item.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h4 className="font-heading text-lg font-bold text-navy">
                            {item.name}
                        </h4>
                        <p className="text-xs text-gray-400 md:text-sm">
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const VideoCard = ({ image }: { image: string }) => (
        <button
            type="button"
            onClick={openVideo}
            aria-label="Play testimonial video"
            className="group relative block h-95 w-full cursor-pointer overflow-hidden rounded-4xl text-left shadow-sm transition-shadow hover:shadow-lg md:h-105"
        >
            <Image
                src={`${path}images/${image}`}
                alt="Video testimonial thumbnail"
                fill
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-500 group-hover:bg-black/20">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </span>
        </button>
    );

    const TestimonialCard = ({ item }: { item: Testimonial }) =>
        item.type === "text" ? (
            <TextCard item={item} />
        ) : (
            <VideoCard image={item.image} />
        );

    return (
        <section className="relative overflow-hidden bg-red/7">
            <div
                className="pointer-events-none absolute inset-0 opacity-30"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.923\' viewBox=\'0 0 60 103.923\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23d1d5db\' stroke-width=\'1\'%3E%3Cpath d=\'M30 103.923L0 86.603V51.962l30-17.32 30 17.32v34.641zM30 51.962L0 34.641V0l30-17.32 30 17.32v34.641z\'/%3E%3C/g%3E%3C/svg%3E")',
                }}
            />

            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-40" aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" stroke="#E99894" strokeWidth="1" strokeOpacity="0.5">
                    <path d="M150,0 Q180,50 200,80" />
                    <circle cx="160" cy="40" r="4" />
                    <path d="M120,-20 Q160,60 220,100" />
                    <circle cx="180" cy="80" r="6" />
                </svg>
            </div>

            <div className="new-container relative">
                <div className="mb-10 lg:mb-16">
                    <SectionHeading
                        badgeText="Testimonials"
                        title={
                            <>
                                That showcase excellence in IVF{" "}
                                <br className="hidden lg:block" />
                            </>
                        }
                        highlightText=" and fertility treatment"
                        align="center"
                    />
                </div>

                {/* Mobile and tablet: Swiper */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop={false}
                        navigation={false}
                        breakpoints={{
                            480: { slidesPerView: 1.2, spaceBetween: 16 },
                            640: { slidesPerView: 2, spaceBetween: 24 },
                        }}
                        className="testimonials-swiper !overflow-hidden !pb-2"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="!h-auto">
                                <TestimonialCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous testimonials"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="Next testimonials"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop: keep the existing masonry layout */}
                <div className="hidden columns-1 gap-6 space-y-6 sm:columns-2 lg:block lg:columns-4">
                    {testimonials.map((item) => (
                        <div key={item.id} className="mb-6 break-inside-avoid">
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:mt-16">
                    <div className="flex -space-x-3">
                        <div className="relative z-20 h-8 w-8 overflow-hidden rounded-full border-2 border-[#FDF8F9]">
                            <Image src={`${path}images/Testi-1.jpg`} alt="" fill sizes="32px" className="object-cover" />
                        </div>
                        <div className="relative z-10 h-8 w-8 overflow-hidden rounded-full border-2 border-[#FDF8F9]">
                            <Image src={`${path}images/Testi-2.jpg`} alt="" fill sizes="32px" className="object-cover" />
                        </div>
                    </div>

                    <p className="m-0 text-center text-sm font-medium text-gray-500">
                        Let&apos;s make something great work together.{" "}
                        <Link
                            href="/services"
                            className="ml-2 inline-flex items-center gap-1 font-medium text-navy underline transition-colors hover:text-red"
                        >
                            All Testimonials
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>

            {isModalOpen && activeVideo && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={closeVideo}
                    role="presentation"
                >
                    <div
                        className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Testimonial video"
                    >
                        <button
                            type="button"
                            onClick={closeVideo}
                            aria-label="Close video"
                            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>

                        <iframe
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="Testimonial video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
} 