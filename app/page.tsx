import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhasesSection } from "@/components/sections/PhasesSection";
import { InternshipSection } from "@/components/sections/InternshipSection";
import { ThemesSection } from "@/components/sections/ThemesSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PhasesSection />
      <InternshipSection />
      <ThemesSection />
      <SponsorsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
