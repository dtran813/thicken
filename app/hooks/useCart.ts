import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../utils/types';

interface CartStore {
  cart: Order[];
  addToCart: (order: Order) => void;
  removeFromCart: (orderId: string) => void;
  updateQuantity: (orderId: string, action: 'increase' | 'decrease') => void;
  showCart: boolean;
  toggleCart: () => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (order: Order) => {
        const cart = get().cart;
        const findOrder = cart.find((o) => o.menu.id === order.menu.id);

        if (findOrder) {
          findOrder.quantity += order.quantity;
        } else {
          cart.push(order);
        }

        set({ cart });
      },
      removeFromCart: (orderId: string) => {
        set({ cart: get().cart.filter((order) => order.menu.id !== orderId) });
      },
      updateQuantity: (orderId: string, action: 'increase' | 'decrease') => {
        const cart = get().cart;
        const findOrder = cart.find((o) => o.menu.id === orderId);

        if (!findOrder) {
          return;
        }

        if (action === 'increase') {
          findOrder.quantity += 1;
        } else {
          findOrder.quantity =
            findOrder.quantity > 1
              ? findOrder.quantity - 1
              : findOrder.quantity;
        }

        set({ cart });
      },
      showCart: false,
      toggleCart: () => {
        set({ showCart: !get().showCart });
      },
    }),
    {
      name: 'order-storage',
    }
  )
);

export default useCart;
