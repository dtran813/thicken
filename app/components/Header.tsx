'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../constants';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky left-0 top-0 z-10">
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
          className="block transition-all duration-500 ease-out lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`mb-1 h-[3px] w-[30px] bg-white transition duration-500 ease-out ${
              isMenuOpen
                ? 'translate-x-[6px] translate-y-[8px] rotate-[225deg]'
                : ''
            } `}
          />
          <div
            className={`mb-1 h-[3px] w-[30px] bg-white transition-all duration-500 ease-out ${
              isMenuOpen ? 'rotate-180 opacity-0' : ''
            }`}
          />
          <div
            className={`mb-1 h-[3px] w-[30px] bg-white transition duration-500 ease-out ${
              isMenuOpen
                ? '-translate-y-[6px] translate-x-[6px] rotate-[135deg]'
                : ''
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
