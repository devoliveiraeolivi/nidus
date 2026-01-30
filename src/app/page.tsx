import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import { FeaturedBirds } from "@/components/features/BirdCard";
import StatsSection from "@/components/features/StatsSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import CTASection from "@/components/features/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedBirds />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
