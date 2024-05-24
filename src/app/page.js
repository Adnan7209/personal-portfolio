import HeroSection from "@/components/custom/HeroSection";
import Navbar from "@/components/custom/Navbar";
import ProjectSection from "@/components/custom/ProjectSection";
import SkillsSection from "@/components/custom/SkillsSection";
import FloatingButton from "@/components/custom/FloatingButton";
import ContactSection from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto pb-52">
        <HeroSection />
        <ProjectSection/>
        <SkillsSection/>
        <ContactSection/>
      </div>
      <FloatingButton/>
    </main>
  );
}
