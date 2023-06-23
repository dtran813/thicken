'use client';

import { navLinks } from '@/app/utils/constants';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import SocialLinks from '../SocialLinks';
import MobileNav from './MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky left-0 top-0 z-50">
      <div className="flex h-20 items-center justify-between bg-orange-200/75 p-5">
        <div className="flex justify-start xl:basis-1/3">
          <h1 className="text-2xl font-bold">
            <Link href="/">Thicken Thighs</Link>
          </h1>
        </div>

        <nav className="hidden justify-center lg:flex xl:basis-1/3">
          <ul className="flex w-full list-none justify-between">
            {navLinks.map((link) => (
              <li key={link.label} className="inline-block">
                <Link href={link.url} className="px-3 py-1 text-lg font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden justify-end lg:flex xl:basis-1/3">
          <SocialLinks />
        </div>

        <button
          className="absolute right-5 top-6 block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu size={32} />
        </button>

        {isMenuOpen && (
          <MobileNav isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
