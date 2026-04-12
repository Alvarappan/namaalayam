import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedTemples from "@/components/home/FeaturedTemples";
import FestivalsSection from "@/components/home/FestivalsSection";
import PopularPoojas from "@/components/home/PopularPoojas";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedTemples />
      <FestivalsSection />
      <PopularPoojas />
      <CTASection />
    </>
  );
}
