import { FC } from "react";

import roomsData from "../../../assets/json/rooms.json";
import products from "../../../assets/json/products.json";

import ProductContainer from "@/components/productContainer";
import OfferSection from "@/components/offerSection";
import SectionBanner from "@/components/sectionBanner";

interface RoomProps {
  params: {
    roomId: number;
  };
}

const Room: FC<RoomProps> = ({ params }) => {
  const { roomId } = params;
  const filteredRoom = roomsData.filter((item) => item.id === +roomId);

  if (!filteredRoom.length) return null;

  const room = filteredRoom[0];
  const product = products.filter((item) => item.rooms[0].id === +roomId);

  return (
    <section className="section-padding">
      <SectionBanner name={room.name} description={room.description} />
      <ProductContainer products={product} />
      <OfferSection />
    </section>
  );
};

export default Room;
