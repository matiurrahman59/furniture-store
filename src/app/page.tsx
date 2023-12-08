import Image from "next/image";
import Link from "next/link";

import categoriesData from "../assets/json/categories.json";
import productsData from "../assets/json/products.json";
import roomsData from "../assets/json/rooms.json";

import ProductContainer from "@/components/productContainer";
import SectionHeading from "@/components/sectionHeading";
import Banner from "@/components/banner";

export default function Home() {
  const popularProductsData = productsData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  return (
    <div>
      <h1 className="section-padding text-2xl font-bold leading-9 text-black sm:text-center md:text-3xl xl:text-5xl xl:leading-[72px]">
        Explore What
        <br />
        Your Home Needs
      </h1>
      <Banner />

      {/* Categories Section */}
      <section className="section-padding">
        <SectionHeading title="Categories" />
        <div className="flex gap-4 overflow-x-scroll pt-4 sm:grid sm:grid-cols-3 xl:py-5">
          {categoriesData.map((item) => (
            <Link
              href="/"
              key={item.id}
              className="hover-effect relative h-[75px] min-w-[150px] sm:h-32 xl:h-[184px]"
            >
              <Image
                src={item.image}
                alt={`${item.singular} image`}
                fill
                priority
                className="rounded-2xl object-cover"
                sizes="(min-width: 1280px) 373px, 150px"
              />
              <div className="absolute inset-0 flex items-center">
                <h3 className="pl-4 font-semibold capitalize text-white lg:text-lg xl:pl-6 xl:text-xl">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="section-padding">
        <SectionHeading title="Popular">
          <Link href="/" className="text-orange">
            See all &rarr;
          </Link>
        </SectionHeading>

        <div className="pt-4 xl:pt-5">
          <ProductContainer products={popularProductsData} />
        </div>
      </section>

      {/* Offer Section */}
      <section className="section-padding">
        <Link href="/">
          <div className="hover-effect relative h-32 overflow-hidden rounded-2xl sm:h-44 lg:h-64">
            <Image
              src="/images/banner/banner-2.jpg"
              alt="offer product image"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1152px, 93.75vw"
            />

            <div className="absolute inset-0 flex items-center">
              <div className="pl-4 xl:pl-6">
                <h1 className="text-2xl font-bold leading-9 md:text-3xl lg:text-4xl xl:text-5xl xl:leading-[72px]">
                  Sale
                </h1>
                <p>All chairs up to</p>
                <p className="font-semibold md:text-xl lg:text-2xl">50% off</p>
                <div className="hidden sm:block">
                  <p>Learn more &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="section-padding">
        <div>
          <SectionHeading title="Rooms" />
          <p className="text-gray">Furniture for every corners in your home</p>
        </div>
        <div className="flex gap-4 overflow-x-scroll pt-4 lg:grid lg:grid-cols-4">
          {roomsData.map((item) => (
            <Link
              href="/"
              className="hover-effect relative h-[270px] min-w-[180px] overflow-hidden rounded-2xl lg:h-80 lg:w-auto xl:h-[396px]"
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
    </div>
  );
}
