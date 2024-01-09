import { FC } from 'react';

interface CartItemSummaryProps {
}

const CartItemSummary: FC<CartItemSummaryProps> = ({  }) => {
  return (
      <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray items-center">
              <p>Products</p>
              <p>$1298</p>
            </div>
            <div className="flex text-gray justify-between items-center">
              <p>Delivery</p>
              <p>$5</p>
            </div>
            <div className="flex text-black justify-between items-center">
              <p>Total</p>
              <p className="font-semibold">$1298</p>
            </div>

            <div className="flex gap-2">
                <input type="text" placeholder="Coupon code" className="rounded-lg w-full border-2 border-gray/20 p-3 outline-none"/>
                <button className="bg-black text-white px-3 rounded-lg">Apply</button>
            </div>

            <button className="h-12 w-full btn-primary">Checkout</button>
          </div>
      </div>

  );
};

export default CartItemSummary;