'use client';

import { Menu } from '@prisma/client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { toast } from 'react-hot-toast';
import { FiX } from 'react-icons/fi';
import { RemoveScroll } from 'react-remove-scroll';
import Button from '../components/Button';
import Counter from '../components/inputs/Counter';
import useCart from '../hooks/useCart';
import useEscapeKey from '../hooks/useEscapeKey';
import useOrderModal from '../hooks/useOrderModal';

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

  useEscapeKey(handleClose);

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

                {/* Heading */}
                <div className="relative flex items-center justify-center rounded-t border-b-2 py-6">
                  <h2 className="text-2xl font-semibold">Order</h2>
                </div>

                {/* Body */}
                <div className="mt-5 flex h-full w-full flex-col gap-5 p-3 sm:flex-row sm:gap-10 sm:p-6">
                  <div className="relative h-80 sm:h-96 sm:flex-1">
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
                    <div className="mt-10 flex items-center sm:mt-5">
                      <p className="mr-5 text-lg font-semibold sm:mr-10">
                        Quantity
                      </p>
                      <Counter
                        value={quantity}
                        onChange={(value) => setQuantity(value)}
                      />
                    </div>

                    <Button
                      className="absolute bottom-3 right-3 bg-orange-400 px-3 py-2 text-lg text-white/80 sm:bottom-6 sm:right-6"
                      onClick={() => {
                        addToCart({ menu, quantity });
                        toast.success('Added!');
                      }}
                    >
                      Add To Cart
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
