import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { navLinks } from '../utils/constants';
import Icon from './Icon';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-orange-300 pt-10">
      <div className="mx-auto max-w-screen-xl pb-10">
        <div className="mx-auto flex flex-col justify-around px-10 lg:flex-row lg:px-0">
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold">
              Thicken Thighs
            </Link>
            <p className="mb-5 mt-3 text-base leading-loose text-black/70 xl:text-xl">
              With super slow services comes super tasty chickens
            </p>
            <SocialLinks />
          </div>

          <div className="mt-8 flex flex-col lg:mt-0">
            <h5 className="w-fit border-b-2 border-orange-600 text-xl uppercase">
              Explore the site
            </h5>

            <nav className="flex justify-start pt-4">
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

          <div className="mt-8 flex flex-col lg:mt-0">
            <h5 className="w-fit border-b-2 border-orange-600 text-xl uppercase">
              Contact Us
            </h5>
            <address className="pt-2 text-black/70">
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
