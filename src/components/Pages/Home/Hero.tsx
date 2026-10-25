import Image from "next/image";
import { path } from "@/utils/path";

export default function Hero() {
    return (
        <div className="relative w-full h-auto flex items-center pt-24 md:pt-40 xl:pt-52 overflow-hidden">
            {/* Background Video Section */}
            <div className="absolute inset-0 h-full w-full bg-navy">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover object-center h-full w-full"
                >
                    {/* Apne video ka sahi path yaha dalein. Example: `${path}videos/hero-bg.mp4` */}
                    <source src={`${path}images/0_Doctor_Pregnant_Woman_1280x720.mp4`} type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(at_center_center,_#44305600_0%,_#ffffff_100%)]"></div>

            <div className="new-container relative z-10 w-full h-full flex flex-col justify-center pb-18 xl:pb-24">

                <div className="max-w-4xl lg:text-left text-center text-navy mt-12 md:mt-0">
                    <h1 className="font-heading text-3xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-8">
                        Your Trusted Center for <br className="hidden md:block" /> <span className="text-red"> Women & Orthopaedic Care</span>
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-8 mt-2 lg:mt-24 xl:mt-40">

                    <div className=" ">
                        <p className="text-sm lg:text-base lg:text-left text-center relative text-navy z-10 font-medium   xl:text-xl leading-relaxed">
                            Compassionate Obstetrics, advanced Gynecology, and modern Orthopedic <br className="xl:block hidden" />careprovided by experienced specialists in a warm, supportive environment.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-2xl max-w-sm w-full md:w-auto relative z-20">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-pink-100 shrink-0">
                            <Image src={`${path}images/mayurkumar.png`} alt="Dr. Mayurkumar H. Limbani" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-heading text-navy text-md font-bold">Dr. Mayurkumar H. Limbani</h3>
                            <p className="text-gray-500 text-xs mb-2">M.B.B.S., DGO Consultant Obs & Gyn</p>
                            <button className="flex items-center gap-2 text-red font-bold text-sm hover:text-navy transition-colors">
                                Book Now
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-float hidden md:block z-0">
                    <Image src={`${path}images/item_01.png`} alt="Medical Stethoscope" width={120} height={120} className="object-contain drop-shadow-2xl" />
                </div>

                <div className="absolute right-12 top-1/4 animate-spin-slow hidden md:block z-0">
                    <Image src={`${path}images/Shape.png`} alt="Fertility Symbol" width={150} height={150} className="object-contain opacity-90 invert-100" />
                </div>
            </div>
        </div>
    );
}