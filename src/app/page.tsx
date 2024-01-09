import Title from "@/components/title";
import BannerCarousel from "@/components/bannerCarousel";
import CategorySection from "@/components/categorySection";
import PopularSection from "@/components/popularSection";
import OfferSection from "@/components/offerSection";
import RoomSection from "@/components/roomSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="section-padding">
      <Title />
      <BannerCarousel />
      <CategorySection />
      <PopularSection title="Popular" />
      <OfferSection />
      <RoomSection />
      <Footer />
    </div>
  );
}
