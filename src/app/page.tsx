"use client";
import Image from "next/image";
import categoriesData from "../assets/json/categories.json";
import productsData from "../assets/json/products.json";
import Link from "next/link";
import ProductCard from "@/components/productCard";

export default function Home() {
  const popularProductsData = productsData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  return (
    <main>
      <h1 className="pl-4 pt-4 text-2xl font-bold leading-9 text-black xl:pl-0 xl:pt-12 xl:text-center xl:text-5xl xl:leading-[72px]">
        Explore What
        <br />
        Your Home Needs
      </h1>

      {/* Categories section */}
      <section className="py-4 xl:py-6">
        <h2 className="pl-4 text-xl font-semibold text-black xl:pl-0 xl:text-2xl ">
          Categories
        </h2>

        <div className="flex gap-4 overflow-x-scroll py-4 pl-4 xl:grid xl:grid-cols-3 xl:py-5 xl:pl-0">
          {categoriesData.map((item) => (
            <Link
              href="/"
              key={item.id}
              className="relative h-[75px] min-w-[150px] transition-transform hover:-translate-y-1 xl:h-[184px]"
            >
              <Image
                src={item.image}
                alt={`${item.singular} image`}
                fill
                priority
                className="rounded-2xl object-cover"
              />
              <div className="absolute inset-0 flex items-center">
                <h3 className="pl-4 font-semibold capitalize text-white xl:pl-6 xl:text-xl">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular section */}
      <section className="px-4 xl:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black xl:text-2xl ">
            Popular
          </h2>

          <Link href="/" className="text-orange">
            See all &rarr;
          </Link>
        </div>

        <div className="py-4 xl:py-5">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {popularProductsData.map((item, i) => (
              <ProductCard item={item} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
