'use client';

import { Menu } from '@prisma/client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { FiX } from 'react-icons/fi';
import { RemoveScroll } from 'react-remove-scroll';
import useCart from '../hooks/useCart';
import useOrderModal from '../hooks/useOrderModal';
import Button from './Button';
import Counter from './inputs/Counter';

interface OrderModalProps {
  isOpen: boolean;
  menu: Menu;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen = false, menu }) => {
  const orderModal = useOrderModal();
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(isOpen);
  const [quantity, setQuantity] = useState(1);

  const handleClose = useCallback(() => {
    setQuantity(1);
    setShowModal(false);
    setTimeout(() => orderModal.onClose(), 300); // for animation
  }, [orderModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        handleClose();
      }
    }
    window.addEventListener('keydown', handleEscapeKey);

    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [handleClose]);

  if (!orderModal.isOpen) {
    return null;
  }

  return (
    <ReactFocusLock>
      <RemoveScroll>
        <div
          className="fixed inset-0 z-50 bg-neutral-800/70"
          onClick={orderModal.onClose} // Close when clicking on backdrop
        >
          <div
            className="relative mx-auto flex h-full w-full items-center lg:w-3/5"
            onClick={(event) => {
              event.stopPropagation(); // Prevent closing when clicking on the actual modal
            }}
          >
            <div
              className={`w-full transform duration-300 ${
                showModal
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-full opacity-0'
              }`}
            >
              <div className="flex transform flex-col rounded-lg border-0 bg-white shadow-lg md:h-auto">
                <button
                  className="absolute right-5 top-5 z-50 border-0 p-1 transition hover:opacity-70"
                  onClick={handleClose}
                >
                  <FiX size={32} />
                </button>
                <div className="relative flex items-center justify-center rounded-t border-b-2 py-6">
                  <h2 className="text-2xl font-semibold">Order</h2>
                </div>
                <div className="mt-5 flex h-full w-full gap-10 p-6">
                  <div className="relative h-96 flex-1">
                    <Image
                      fill
                      src={menu.imgUrl}
                      alt={menu.name}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 self-start">
                    <p className="mb-3 text-xl font-bold">{menu.name}</p>
                    <p className="mb-3 text-base">{menu.description}</p>
                    <p className="text-base">
                      <span className="font-semibold">{menu.price}</span> |{' '}
                      <span>{menu.calories} cal</span>
                    </p>
                    <div className="mt-5 flex items-center">
                      <p className="mr-10 text-lg font-semibold">Quantity</p>
                      <Counter
                        value={quantity}
                        onChange={(value) => setQuantity(value)}
                      />
                    </div>

                    <Button
                      className="absolute bottom-6 right-6 bg-orange-400 px-3 py-2 text-lg text-white/80"
                      onClick={() => {
                        addToCart({ menu, quantity });
                      }}
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </ReactFocusLock>
  );
};

export default OrderModal;
