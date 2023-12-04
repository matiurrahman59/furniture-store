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
    <main>
      <h1 className="section-padding text-2xl font-bold leading-9 text-black xl:text-center xl:text-5xl xl:leading-[72px]">
        Explore What
        <br />
        Your Home Needs
      </h1>

      <Banner />

      {/* Categories section */}
      <section className="py-4 xl:py-6">
        <div className="px-4 xl:p-6 xl:pb-0">
          <SectionHeading title="Categories" />
        </div>
        <div className="flex gap-4 overflow-x-scroll py-4 pl-4 xl:grid xl:grid-cols-3 xl:px-6 xl:py-5">
          {categoriesData.map((item) => (
            <Link
              href="/"
              key={item.id}
              className="hover-effect relative h-[75px] min-w-[150px] xl:h-[184px]"
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

      {/* offer section */}
      <section className="section-padding">
        <Link href="/">
          <div className="hover-effect relative h-32 overflow-hidden rounded-2xl xl:h-64">
            {/* banner image */}
            <Image
              src="/images/banner/banner-2.jpg"
              alt="offer product image"
              fill
              className="object-cover"
            />

            {/* banner image details */}
            <div className="absolute inset-0 flex items-center">
              <div className="pl-4 xl:pl-6">
                <h1 className="text-2xl font-bold leading-9 xl:text-5xl xl:leading-[72px]">
                  Sale
                </h1>
                <p>All chairs up to </p>
                <p className="font-semibold xl:text-2xl">50% off</p>
                <div className="hidden xl:block">
                  <p>Learn more &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* rooms category section  */}
      <section className="py-4 xl:py-6">
        <div className="px-4 xl:p-6 xl:pb-0">
          <SectionHeading title="Rooms" />
          <p className="text-gray">Furniture for every corners in your home</p>
        </div>
        <div className="flex gap-4 overflow-x-scroll pl-4 pt-4 xl:grid xl:grid-cols-4 xl:px-6 xl:pt-6">
          {roomsData.map((item) => (
            <Link
              href="/"
              className="hover-effect relative h-[270px] min-w-[180px] overflow-hidden rounded-2xl xl:h-[396px] xl:w-auto"
              key={item.id}
            >
              <Image
                src={item.image}
                alt={`${item.image} image`}
                fill
                className="object-cover"
              />
              <h3 className="absolute left-6 top-6 font-semibold capitalize xl:text-xl">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
