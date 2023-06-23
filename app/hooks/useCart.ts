import { Menu } from '@prisma/client';
import { create } from 'zustand';

interface Order {
  menu: Menu;
  quantity: number;
}

interface CartStore {
  cart: Order[];
  addToCart: (order: Order) => void;
  removeFromCart: (orderId: string) => void;
  showCart: boolean;
  toggleCart: () => void;
}

const useCart = create<CartStore>((set, get) => ({
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
  showCart: false,
  toggleCart: () => {
    set({ showCart: get().showCart });
  },
}));

export default useCart;
