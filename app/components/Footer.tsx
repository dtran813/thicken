import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { navLinks } from '../constants';
import Icon from './Icon';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-orange-300 pb-10 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold">
              Thicken Thighs
            </Link>
            <p className="mb-5 mt-3 text-center text-xl leading-loose text-black/70">
              With super slow services comes super tasty chickens
            </p>
            <SocialLinks />
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl uppercase">Explore the site</h5>

            <nav className="flex justify-start border-t-2 border-orange-600 pt-4">
              <ul className="flex w-full list-none flex-col justify-between">
                {navLinks.map((link) => (
                  <li key={link.label} className="mb-3 inline-block">
                    <Link
                      href={link.url}
                      className="py-1 text-base text-black/70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col">
            <h5 className="text-xl uppercase">Contact Us</h5>
            <address
              className="border-t-2 border-orange-600 pt-2 text-black/70
            "
            >
              <div className="mt-3 flex items-center">
                <Icon icon={FiMapPin} color="rgb(0 0 0 / 0.7)" />
                <p className="ml-3">
                  Somewhere near Lake Tahoe, <br />
                  <span className="mt-2 inline-block">
                    Lake Tahoe, CA or NV, 99999
                  </span>
                </p>
              </div>
              <div className="mt-3 flex items-center">
                <Icon icon={FiPhone} color="rgb(0 0 0 / 0.7)" />
                <p className="ml-3">123-456-7890</p>
              </div>
              <div className="mt-3 flex items-center">
                <Icon icon={FiMail} color="rgb(0 0 0 / 0.7)" />
                <p className="ml-3">info@thicken.com</p>
              </div>
            </address>
          </div>
        </div>
        <p className="mt-10 text-center text-black/70">
          &copy; {new Date().getFullYear()} Thicken Thighs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
