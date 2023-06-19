import { Menu } from '@prisma/client';
import Image from 'next/image';
import Button from '../components/Button';

interface MenuCardProps {
  menu: Menu;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
  return (
    <div className="relative h-96 w-72 cursor-pointer overflow-hidden rounded-xl bg-orange-300/50">
      <div className="relative h-52 w-full ">
        <Image
          fill
          src={menu.imgUrl}
          alt={menu.name}
          className="h-full w-full object-cover transition hover:scale-105"
        />
      </div>
      <div className="mt-2 flex flex-col p-4">
        <p className="text-xl font-bold">{menu.name}</p>
        <p className="mt-1 text-base">
          <span className="font-semibold">{menu.price}</span> |{' '}
          <span>{menu.calories} cal</span>
        </p>
        <Button className="absolute bottom-4 right-4 bg-orange-400 px-3 py-2 text-lg text-white/80">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
