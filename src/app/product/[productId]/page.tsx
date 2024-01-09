"use client";
import { FC, useState } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import products from "../../../assets/json/products.json";
import { reviewImages } from "@/assets/constants/navLink";
import PopularSection from "@/components/popularSection";
import { useRouter } from "next/navigation";

interface ProductProps {
  params: {
    productId: number;
  };
}

const Product: FC<ProductProps> = ({ params }) => {
  const [tab, setTab] = useState<number>(0);
  const { productId } = params;
  const filteredProduct = products.filter((item) => item.id === +productId);
  const router = useRouter();

  if (!filteredProduct.length) return null;

  const product = filteredProduct[0];

  const productDetails = product.info.map((item, index) => {
    return {
      id: index,
      title: item[0],
      details: item[1],
    };
  });

  return (
    <section className="section-padding">
        <div className="gap-6 md:flex">
          {/* Product image container */}
          <div className="relative h-[358px] overflow-hidden rounded-2xl text-white md:aspect-square md:h-72 md:w-72 xl:h-[437px] xl:w-[450px]">
            <Image
              src={product.images[0]}
              alt={`${product.name} product images`}
              fill
              className="-z-10 object-cover"
              sizes="(min-width: 1280px) 450px, (min-width: 900px) 288px, (min-width: 780px) calc(18vw + 130px), calc(100vw - 32px)"
            />
            <div className="flex justify-between p-6">
              <button
                onClick={() => router.back()}
                className="rounded-lg bg-black/25 p-3 backdrop-blur-sm transition-colors hover:bg-black/30"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <Link
                href=""
                className="rounded-lg bg-black/25 p-3 backdrop-blur-sm transition-colors hover:bg-black/30"
              >
                <ShareIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="md:flex-1">
            {/* Product name and price */}
            <div className="flex items-center justify-between pt-6 text-xl font-semibold xl:text-2xl">
              <div>
                <p className="text-base uppercase text-gray">
                  {product.category.name}
                </p>
                <h2 className="capitalize">{product.name}</h2>
              </div>
              {product.discount ? (
                <div className="flex items-center gap-[10px]">
                  <p className="text-gray line-through">${product.price}</p>
                  <p className="text-red">${product.discount}</p>
                </div>
              ) : (
                <p className="text-gray">${product.price}</p>
              )}
            </div>

            <div className="items-center space-y-3 pt-3 lg:flex lg:justify-between">
              {/* Add to cart button */}
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-orangeAlpha/80 p-3 font-semibold text-orange transition-colors hover:bg-orangeAlpha lg:order-2 lg:w-auto">
                <PlusIcon className="h-6 w-6" /> Add to cart
              </button>

              {/* Review container */}
              <div className="flex items-center justify-between rounded-2xl bg-gray/10 p-4 lg:order-1 lg:gap-4">
                <div className="space-y-2">
                  <div className="flex">
                    {Array.from([1, 2, 3, 4]).map((_, index) => (
                      <StarIcon
                        key={index}
                        className="h-6 w-6 text-yellow-400"
                      />
                    ))}
                    <StarIcon className="h-6 w-6 text-gray" />
                    <p className="pl-2">4.4</p>
                  </div>
                  <p className="flex cursor-pointer items-center gap-1 text-sm text-gray hover:underline">
                    12 reviews <ArrowRightIcon className="h-[14px] w-[14px]" />
                  </p>
                </div>
                <div className="flex">
                  {reviewImages.map((image) => (
                    <Image
                      key={image.id}
                      src={image.path}
                      height={32}
                      width={32}
                      alt="review image"
                      className={`rounded-full border-2 border-white ${
                        image.id === 1 ? "" : "-ml-3"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product description */}
            <div className="space-y-4 pt-4">
              <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto">
                {productDetails.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`snap-end whitespace-nowrap rounded-full px-4 py-2 font-semibold transition-colors hover:text-orange ${
                      tab === item.id
                        ? "bg-orangeAlpha/80  text-orange"
                        : "text-gray"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Product details by selected tab */}
              <p>{productDetails[tab].details}</p>
            </div>
          </div>
        </div>
      <PopularSection title="Similar products" />
    </section>
  );
};

export default Product;
