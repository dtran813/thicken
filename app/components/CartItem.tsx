import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import useCart from '../hooks/useCart';
import { Order } from '../utils/types';

export const CartItem = ({ menu, quantity }: Order) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="relative my-5 flex items-center overflow-hidden rounded-md bg-slate-50 shadow-md">
      <button
        type="button"
        className="absolute right-2 top-2"
        onClick={() => {
          removeFromCart(menu.id);
          toast.success('Removed!');
        }}
      >
        <FiTrash2 size={24} />
      </button>
      <div className="relative h-32 w-32 sm:h-40 sm:w-1/2">
        <Image
          fill
          src={menu.imgUrl}
          alt={menu.name}
          className="object-cover"
        />
      </div>
      <div className="flex-1 px-3 py-2">
        <h3 className="pr-5 text-base font-semibold sm:mb-1 sm:text-lg">
          {menu.name}
        </h3>
        <p className="mb-1 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-base font-semibold text-transparent sm:mb-2 sm:text-xl">
          ${menu.price}
        </p>
        <div className="flex items-center gap-3 sm:gap-10">
          <p className="text-base">Quantity</p>

          <div className="flex items-center gap-3">
            <button
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80 sm:h-10 sm:w-10"
              onClick={() => updateQuantity(menu.id, 'decrease')}
            >
              <FiMinus />
            </button>
            <p className="text-lg font-semibold">{quantity}</p>
            <button
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80 sm:h-10 sm:w-10"
              onClick={() => updateQuantity(menu.id, 'increase')}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
