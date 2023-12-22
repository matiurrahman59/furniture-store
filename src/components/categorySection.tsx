import Link from "next/link";
import Image from "next/image";

import SectionHeading from "./sectionHeading";
import categoriesData from "../assets/json/categories.json";

export default function CategorySection() {
  return (
    <section className="section-padding">
      <SectionHeading title="Categories" />
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pt-4 sm:grid sm:grid-cols-3 xl:py-5">
        {categoriesData.map((item) => (
          <Link
            href={`/category/${item.name}`}
            key={item.id}
            className="hover-effect relative h-[75px] min-w-[150px] snap-end sm:h-32 xl:h-[184px]"
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
  );
}
