import HeroSlider from "@/components/HeroSlider";
import HeroQuickNav from "@/components/HeroQuickNav";
import AboutSection from "@/components/AboutSection";
import ThematicAreas from "@/components/ThematicAreas";
import ServicesTabs from "@/components/ServicesTabs";
import ClientsSection from "@/components/ClientsSection";
import InsightsSection from "@/components/InsightsSection";
import PhotosVideosSection from "@/components/PhotosVideosSection";
import NewsSection from "@/components/NewsSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <HeroQuickNav />
      <AboutSection />
      <ThematicAreas />
      <ServicesTabs />
      <ClientsSection />
      <InsightsSection />
      <PhotosVideosSection />
      <NewsSection />
      <CTABanner />
    </>
  );
}
