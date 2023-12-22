import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function OfferSection() {
  return (
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
              <p className="hidden items-center gap-2 sm:flex">
                Learn more <ArrowRightIcon className="h-4 w-4" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
