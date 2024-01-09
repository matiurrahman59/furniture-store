'use client'
import { FC } from "react";

import CartItem from "@/components/cartItem";
import CartItemSummary from "@/components/cartItemSummary";
import SectionBanner from "@/components/sectionBanner";
import PopularSection from "@/components/popularSection";


interface CartProps {}

const Cart: FC<CartProps> = ({}) => {

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="relative section-padding">
      <SectionBanner name="Cart" />
      {/* cart container */}
      <div className="space-y-4 md:grid md:grid-cols-[3fr_2fr] md:gap-7 relative lg:gap-12">
        <div className="space-y-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

      <div className="relative">
        <div className="md:sticky md:top-[0]">
          <CartItemSummary />
        </div>
      </div>
    </div>
      <PopularSection title="Similar products" />
    </section>
  );
};

export default Cart;
