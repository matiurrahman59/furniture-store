import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FC } from 'react';

interface CartItemProps {
}

const CartItem: FC<CartItemProps> = ({  }) => {

  const commonClass = 'h-8 w-8 lg:h-12 lg:w-12 rounded-lg hover:bg-gray/40 bg-gray/25 transition-colors grid place-content-center'
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            {/* item image */}
            <div className="relative w-32 h-32 lg:w-48 lg:h-48">
              <Image src='/images/products/product-220101.jpg' fill alt="product image" className="rounded-lg" sizes="(min-width: 1040px) 192px, (min-width: 400px) 128px, calc(95vw - 233px)" />
            </div>

            
            <div className="space-y-6 flex-1 h-full">
                {/* item name*/}
              <div className="flex justify-between items-start">
                <div>
                  <p>Landskrona sofa</p>
                  <p className="text-gray text-sm">Art: 47856</p>
                </div>
                <button className={commonClass}>
                  <XMarkIcon className="h-5 w-h-5"  />
                </button>
              </div>

              <div className="flex justify-between items-center">
                {/* item quantity control */}
                <div className='flex items-center gap-1 lg:gap-2'>
                  <button className={commonClass}>
                    <MinusIcon className="h-5 w-h-5"  />
                  </button>
                  <div className='border-2 rounded-lg px-4 grid place-content-center h-8 lg:h-12 border-gray/25'>2</div>
                  <button className={commonClass}>
                    <PlusIcon className="h-5 w-h-5"  />
                  </button>
                </div>

                {/* item price */}
                <div className="flex items-center gap-[10px]">
                    <p className="text-gray line-through">$549</p>
                    <p className="font-semibold text-red">$499</p>
                </div>
              </div>
            </div>
          </div>
  );
};

export default CartItem;