import { FC } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import roomsData from "../../../assets/json/rooms.json";
import products from "../../../assets/json/products.json";

import ProductContainer from "@/components/productContainer";
import OfferSection from "@/components/offerSection";

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
    <section>
      {/* Section banner image */}
      <div className="section-padding">
        <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gray/10 p-6 text-black md:p-8 lg:gap-6 lg:p-12">
          <Link href="/" className="rounded-lg bg-gray/25 p-3 hover:bg-gray/40">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold capitalize leading-9 lg:text-5xl lg:leading-[72px]">
              {room.name}
            </h1>
            <p className="max-w-[340px] text-gray">{room.description}</p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <ProductContainer products={product} />
      </div>
      <OfferSection />
    </section>
  );
};

export default Room;
