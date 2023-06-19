import { prisma } from '../server/db';
import MenuClient from './MenuClient';

const MenuPage = async () => {
  const menu = await prisma.menu.findMany();

  return <MenuClient menu={menu} />;
};

export default MenuPage;
