'use client';

import { grilled_chicken } from '@/public';
import { Menu } from '@prisma/client';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Button';
import OrderModal from '../components/OrderModal';
import useOrderModal from '../components/hooks/useOrderModal';
import { categories } from '../utils/constants';
import MenuCard from './MenuCard';

interface MenuClientProps {
  menu: Menu[];
}

const MenuClient: React.FC<MenuClientProps> = ({ menu }) => {
  const orderModal = useOrderModal();
  const [currentMenuCategory, setCurrentMenuCategory] = useState(menu);
  const [selectedItem, setSelectedItem] = useState(menu[0]);

  return (
    <div className="relative bg-orange-200">
      <OrderModal isOpen={orderModal.isOpen} menu={selectedItem} />
      <div className="mx-auto max-w-screen-xl pb-10">
        <h1 className="visually-hidden">Menu</h1>
        <div className="flex items-center gap-5 py-5">
          <div className="flex flex-1 flex-col p-5">
            <p className="mb-3 text-base font-medium lg:mb-6 lg:text-xl">
              Most Popular
            </p>
            <p className="text-special mb-3 text-2xl font-bold lg:text-4xl">
              Grilled Chicken
            </p>
            <p className="mb-6 text-sm text-black/70 lg:text-lg">
              Big fat chicken thighs grill with our special sauce and serve with
              roasted corn. Tender, juicy, and packed with flavor.
            </p>
            <Button
              className="mt-4 bg-orange-400 px-6 py-3 text-lg font-medium text-white/90"
              onClick={orderModal.onOpen}
            >
              Order Now
            </Button>
          </div>
          <div className="flex-1 p-5">
            <Image
              src={grilled_chicken}
              alt="Grilled Chicken"
              className="rounded-lg transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 p-3 xl:flex-row">
          <div className="flex flex-col bg-orange-400 uppercase xl:w-96">
            <h2 className="hidden p-4 text-xl font-extrabold xl:block">Menu</h2>
            <nav className="overflow-x-auto border-black p-6 xl:border-t-2 xl:p-0 xl:pl-4 xl:pt-2">
              <ul className="flex flex-row text-xl font-bold xl:flex-col xl:text-base">
                {categories.map((category, index) => (
                  <li
                    key={category}
                    className={`whitespace-nowrap xl:my-2 xl:pr-0 ${
                      index === categories.length - 1 ? 'pr-5' : 'pr-10'
                    }`}
                  >
                    <a
                      href={`#${category}`}
                      className="border-red-600 hover:text-red-600 focus:border-b-2 focus:text-red-600"
                      onClick={() => {
                        const newMenu = menu.filter(
                          (item) =>
                            item.category.toLowerCase() ===
                            category.toLowerCase()
                        );

                        setCurrentMenuCategory(newMenu);
                      }}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-10">
            {currentMenuCategory.map((item) => (
              <MenuCard
                key={item.name}
                menu={item}
                setMenu={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuClient;
