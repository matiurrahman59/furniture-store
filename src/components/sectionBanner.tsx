import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";

interface SectionBannerProps {
  name: string;
  description?: string;
}

const SectionBanner: FC<SectionBannerProps> = ({ name, description }) => {
  return (
    <div className="section-padding">
      <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gray/10 p-6 text-black md:p-8 lg:gap-6 lg:p-12">
        <Link href="/" className="rounded-lg bg-gray/25 p-3 hover:bg-gray/40">
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold capitalize leading-9 lg:text-5xl lg:leading-[72px]">
            {name}
          </h1>
          <p className="max-w-[340px] text-gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
