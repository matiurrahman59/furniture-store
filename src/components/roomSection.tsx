import Link from "next/link";
import Image from "next/image";

import SectionHeading from "./sectionHeading";
import roomsData from "../assets/json/rooms.json";

export default function RoomSection() {
  return (
    <section className="section-padding">
      <div>
        <SectionHeading title="Rooms" />
        <p className="text-gray">Furniture for every corners in your home</p>
      </div>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pt-4 lg:grid lg:grid-cols-4">
        {roomsData.map((item) => (
          <Link
            href={`/room/${item.id}`}
            className="hover-effect relative h-[270px] min-w-[180px] snap-end overflow-hidden rounded-2xl lg:h-80 lg:w-auto xl:h-[396px]"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={`${item.image} image`}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 276px, 180px"
            />
            <h3 className="absolute left-6 top-6 font-semibold capitalize lg:text-lg xl:text-xl">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
