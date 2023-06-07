'use client';

import Link from 'next/link';
import { useState } from 'react';
import FocusLock from 'react-focus-lock';
import { FiMenu, FiXSquare } from 'react-icons/fi';
import { RemoveScroll } from 'react-remove-scroll';
import { navLinks } from '../constants';
import Button from './Button';
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
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu size={32} />
        </button>

        {isMenuOpen && (
          <FocusLock>
            <RemoveScroll>
              <div className="absolute left-0 top-0 h-screen w-full bg-orange-200/90 transition duration-500">
                <nav className="flex h-full flex-col items-center justify-center">
                  <ul className="flex list-none flex-col">
                    {navLinks.map((link, index) => (
                      <li key={link.label}>
                        <Link
                          href={link.url}
                          className="inline-block px-3 py-1 font-mono text-3xl font-bold"
                        >
                          <span className="mr-4 ">{index + 1}</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    roundedBorder={false}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <p className="flex items-center">
                      <FiXSquare size={24} className="mr-3" />
                      <span className="text-xl">Dismiss</span>
                    </p>
                  </Button>
                </nav>
              </div>
            </RemoveScroll>
          </FocusLock>
        )}
      </div>
    </header>
  );
};

export default Header;
