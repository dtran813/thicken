import Link from 'next/link';
import { navLinks } from '../constants';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-10">
      <div className="flex h-20 items-center bg-orange-200/75 p-5">
        <div className="flex flex-1 justify-start">
          <h1 className="text-2xl font-bold">
            <Link href="/">Thicken Thighs</Link>
          </h1>
        </div>

        <nav className="flex flex-1 justify-center">
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

        <div className="flex flex-1 justify-end">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
