import React from "react";
import ProductCard from "./productCard";
import { productItem } from "@/utils/types";

export default function ProductContainer({
  products,
}: {
  products: productItem[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {products.map((item: productItem, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </div>
  );
}
