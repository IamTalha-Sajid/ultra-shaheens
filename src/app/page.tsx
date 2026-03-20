import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Merch from "@/components/Merch";
import Video from "@/components/Video";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Custom glowing aerodynamic diamond divider bridging the sections without snapping the gradient base
const SectionDivider = () => (
  <div className="w-full flex items-center justify-center -my-8 md:-my-12 lg:-my-16 relative z-20 pointer-events-none opacity-90 overflow-hidden">
    <div className="w-[40%] max-w-xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-white/30"></div>
    <div className="mx-4 sm:mx-8 relative flex items-center justify-center">
      {/* Outer ambient blur */}
      <div className="absolute inset-0 bg-canary/30 blur-[15px] rounded-full scale-[2] pointer-events-none opacity-50"></div>
      {/* Outer spinning diamond */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#040806] border border-canary/50 rotate-45 shadow-[0_0_15px_rgba(255,255,0,0.4)] flex items-center justify-center">
        {/* Core light element */}
        <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-canary rotate-45 shadow-[0_0_20px_rgba(255,255,0,1)]"></div>
        {/* Ping effect */}
        <div className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rotate-45 animate-ping opacity-60"></div>
      </div>
    </div>
    <div className="w-[40%] max-w-xl h-[1px] bg-gradient-to-l from-transparent via-white/10 to-white/30"></div>
  </div>
);

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />

      {/* Unified Ecosystem Background Wrapper to merge them visually */}
      <div className="w-full bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806]">
        <Experiences />
        <SectionDivider />
        <Merch />
        <SectionDivider />
        <Video />
        <SectionDivider />
        <Journey />
        <SectionDivider />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
