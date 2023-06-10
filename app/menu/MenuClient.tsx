import { chickenProducts } from '@/public';
import Image from 'next/image';

const MenuClient = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-7xl pb-10">
        <div className="grid grid-cols-1 place-items-center px-5 pb-10">
          <div className="col-span-full row-span-full">
            <Image src={chickenProducts} alt="Products from chickens" />
          </div>
          <h1 className="col-span-full row-span-full mb-8 flex-1 text-center text-5xl font-black italic tracking-tight text-white md:mb-0 lg:text-8xl">
            <span className="block opacity-100">Menu</span>
            <span className="block -translate-y-8 translate-x-10 opacity-80">
              Menu
            </span>
            <span className="block -translate-y-16 translate-x-20 opacity-60">
              Menu
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MenuClient;
