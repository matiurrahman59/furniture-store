import Link from "next/link";

import SectionHeading from "./sectionHeading";
import productsData from "../assets/json/products.json";
import ProductContainer from "./productContainer";
import { ArrowRightIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export default function PopularSection({ title }: { title: string }) {
  const popularProductsData = productsData
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  return (
    <section className="section-padding">
      <SectionHeading title={title}>
        <Link href="" className="flex items-center gap-1 text-orange">
          See all
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </SectionHeading>

      <div className="pt-4 xl:pt-5">
        <ProductContainer products={popularProductsData} />
      </div>
    </section>
  );
}
