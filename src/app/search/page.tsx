"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

import productsData from "../../assets/json/products.json";

import SectionBanner from "@/components/sectionBanner";
import ProductContainer from "@/components/productContainer";
import PlaceHolder from "@/components/placeHolder";

type Product = {
  id: number;
  name: string;
  popularity: number;
  category: { id: number; name: string };
  rooms: { id: number; name: string }[];
  info: string[][];
  price: number;
  images: string[];
};

const Search = ({}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [fuse, setFuse] = useState<Fuse<Product> | undefined>();
  const [searchProductsData, setSearchProductsData] = useState<Product[]>([]);

  // using fuse.js, setting keys for search term and storing data in useState
  useEffect(() => {
    setFuse(
      new Fuse(productsData, {
        keys: ["name", "category.name", "rooms.name", "info"],
      }),
    );
  }, []);

  // if theres any query then filter them with that query, and store them in searchProductsData
  useEffect(() => {
    if (query) {
      const results = fuse?.search(query);
      if (results) {
        setSearchProductsData(results?.map((result) => result.item));
      }
    }
  }, [searchParams, fuse, query]);

  return (
    <section className="section-padding">
      <SectionBanner
        name="Search"
        description={
          query?.length
            ? `Showing results for '${query?.toLocaleLowerCase()}'`
            : ""
        }
      />

      {/* if theres no search query */}
      {!query && (
        <PlaceHolder
          heading="Find Best Furniture For Your House"
          description="For example:"
          icon={<MagnifyingGlassIcon className="flex h-12 w-12 items-center" />}
        />
      )}

      {/* if search results found */}
      {searchProductsData.length > 0 && (
          <ProductContainer products={searchProductsData} />
      )}

      {/* if theres query but search result not found */}
      {query && searchProductsData.length === 0 && (
        <PlaceHolder
          heading="No products found"
          description="Please check spelling or try one of these searches:"
          icon={
            <svg
              viewBox="0 0 24 24"
              height="3rem"
              width="3rem"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 4a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM5 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zM19 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zM13 21a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zM7 4a1 1 0 0 0-1-1 3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 1-1zM18 3a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zM7 20a1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1zM18 21a1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 1 1 2 0 3 3 0 0 1-3 3z"></path>
            </svg>
          }
        />
      )}
    </section>
  );
};

export default Search;
