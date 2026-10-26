import Hero from "@/components/Pages/Home/Hero";
import Features from "@/components/Pages/Home/Features";
import About from "@/components/Pages/Home/About";
import Services from "@/components/Pages/Home/Services";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs";
import Marquee from "@/components/UI/Marquee";
import Process from "@/components/Pages/Home/Process";
import Leadership from "@/components/Pages/Home/Leadership";
import VideoSection from "@/components/Pages/Home/VideoSection";
import Testimonials from "@/components/Pages/Home/Testimonials"

import ContactForm from "@/components/Pages/Home/ContactForm";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white  ">
      <Hero />
      <Features />
      <About />
      <Services />
      <WhyChooseUs />
      <Marquee />
      <Process />
      <Leadership />
      <VideoSection />
      <Testimonials />
      <ContactForm />
    </main>
  );
}