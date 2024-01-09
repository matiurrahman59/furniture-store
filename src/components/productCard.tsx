import Image from "next/image";
import Link from "next/link";
import React from "react";

import { productItem } from "@/utils/types";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ item }: { item: productItem }) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="hover-effect rounded-2xl bg-gray/10">
        {/* product image container */}
        <div className="relative flex h-[171px] w-full items-end justify-end md:h-52 xl:h-[276px]">
          <Image
            src={item.images[0]}
            alt={`Popular product ${item.id}`}
            fill
            className="rounded-2xl object-cover"
            sizes="(min-width: 1280px) 276px, calc(46.88vw - 15px)"
          />
        </div>

        {/* product details container*/}
        <div className="flex items-center justify-between p-2 xl:p-6">
          <div>
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

          <button className="tooltip btn-primary p-3 text-2xl">
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Link>
  );
}
