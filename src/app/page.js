import HeroSection from "@/components/custom/HeroSection";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto ">
        <HeroSection />
      </div>
    </main>
  );
}
