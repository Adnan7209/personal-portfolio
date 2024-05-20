import HeroSection from "@/components/custom/HeroSection";
import Navbar from "@/components/custom/Navbar";
import ProjectSection from "@/components/custom/ProjectSection";
import SkillsSection from "@/components/custom/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto ">
        <HeroSection />
        <ProjectSection/>
        <SkillsSection/>
      </div>
      
    </main>
  );
}
