import Image from "next/image";
import { path } from "@/utils/path";
import Button from '@/components/UI/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from "@/components/UI/SectionHeading";
export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div className="new-container  ">
                <div className="grid grid-cols-1 lg:grid-cols-12  gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image Gallery Grid */}
                    <div className="relative w-full md:aspect-square col-span-1 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-1 h-78 md:h-auto flex gap-4 lg:gap-6 ">
                        {/* Left Tall Image */}
                        <div className="relative w-1/2 h-full lg:h-10/12 m-auto rounded-[2rem] overflow-hidden shadow-lg">
                            <Image
                                src={`${path}images/About-1.jpg`}
                                alt="Pregnant woman smiling"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Stacked Images */}
                        <div className="relative w-1/2 h-full flex flex-col gap-4 xl:gap-6">
                            <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-lg">
                                <Image
                                    src={`${path}images/About-2.jpg`}
                                    alt="Couple holding baby feet"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-lg">
                                <Image
                                    src={`${path}images/About-3.jpg`}
                                    alt="Couple listening to belly"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Center Floating Circular Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48  backdrop-blur-[.34rem] rounded-full flex items-center justify-center border border-white/40 shadow-2xl z-20">
                            {/* Rotating Text (SVG) */}
                            <div className="absolute inset-0 animate-spin-slow">
                                <svg viewBox="0 0 100 100" className="w-full h-full p-2 text-white fill-current font-bold   uppercase tracking-[0.2em]">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            25+ YEARS OF EXPERIENCE • 25+ YEARS OF EXPERIENCE •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            {/* Center Icon Image (Static) */}
                            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-inner z-30">
                                <Image
                                    src={`${path}images/logo-hridansh-1.png`}
                                    alt="Hridansh Icon"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col w-full col-span-1 lg:col-span-12 xl:col-span-6">
                        {/* Section Subtitle */}


                        {/* Heading */}
                        <SectionHeading
                            badgeText="About Us"
                            title={
                                <>
                                    A Hospital Built on <br className="hidden lg:block" />
                                </>
                            }
                            highlightText="Compassion & Expertise"
                            align="left"
                            className="mb-6!"
                        />
                        {/* Description */}
                        <p className="">


                            At Hridansh Hospital, we believe that healthcare is not just about treatment — it’s about compassion, comfort, and trust. Built with a commitment to women’s health, maternity care, and advanced orthopedic services, we aim to deliver exceptional medical care backed by modern technology and a warm, supportive environment.
                        </p>
                        <p className="">

                            Our team of highly experienced Obstetricians, Gynecologists, Orthopedic surgeons, and dedicated nursing staff work together to ensure every patient receives personalized attention.
                        </p>  <p className="">

                            Whether it’s guiding an expecting mother through her pregnancy journey, caring for women’s reproductive health, or providing expert treatment for bones and joints, we put your well-being at the center of everything we do.
                        </p><hr className="border-gray-200 mb-8" />

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 shrink-0 rounded-full bg-red/5 flex items-center justify-center border border-red/10 text-red text-2xl hover:bg-navy hover:text-white transition-colors duration-300">
                                    {/* <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      
                                        <path d="M7 16c-1.5 0-3-1.5-4-3 0-2 2.5-4 5-2.5 1-1 2.5-1 4 0 1-1 2.5-1 4 0 2.5-1.5 5 .5 5 2.5 0 1.5-1.5 3-4 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 21c-4-3-8-6-8-9 0-2.5 2-4.5 4.5-4.5 1.5 0 2.8.8 3.5 2 .7-1.2 2-2 3.5-2 2.5 0 4.5 2 4.5 4.5 0 3-4 6-8 9z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" fill="currentColor" />
                                      
                                        <path d="M12 14c-1.5 0-2-1-2-2 0-1.5 1.5-2 2-2s2 .5 2 2c0 1-.5 2-2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
                                    </svg> */}
                                    <Image
                                        src={`${path}images/Family-Focused.svg`}
                                        alt="Pregnant woman smiling"
                                        height={200}
                                        width={200}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-navy font-heading font-bold text-lg mb-1">Family Focused</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">We create a welcoming environment</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 shrink-0 rounded-full bg-red/5 flex items-center justify-center border border-red/10 text-red text-2xl hover:bg-red hover:text-white transition-colors duration-300">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        {/* Microscope Base & Arm */}
                                        <path d="M6 19h12M8 19v-2c0-1 1-2 2-2h4c1 0 2 1 2 2v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 15c2.5 0 4-1.5 4-4V6c0-1.5-1-2.5-2.5-2.5H14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        {/* Lens Tube */}
                                        <path d="M10 11l-3-3 2-2 3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 12l2-2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="11" cy="14" r="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" fill="currentColor" />
                                        {/* Lab Details (DNA/Cells) */}
                                        <circle cx="18" cy="9" r="1" fill="currentColor" stroke="none" />
                                        <circle cx="19" cy="12" r="1.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-navy font-heading font-bold text-lg mb-1">Ethical Practices</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">We ensure safe and trusted care</p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-10" />

                        {/* Action Buttons */}
                        <div className="flex flex-wrap md:flex-row items-center gap-6 md:gap-10">
                            {/* Primary Button */}

                            <Button
                                variant="red"
                                iconPosition="right"
                                icon={<ArrowRight size={20} />}
                            >

                                About More

                            </Button>
                            {/* Contact Info */}
                            <div className="flex items-center gap-4 md:border-l md:border-gray-200   md:pl-10">
                                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xl shadow-md">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 9C22 5.13 18.87 2 15 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs font-medium">Contact Us:</span>
                                    <a href="tel:+919428875036" className="text-navy font-heading font-bold text-lg md:text-xl hover:text-red transition-colors">
                                        +91 9428875036
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
} 