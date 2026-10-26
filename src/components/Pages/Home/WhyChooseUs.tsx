import Image from "next/image";
import { path } from "@/utils/path";
import SectionHeading from "@/components/UI/SectionHeading";
import Button from "@/components/UI/Button";
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        {
            title: "Modern Fertility Solutions",
            icon: (
                <svg className="w-6 h-6 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 19h12M8 19v-2c0-1 1-2 2-2h4c1 0 2 1 2 2v2M14 15c2.5 0 4-1.5 4-4V6c0-1.5-1-2.5-2.5-2.5H14M10 11l-3-3 2-2 3 3M9 12l2-2" />
                    <circle cx="11" cy="14" r="2" strokeWidth={1.5} opacity={0.3} fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Patient First Philosophy",
            icon: (
                <svg className="w-6 h-6 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 8v6M16 11h6" />
                </svg>
            )
        },
        {
            title: "Holistic Fertility Support",
            icon: (
                <svg className="w-6 h-6 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v-4m-2 2h4" opacity={0.5} />
                </svg>
            )
        },
        {
            title: "Cutting Edge Technology",
            icon: (
                <svg className="w-6 h-6 text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative overflow-hidden">
            <div className="new-container relative z-10  xl:max-w-8/12">

                {/* Heading Section */}
                <div className="flex flex-col items-center text-center   md:mb-16">
                    <SectionHeading
                        badgeText="Why Choose Us"
                        title={
                            <>
                                Why families trust our expertise <br className="hidden lg:block" />
                            </>
                        }
                        highlightText="for their fertility"
                        align="center"
                    />

                </div>

                <div className="relative w-full mx-auto flex flex-col">
                    {/* Top Features Grid */}
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-30  ">
                        <div className="flex flex-col gap-4 lg:gap-6 items-end w-full flex-1">
                            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 py-2 px-2 rounded-full w-full lg:w-80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-red/5 flex items-center justify-center shrink-0">
                                    {features[0].icon}
                                </div>
                                <span className="text-navy font-bold text-sm md:text-base">{features[0].title}</span>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 py-2 px-2 rounded-full w-full lg:w-80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-red/5 flex items-center justify-center shrink-0">
                                    {features[1].icon}
                                </div>
                                <span className="text-navy font-bold text-sm md:text-base">{features[1].title}</span>
                            </div>
                        </div>

                        <div className="hidden lg:block w-72 xl:w-96 shrink-0"></div>

                        <div className="flex flex-col gap-4 lg:gap-6 items-start w-full flex-1 mt-4 lg:mt-0">
                            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 py-2 px-2 rounded-full w-full lg:w-80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-red/5 flex items-center justify-center shrink-0">
                                    {features[2].icon}
                                </div>
                                <span className="text-navy font-bold text-sm md:text-base">{features[2].title}</span>
                            </div>
                            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 py-2 px-2 rounded-full w-full lg:w-80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-red/5 flex items-center justify-center shrink-0">
                                    {features[3].icon}
                                </div>
                                <span className="text-navy font-bold text-sm md:text-base">{features[3].title}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Banner - Flexbox Layout */}
                    <div className="relative bg-navy rounded-3xl w-full mt-12   flex flex-col lg:flex-row items-end justify-between   shadow-2xl pt-12 lg:pt-0">

                        {/* Wavy Background Pattern */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="#ffffff" opacity="0.1" />
                                <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="#ffffff" opacity="0.05" />
                            </svg>
                        </div>

                        {/* BOX 1: 1500+ Stats */}
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center pt-0 lg:pt-12 p-6 lg:p-12 relative z-10 mb-8 lg:mb-0">
                            <div className="pt-8 pr-8 pb-8 pl-6 max-w-60 w-full bg-[rgba(255,255,255,0.06)] [-webkit-mask-image:url('/images/funfact2-1.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%] flex flex-col justify-center">
                                <svg className="w-8 h-8 text-red mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <h3 className="font-heading text-white text-5xl lg:text-4xl font-bold leading-none mb-3">
                                    1500+
                                </h3>
                                <p className="text-gray-300 text-sm lg:text-base font-medium leading-snug">
                                    Our Successful<br />Projects Done
                                </p>
                            </div>
                        </div>

                        {/* BOX 2: Doctor Image & White Half Circle */}
                        <div className="w-full lg:w-1/3 flex flex-col items-center   lg:mt-0 justify-end relative z-20">
                            {/* Red circle background for doctor */}
                            <div className="lg:absolute mb-20 lg:mb-0 lg:bottom-90 xl:bottom-50 w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-red/70 -z-10"></div>

                            {/* Doctor Image */}
                            <div className="absolute  w-full flex justify-center lg:w-96 mt-0 bottom-12 lg:bottom-0 lg:mt-0">
                                <Image
                                    src={`${path}images/Doctor.png`}
                                    alt="Doctor Pointing Up"
                                    width={450}
                                    height={450}
                                    className="w-auto h-87  lg:h-auto lg:w-96 object-bottom"
                                />
                            </div>

                            {/* White Bottom Arch Button */}
                            <div className="w-80 md:w-80 lg:w-90 relative h-auto  flex items-center justify-center pt-2   z-10">
                                <img src="/images/Frame-2147207243.png" alt="half circle" width={100} height={100} className="absolute h-auto w-full lg:w-80  -z-10  bottom-0 left-1/2 -translate-x-1/2" />
                                {/*   <button className="flex items-center mb-6 gap-3 bg-red/60 text-white px-6 py-2.5 rounded-full font-bold hover:bg-navy transition-colors group shadow-lg">
                                    <span className="text-sm">Discover More</span>
                                    <span className="bg-white text-red/60 w-7 h-7 rounded-full flex items-center justify-center group-hover:text-navy transition-colors shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 19L20 5m0 0H9m11 0v11" />
                                        </svg>
                                    </span>
                                </button> */}

                                <div className=" mb-4 lg:mb-4 xl:mb-4">

                                    <Button
                                        variant="red"
                                        iconPosition="right"
                                        icon={<ArrowRight size={20} />}
                                    >

                                        Discover More

                                    </Button>
                                </div>




                            </div>
                        </div>

                        {/* BOX 3: Baby Image (Hidden on Mobile) */}
                        <div className="hidden  lg:flex w-1/3 justify-end items-center p-6 lg:p-12 relative z-10">
                            <Image
                                src={`${path}images/Baby.png`}
                                alt="Sleeping baby"
                                width={250}
                                height={250}
                                className="object-contain absolute right-0 bottom-0"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}