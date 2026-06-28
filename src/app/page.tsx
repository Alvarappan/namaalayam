import PoojaHero from "@/components/home/PoojaHero";
import PillarsSection from "@/components/home/PillarsSection";
import TodayTithiSection from "@/components/home/TodayTithiSection";
import DoshasSection from "@/components/home/DoshasSection";
import FeaturedPoojas from "@/components/home/FeaturedPoojas";
import TemplesStrip from "@/components/home/TemplesStrip";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <PoojaHero />
      <PillarsSection />
      <TodayTithiSection />
      <DoshasSection />
      <FeaturedPoojas />
      <TemplesStrip />
      <CTASection />
    </>
  );
}
