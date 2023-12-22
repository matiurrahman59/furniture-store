import Title from "@/components/title";
import BannerCarousel from "@/components/bannerCarousel";
import CategorySection from "@/components/categorySection";
import PopularSection from "@/components/popularSection";
import OfferSection from "@/components/offerSection";
import RoomSection from "@/components/roomSection";

export default function Home() {
  return (
    <>
      <Title />
      <BannerCarousel />
      <CategorySection />
      <PopularSection title="Popular" />
      <OfferSection />
      <RoomSection />
    </>
  );
}
