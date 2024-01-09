import Link from "next/link";
import { FC } from "react";

const links = ["sofa", "chair", "table"];

interface PlaceHolderProps {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const PlaceHolder: FC<PlaceHolderProps> = ({ heading, description, icon }) => {
  return (
    <div className="mx-auto max-w-[304px] text-center">
      <div className="grid place-content-center">{icon}</div>
      <h2 className="mt-4 text-xl font-semibold capitalize">{heading}</h2>
      <p className="text-gray">{description}</p>
      <div className="mt-6 space-x-2">
        {links.map((item) => (
          <Link
            key={item}
            href={{ pathname: "/search", query: { query: item } }}
            className="rounded-full bg-gray/20 px-3 py-1 font-semibold transition-colors hover:bg-gray/40"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaceHolder;
