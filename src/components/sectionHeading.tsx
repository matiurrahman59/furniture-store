import React from "react";

type headingType = {
  title: string;
  children?: React.ReactNode;
};

export default function SectionHeading({ title, children }: headingType) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-black md:text-[22px] lg:text-2xl">
        {title}
      </h2>
      {children}
    </div>
  );
}
