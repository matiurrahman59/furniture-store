"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import banners from "../assets/json/banners.json";
import Slider from "./slider";

export default function Banner() {
  return (
    <div className="section-padding">
      <Slider items={banners.length}>
        {banners.map((item) => (
          <div key={item.text} className="keen-slider__slide">
            <Link href="/">
              <div className="relative h-40 overflow-hidden rounded-2xl md:h-56 xl:h-[352px]">
                <Image
                  src={item.image}
                  alt="offer product image"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1300px) 1152px, (min-width: 1060px) 1028px, (min-width: 800px) 768px, 268px"
                />

                <div className="absolute inset-0 flex items-center">
                  <div className="pl-4 xl:pl-20">
                    <p className="font-semibold xl:text-2xl">{item.text}</p>
                    <p className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl xl:font-bold xl:leading-[72px]">
                      50% off
                    </p>
                    <div className="hidden xl:block">
                      <p>Learn more &rarr;</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
