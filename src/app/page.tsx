import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Merch from "@/components/Merch";
import Journey from "@/components/Journey";

export default function Home() {
  return (
      <div className="font-sans">
        <Header />
        <Hero />
        <Experiences />
        <Merch />
        <Journey />
      </div>
  );
}
