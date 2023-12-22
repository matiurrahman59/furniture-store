import SectionBanner from "@/components/sectionBanner";
import { FC } from "react";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <section>
      <SectionBanner name="Shopping cart" />
    </section>
  );
};

export default Card;
