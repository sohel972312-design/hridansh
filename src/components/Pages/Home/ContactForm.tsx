
"use client";
import { useState, FormEvent, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { path } from "@/utils/path";
gsap.registerPlugin(ScrollTrigger);
export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [minDate, setMinDate] = useState("");
    const imageRef = useRef<HTMLDivElement>(null);
    const imageTrackRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setMinDate(new Date().toISOString().split("T")[0]);
    }, []);
    useEffect(() => {
        if (!imageRef.current || !imageTrackRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageTrackRef.current,
                { xPercent: 6 },
                {
                    xPercent: -6,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                        invalidateOnRefresh: true
                    }
                }
            );
        }, imageRef);
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        return () => {
            window.removeEventListener("load", refresh);
            ctx.revert();
        };
    }, []);
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setLoading(true);
        setError("");
        setSuccess(false);
        const formData = new FormData(form);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            date: formData.get("date") as string,
            message: formData.get("message") as string
        };
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setSuccess(true);
                form.reset();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch {
            setError("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="bg-white">
            <div className="new-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div className="relative w-full min-h-96 lg:min-h-full rounded-3xl overflow-hidden shadow-lg group">
                        <div ref={imageRef} className="absolute inset-0 h-full overflow-hidden pointer-events-none z-0">
                            <div ref={imageTrackRef} className="absolute top-0 bottom-0 left-[-10%] h-full w-[120%] will-change-transform">
                                <Image
                                    src={`${path}images/bg10.jpg`}
                                    alt="Fertility Consultation"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 opacity-90 z-10" style={{ backgroundImage: "linear-gradient(to top, var(--color-navy), rgba(13, 92, 83, 0.4), transparent)" }}></div>
                        <div className="absolute bottom-0 left-0 p-10 md:p-14 z-20 w-full">
                            <h2 className="text-white text-4xl md:text-5xl font-heading font-medium leading-tight mb-8">Fertilys Questions<br />Answered.</h2>
                            <div>
                                <p className="text-white/80 text-sm font-medium mb-1">Drop Us Email</p>
                                <a href="mailto:hridansh.maternity.211@gmail.com" className="text-white text-lg md:text-xl font-medium hover:opacity-80 transition-opacity">hridansh.maternity.211@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full rounded-3xl p-10 md:p-14 overflow-hidden flex flex-col justify-center shadow-lg" style={{ backgroundColor: "var(--color-navy)" }}>
                        <div className="absolute inset-0 opacity-2 pointer-events-none" style={{ backgroundImage: `url(${path}images/bg.png)`, backgroundSize: "cover", backgroundRepeat: "repeat", backgroundPosition: "center" }}></div>
                        <div className="relative z-10">
                            {success ? (
                                <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Request Sent!</h3>
                                    <p className="text-white/80 mb-10 text-lg">Thank you! We have received your request and will call you shortly to confirm your appointment time.</p>
                                    <button type="button" onClick={() => setSuccess(false)} className="px-8 py-3 text-sm font-bold text-teal-900 uppercase tracking-widest bg-white rounded-full hover:bg-gray-100 transition-colors">Book Another</button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-12">
                                        <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full mb-6">
                                            <span className="w-2 h-2 rounded-full bg-white"></span>
                                            <span className="text-white font-medium text-xs md:text-sm tracking-wide">Contact Us</span>
                                        </div>
                                        <h2 className="font-heading text-white text-4xl md:text-5xl font-medium leading-tight">Book appointment today!</h2>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="relative">
                                                <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition-colors" placeholder="Full Name" />
                                                <label htmlFor="name" className="absolute left-0 -top-4 text-white/80 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">Full Name</label>
                                            </div>
                                            <div className="relative">
                                                <input type="tel" id="phone" name="phone" required className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition-colors" placeholder="Phone No" />
                                                <label htmlFor="phone" className="absolute left-0 -top-4 text-white/80 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:peer-focus:text-white">Phone No</label>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                                            <div className="relative">
                                                <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition-colors" placeholder="Email Address" />
                                                <label htmlFor="email" className="absolute left-0 -top-4 text-white/80 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">Email Address</label>
                                            </div>
                                            <div className="relative flex flex-col justify-end border-b border-white/20 focus-within:border-white transition-colors pb-1">
                                                <label htmlFor="date" className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-1">Preferred Date</label>
                                                <input type="date" id="date" name="date" min={minDate} required className="w-full bg-transparent px-0 py-1 text-white focus:ring-0 outline-none appearance-none cursor-pointer" style={{ colorScheme: "dark" }} />
                                            </div>
                                        </div>
                                        <div className="relative pt-4">
                                            <textarea id="message" name="message" rows={1} className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-white focus:ring-0 outline-none transition-colors resize-none overflow-hidden" placeholder="Your Message"></textarea>
                                            <label htmlFor="message" className="absolute left-0 -top-4 text-white/80 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white">Your Message</label>
                                        </div>
                                        {error && <p className="text-red-300 text-sm font-medium">{error}</p>}
                                        {/* <button type="submit" disabled={loading} className="w-full mt-10 px-8 py-4 text-sm font-bold text-white uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-center" style={{ backgroundColor: "#8ca39a" }}>{loading ? "SENDING MESSAGE..." : "SEND US MESSAGE"}</button> */}

                                        <Button
                                            type="submit"
                                            variant="navydark"
                                            disabled={loading}
                                            className="w-full mt-10 py-4 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? "SENDING MESSAGE..." : "SEND US MESSAGE"}
                                        </Button>

                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
