import Image from "next/image";
import { path } from "@/utils/path";
import SectionHeading from "@/components/UI/SectionHeading";

export default function Process() {
    const steps = [
        {
            title: "Initial Consultation",
            desc: "Our patient assessment process is designed to evaluate",
            icon: (
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16c-1.5 0-3-1.5-4-3 0-2 2.5-4 5-2.5 1-1 2.5-1 4 0 1-1 2.5-1 4 0 2.5-1.5 5 .5 5 2.5 0 1.5-1.5 3-4 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14c-1.5 0-2-1-2-2 0-1.5 1.5-2 2-2s2 .5 2 2c0 1-.5 2-2 2z" />
                    <circle cx="12" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            title: "Health Monitoring",
            desc: "Our patient assessment process is designed to evaluate",
            icon: (
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 19h12M8 19v-2c0-1 1-2 2-2h4c1 0 2 1 2 2v2M14 15c2.5 0 4-1.5 4-4V6c0-1.5-1-2.5-2.5-2.5H14M10 11l-3-3 2-2 3 3M9 12l2-2" />
                    <circle cx="18" cy="9" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            title: "Fertility Assessment",
            desc: "Our patient assessment process is designed to evaluate",
            icon: (
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14h4l2-4 3 8 2-4h5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c-4.418 0-8 3.582-8 8" opacity={0.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12c0-4.418-3.582-8-8-8" opacity={0.5} />
                </svg>
            ),
        },
        {
            title: "Pregnancy Testing",
            desc: "Our patient assessment process is designed to evaluate",
            icon: (
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M12 9v6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 10V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 21l2-2 4 4" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative   overflow-hidden">





            <div className="new-container relative z-20 ">
                <section className="bg-navy relative rounded-2xl lg:rounded-4xl">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={`${path}images/bg.png`}
                            alt="Background pattern"
                            fill
                            className="object-cover opacity-2 "
                        />
                    </div>

                    {/* Top Left Rotating Image */}
                    <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10 w-32 h-32 md:w-48 md:h-48   pointer-events-none">
                        <Image
                            src={`${path}images/Vector-4.png`}
                            alt="Sperm graphic"
                            fill
                            className="object-contain animate-[spin_20s_linear_infinite]"
                        />
                    </div>

                    {/* Heading Component (Reusable) */}
                    <SectionHeading
                        badgeText="Working Process"
                        badgeClassName="bg-white/10 border-white/20 text-white"
                        title={
                            <>
                                Our proven fertility process <br className="hidden md:block" />
                            </>
                        }
                        titleClassName="text-white"
                        highlightText="focused on"
                        highlightClassName="text-red"
                        className="mb-20 z-10 relative "
                    />

                    {/* Zig-Zag Process Layout */}
                    <div className="flex  z-10 relative flex-wrap xl:flex-nowrap xl:flex-row items-center justify-between w-full max-w-6xl mx-auto   xl:gap-0  ">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center w-full md:w-1/2 xl:w-64  ">
                            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl hover:bg-white/10 transition-colors">
                                {steps[0].icon}
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-white text-xl mb-2">{steps[0].title}</h4>
                                <p className="text-gray-400 text-sm px-4">{steps[0].desc}</p>
                            </div>
                        </div>

                        {/* Arrow 1 (Pointing Up-Right) */}
                        <div className="hidden xl:block w-20 shrink-0">
                            <Image src={`${path}images/Vector-1.png`} alt="arrow" width={80} height={40} className="w-full object-contain -scale-y-100 -rotate-12 " />
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col-reverse xl:flex-col items-center text-center w-full md:w-1/2 xl:w-64  ">
                            <div>
                                <h4 className="font-heading font-semibold text-white text-xl mb-2">{steps[1].title}</h4>
                                <p className="text-gray-400 text-sm px-4 mb-6">{steps[1].desc}</p>
                            </div>
                            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl hover:bg-white/10 transition-colors">
                                {steps[1].icon}
                            </div>

                        </div>

                        {/* Arrow 2 (Pointing Down-Right) */}
                        <div className="hidden xl:block w-20 shrink-0 -mt-10">
                            <Image src={`${path}images/Vector-1.png`} alt="arrow" width={80} height={40} className="w-full object-contain rotate-12 " />
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center w-full md:w-1/2 xl:w-64  ">
                            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl hover:bg-white/10 transition-colors">
                                {steps[2].icon}
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-white text-xl mb-2">{steps[2].title}</h4>
                                <p className="text-gray-400 text-sm px-4">{steps[2].desc}</p>
                            </div>
                        </div>

                        {/* Arrow 3 (Pointing Up-Right) */}
                        <div className="hidden xl:block w-20 shrink-0 ">
                            <Image src={`${path}images/Vector-1.png`} alt="arrow" width={80} height={40} className="w-full object-contain -scale-y-100 -rotate-12 " />
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col-reverse xl:flex-col items-center text-center w-full md:w-1/2 xl:w-64  ">

                            <div>
                                <h4 className="font-heading font-semibold text-white text-xl mb-2">{steps[3].title}</h4>
                                <p className="text-gray-400 text-sm px-4 mb-6">{steps[3].desc}</p>
                            </div>
                            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl hover:bg-white/10 transition-colors">
                                {steps[3].icon}
                            </div>
                        </div>

                    </div>

                    {/* Footer Link Area */}
                    <div className="mt-10 pt-8  relative z-10 px-5 border-t border-white/10 text-center max-w-2xl mx-auto">


                        <p className="text-gray-500 text-sm font-medium">
                            let's make something great work together.{" "}
                            <a href="#" className="text-navy hover:text-[#E99894] font-bold transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-2">
                                All Testimonials
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </p>



                        <p className="text-gray-300 text-sm md:text-base  leading-relaxed mb-0">
                            Let’s turn these simple steps into stunning results. Contact us now to begin your outdoor transformation.{" "}
                            <a href="#" className="text-red font-semibold hover:text-white transition-colors inline-flex items-center gap-1  underline underline-offset-4 decoration-2">
                                Request a Quote  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}