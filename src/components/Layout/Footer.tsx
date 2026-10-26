import Image from "next/image";
import Link from "next/link";
import { path } from "@/utils/path";
import CurrentYear from "@/components/UI/CurrentYear";
const quickLinks = [
    { name: "About Us", url: "https://hridanshhospital.com/hridansh/about-us/" },
    { name: "Facilities", url: "https://hridanshhospital.com/hridansh/facilities/" },
    { name: "Contact Us", url: "https://hridanshhospital.com/hridansh/contact-us/" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms & Condition", url: "#" }
];
const specialties = ["Obstetrics", "Gynecology", "Orthopedics"];
const locations = [
    {
        id: "anand",
        name: "Anand",
        address: <>1<sup>st</sup> & 2<sup>nd</sup> Floor, Shiv Orbit Domplex,<br />Nr. New Bus Station, Anand, 388001</>,
        phone: "+91 065 44027",
        phoneUrl: "tel:+9106544027",
        email: "hridansh.maternity.211@gmail.com"
    },
    {
        id: "petlad",
        name: "Petlad",
        address: <>1<sup>st</sup> Floor Shivay Arcade,<br />Near College Chokdi, Petlad - 388450</>,
        phone: "+91 065 44027",
        phoneUrl: "tel:+9106544027",
        email: "hridansh.maternity.211@gmail.com"
    },
    {
        id: "nadiad",
        name: "Nadiad",
        address: <>Desai Vago, Bhakti Nagar,<br />Nadiad, Gujarat 387001</>,
        phone: "+91 065 44027",
        phoneUrl: "tel:+9106544027",
        email: "hridansh.maternity.211@gmail.com"
    }
];

export default function Footer() {
    return (
        <footer className="relative w-full pt-14 pb-8  rounded-t-4xl shadow-2xl overflow-hidden bg-navy"  >
            <div className="absolute inset-0 z-0">
                <Image
                    src={`${path}images/bg.png`}
                    alt="Background pattern"
                    fill
                    className="object-cover opacity-2 "
                />
            </div>


            <div className="relative z-10 new-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="flex flex-col items-start">
                        <div className="bg-white rounded-xl p-3 mb-6 shadow-md inline-block">
                            <Image src={`${path}images/logo-hridansh.png`} alt="Hridansh Hospital Logo" width={240} height={100} className="object-contain" />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-8 pr-4">Your Trusted Center for Women & Orthopaedic Care. Compassionate Obstetrics, advanced Gynecology, and modern Orthopedic care.</p>
                        <h4 className="text-white/70 font-heading text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-navy transition-all duration-300 shadow-sm" aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/hridansh_hospital_0909/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-navy transition-all duration-300 shadow-sm" aria-label="Instagram">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-white/70 font-heading text-xl font-medium mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-white/60">Quick Links</h4>
                        <ul className="space-y-3 mb-8">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}><Link href={link.url} className="text-white/70 hover:text-white/90 transition-colors text-sm font-medium flex items-center gap-2  max-w-max"><svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>{link.name}</Link></li>
                            ))}
                        </ul>
                        <h4 className="text-white/70 font-heading text-xl font-medium mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-white/60">Our Specialties</h4>
                        <ul className="space-y-3">
                            {specialties.map((spec, idx) => (
                                <li key={idx} className="text-white/70 text-sm font-medium flex items-center gap-2 max-w-max"><span className="w-1.5 h-1.5 rounded-full bg-white"></span>{spec}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-white/70 font-heading text-xl font-medium mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-white/60">Our Locations</h4>
                        {locations.slice(0, 2).map((loc) => (
                            <div key={loc.id} className="mb-8 last:mb-0">
                                <h5 className="text-white/70 font-bold text-base mb-3 uppercase tracking-wide">{loc.name}</h5>
                                <div className="space-y-2.5">
                                    <div className="flex items-start gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <p className="text-white/70 text-sm leading-relaxed mb-0">{loc.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <a href={loc.phoneUrl} className="text-white/70 text-sm hover:text-white/90 transition-colors break-all">{loc.phone}</a>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <a href={`mailto:${loc.email}`} className="text-white/70 text-sm hover:text-white/90 transition-colors break-all">{loc.email}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-transparent font-heading text-xl font-medium mb-6 hidden lg:block">Spacer</h4>
                        {locations.slice(2).map((loc) => (
                            <div key={loc.id} className="mb-8 mt-0 lg:-mt-2">
                                <h5 className="text-white/70 font-bold text-base mb-3 uppercase tracking-wide">{loc.name}</h5>
                                <div className="space-y-2.5">
                                    <div className="flex items-start gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <p className="text-white/70 text-sm leading-relaxed mb-0">{loc.address}</p>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <a href={loc.phoneUrl} className="text-white/70 text-sm hover:text-white/90 transition-colors break-all">{loc.phone}</a>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <svg className="w-4 h-4 text-white/70 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <a href={`mailto:${loc.email}`} className="text-white/70 text-sm hover:text-white/90 transition-colors break-all">{loc.email}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-auto">
                            <p className="text-white/70 text-sm font-medium leading-relaxed">Experience world-class medical facilities with our dedicated experts.</p>
                            <Link href="/contact-us/" className="inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white/90 text-sm font-bold uppercase tracking-wider transition-colors">Contact Us Today<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-5">
                    <p className="text-white/70 text-sm text-center md:text-left">
                        &copy; <CurrentYear /> Hridansh Hospital. All rights reserved.
                    </p>

                    <p className="text-white/70 text-sm text-center md:text-right">
                        Designed &amp; Developed by{" "}
                        <a
                            href="https://qadritech.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white/90 font-medium transition-colors"
                        >
                            QadriTech
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}