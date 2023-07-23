'use client';

import useCart from '@/app/hooks/useCart';
import useEscapeKey from '@/app/hooks/useEscapeKey';
import useStore from '@/app/hooks/useStore';
import { navLinks } from '@/app/utils/constants';
import { Order } from '@/app/utils/types';
import { calculateQuantity, calculateTotal } from '@/app/utils/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import Button from '../Button';
import { CartItem } from '../CartItem';
import MobileNav from './MobileNav';

const Header = () => {
  const cart = useStore(useCart, (state) => state.cart)!;
  const { showCart, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mCart, setMCart] = useState<Order[]>([]);
  const router = useRouter();
  const numOfItems = calculateQuantity(cart);

  const handleCloseCart = () => {
    if (!showCart) {
      return;
    }

    toggleCart();
  };

  useEscapeKey(handleCloseCart);

  useEffect(() => {
    setMCart(cart);
  }, [cart]);

  return (
    <header className="sticky left-0 top-0 z-50">
      <div className="flex h-20 items-center justify-between bg-orange-200/75 p-5">
        <div className="flex justify-start xl:basis-1/3">
          <h1 className="text-xl font-bold">
            <Link href="/">Thicken Thighs</Link>
          </h1>
        </div>

        <nav className="hidden justify-center lg:flex xl:basis-1/3">
          <ul className="flex w-full list-none justify-between">
            {navLinks.map((link) => (
              <li key={link.label} className="inline-block">
                <Link href={link.url} className="px-3 py-1 text-lg font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row justify-end gap-3 xl:basis-1/3">
          <Link href="/account/login">
            <FiUser size={32} />
          </Link>
          <div className="relative">
            <button
              className="flex items-center space-x-1 rounded-md text-gray-200"
              onClick={toggleCart}
            >
              <FiShoppingCart size={32} color="black" />
            </button>
            <span className="absolute -right-2 -top-2 animate-bounce rounded-full bg-amber-400 px-1.5 py-0.5 text-xs font-semibold">
              {numOfItems}
            </span>
          </div>

          <button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={32} />
          </button>
        </div>

        {isMenuOpen && (
          <MobileNav isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        )}
      </div>

      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-screen-sm overflow-auto bg-orange-100 p-5 transition-transform duration-500 ${
          numOfItems === 0 && 'overflow-y-hidden'
        } ${showCart ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold xl:text-2xl">My Cart</h2>
          <button type="button" onClick={toggleCart}>
            <FiX size={32} />
          </button>
        </div>

        {/* Cart items */}
        {mCart?.length > 0 ? (
          <>
            {mCart?.map((cartItem) => (
              <CartItem key={cartItem.menu.id} {...cartItem} />
            ))}
            <div className="my-8 flex flex-row justify-between text-center text-3xl font-bold">
              <h4>Total</h4>
              <h4>${calculateTotal(cart)}</h4>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="bg-orange-400 px-7 py-3 text-lg font-medium text-white/90"
                onClick={() => {
                  toggleCart();
                  router.push('/checkout');
                }}
              >
                Proceed to checkout ({numOfItems}{' '}
                {numOfItems === 1 ? 'item' : 'items'})
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center overflow-hidden">
            <p className="text-xl font-bold">Your Cart Is Empty</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
