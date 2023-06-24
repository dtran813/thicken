import { Menu } from '@prisma/client';

export type Order = {
  menu: Menu;
  quantity: number;
};
