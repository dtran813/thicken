import Image from 'next/image';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import useCart from '../hooks/useCart';
import { Order } from '../utils/types';

export const CartItem = ({ menu, quantity }: Order) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="relative my-5 flex h-40 flex-col rounded-md bg-slate-50 sm:flex-row">
      <button
        type="button"
        className="absolute right-2 top-2"
        onClick={() => removeFromCart(menu.id)}
      >
        <FiTrash2 size={24} />
      </button>
      <div className="relative w-1/2">
        <Image
          fill
          src={menu.imgUrl}
          alt={menu.name}
          className="rounded-bl-md rounded-tl-md shadow-lg"
        />
      </div>
      <div className="flex-1 px-3 py-2">
        <h3 className="mb-1 text-lg font-semibold">{menu.name}</h3>
        <p className="mb-2 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-xl font-semibold text-transparent">
          ${menu.price}
        </p>
        <div className="flex items-center gap-10">
          <p className="text-base">Quantity</p>

          <div className="flex items-center gap-3">
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80"
              onClick={() => updateQuantity(menu.id, 'decrease')}
            >
              <FiMinus />
            </button>
            <p className="text-lg font-semibold">{quantity}</p>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition hover:opacity-80"
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
