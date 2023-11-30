import Image from "next/image";
import Link from "next/link";
import React from "react";

type item = {
  id: number;
  name: string;
  popularity: number;
  category: { id: number; name: string };
  rooms: { id: number; name: string }[];
  info: string[][];
  price: number;
  images: string[];
  discount?: number;
};

export default function ProductCard({ item }: { item: item }) {
  return (
    <Link href="/">
      <div className="bg-gray/10 overflow-hidden rounded-2xl transition-transform hover:-translate-y-1">
        {/* product image container */}
        <div className="relative h-[171px] w-full xl:h-[276px]">
          <Image
            src={item.images[0]}
            alt={`Popular product ${item.id}`}
            fill
            className="rounded-b-2xl object-cover"
          />
          <div className="bg-orangeAlpha absolute bottom-2 right-2 grid h-12 w-12 place-content-center rounded-lg">
            <button className="text-2xl text-orange ">+</button>
          </div>
        </div>

        {/* product details container*/}
        <div className="p-4 xl:p-6">
          <p className="text-xs font-semibold uppercase text-gray">
            {item.category.name}
          </p>
          <p className="capitalize text-black">{item.name}</p>
          {item.discount ? (
            <div className="flex items-center gap-[10px]">
              <p className="text-gray line-through">${item.price}</p>
              <p className="font-semibold text-red">${item.discount}</p>
            </div>
          ) : (
            <p className="text-gray">${item.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
