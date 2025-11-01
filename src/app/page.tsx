import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Merch from "@/components/Merch";
import Video from "@/components/Video";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="font-sans">
        <Header />
        <Hero />
        <Experiences />
        <Merch />
        <Video />
        <Journey />
        <CTA />
        <Footer />
      </div>
  );
}
