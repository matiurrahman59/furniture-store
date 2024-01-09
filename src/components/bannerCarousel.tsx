import Link from "next/link";
import Image from "next/image";

import banners from "../assets/json/banners.json";
import Slider from "./slider";

export default function BannerCarousel() {
  return (
    <div>
      <Slider items={banners.length}>
        {banners.map((item, index) => (
          <Link
            key={index}
            href={item.to}
            className="keen-slider__slide relative flex h-40 items-center overflow-hidden rounded-2xl hover:cursor-pointer md:h-56 xl:h-[352px]"
          >
            <Image
              src={item.image}
              alt="offer product image"
              fill
              className="-z-10 object-cover"
              sizes="(min-width: 1300px) 1152px, (min-width: 1060px) 1028px, (min-width: 800px) 768px, 268px"
            />

            <div className="pl-4 xl:pl-20">
              <p className="font-semibold xl:text-2xl">{item.text}</p>
              <p className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl xl:font-bold xl:leading-[72px]">
                {item.heading}
              </p>
              <div className="hidden xl:block">
                <p>Learn more &rarr;</p>
              </div>
            </div>
          </Link>
          // <div key={item.text} className="keen-slider__slide cursor-pointer">
          //   <div className="relative h-40 cursor-pointer overflow-hidden rounded-2xl md:h-56 xl:h-[352px]">
          //     <Link href="/">
          //       <Image
          //         src={item.image}
          //         alt="offer product image"
          //         fill
          //         className="object-cover"
          //         sizes="(min-width: 1300px) 1152px, (min-width: 1060px) 1028px, (min-width: 800px) 768px, 268px"
          //       />

          //       <div className="absolute inset-0 flex items-center">
          //         <div className="pl-4 xl:pl-20">
          //           <p className="font-semibold xl:text-2xl">{item.text}</p>
          //           <p className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl xl:font-bold xl:leading-[72px]">
          //             50% off
          //           </p>
          //           <div className="hidden xl:block">
          //             <p>Learn more &rarr;</p>
          //           </div>
          //         </div>
          //       </div>
          //     </Link>
          //   </div>
          // </div>
        ))}
      </Slider>
    </div>
  );
}
