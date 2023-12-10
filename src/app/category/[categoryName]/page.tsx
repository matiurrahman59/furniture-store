import { FC } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import categoriesData from "../../../assets/json/categories.json";
import products from "../../../assets/json/products.json";

import ProductContainer from "@/components/productContainer";
import OfferSection from "@/components/offerSection";

interface CategoryProps {
  params: {
    categoryName: string;
  };
}

const Category: FC<CategoryProps> = ({ params }) => {
  const { categoryName } = params;
  const filteredCategory = categoriesData.filter(
    (item) => item.name === categoryName,
  );

  if (!filteredCategory.length) return null;

  const category = filteredCategory[0];
  const product = products.filter(
    (item) => item.category.name === category.singular,
  );

  return (
    <section>
      {/* Section banner image */}
      <div className="section-padding">
        <div className="relative flex h-24 items-center gap-3 overflow-hidden rounded-2xl text-white sm:h-36 lg:h-[168px]">
          <Link
            href="/"
            className="ml-6 rounded-lg bg-black/25 p-3 hover:bg-black/40 lg:ml-12"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">{category.name}</h1>
          <Image
            src={category.image}
            alt="Category image"
            fill
            className="-z-10 object-cover"
          />
        </div>
      </div>

      <div className="section-padding">
        <ProductContainer products={product} />
      </div>

      <OfferSection />
    </section>
  );
};

export default Category;
