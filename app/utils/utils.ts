import { Order } from './types';

export const calculateTotal = (cart: Order[]) => {
  if (!cart) {
    return;
  }
  const total = cart.reduce(
    (acc, order) => acc + order.menu.price * order.quantity,
    0
  );
  return total.toFixed(2);
};

export const calculateQuantity = (cart: Order[]) => {
  if (!cart) {
    return;
  }
  return cart.reduce((acc, order) => acc + order.quantity, 0);
};
