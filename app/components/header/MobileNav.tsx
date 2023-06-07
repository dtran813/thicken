import { navLinks } from '@/app/constants';
import Link from 'next/link';
import FocusLock from 'react-focus-lock';
import { FiXSquare } from 'react-icons/fi';
import { RemoveScroll } from 'react-remove-scroll';
import Button from '../Button';
import SocialLinks from '../SocialLinks';

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu }) => {
  return (
    <FocusLock>
      <RemoveScroll>
        <div className="absolute inset-0 h-screen w-full bg-orange-200/90">
          <nav className="flex h-full flex-col items-center justify-center">
            <ul className="mb-5 flex list-none flex-col">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className="mb-3 inline-block px-3 py-1 font-mono text-3xl font-bold uppercase"
                  >
                    <span className="mr-4 ">{index + 1}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mb-10">
              <SocialLinks />
            </div>

            <Button roundedBorder={false} onClick={() => toggleMenu(!isOpen)}>
              <p className="flex items-center">
                <FiXSquare size={24} className="mr-3" />
                <span className="text-xl">Dismiss</span>
              </p>
            </Button>
          </nav>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};

export default MobileNav;
