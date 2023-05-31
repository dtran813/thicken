import {
  aboutUs,
  chickenHeart,
  chickenKids,
  chickens,
  egg,
  slow,
} from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { CiWarning } from 'react-icons/ci';
import Button from './components/Button';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import ContactUs from './components/contactUs/page';
import Sauces from './components/sauces/page';
import { navLinks } from './constants';

export default function Home() {
  return (
    <>
      <header className="flex h-screen flex-col bg-hero bg-cover bg-center bg-no-repeat">
        <div className="flex items-center bg-orange-200/75 p-5">
          <div className="flex flex-1 justify-start">
            <h1 className="text-2xl font-bold">
              <Link href="/">Thicken Thighs</Link>
            </h1>
          </div>

          <nav className="flex flex-1 justify-center">
            <ul className="flex w-full list-none justify-between">
              {navLinks.map((link) => (
                <li key={link.label} className="inline-block">
                  <Link
                    href={link.url}
                    className="px-3 py-1 text-lg font-medium"
                  >
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

        <section className="flex h-full p-10">
          <div className="m-auto flex max-w-xl flex-col xl:max-w-3xl">
            <p className="mb-10 text-3xl font-bold text-white sm:text-5xl md:text-6xl xl:text-7xl">
              <span className="block">Unleash Boldness,</span>
              <span className="mt-3 block">Embrace Slowness.</span>
            </p>
            <p className="mb-10 text-lg text-white/80 sm:text-xl sm:leading-loose">
              At{' '}
              <span className="relative mr-1 inline-block transition before:absolute before:-inset-x-1 before:-inset-y-px before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105">
                <span className="relative font-semibold">Thicken Thighs</span>
              </span>
              , you need to prepare for a culinary adventure that is so slow, it
              will have you questioning the meaning of haste in the most
              outrageously delicious way possible.
            </p>
            <Button>Make A Reservation</Button>
          </div>
          <div className="hidden flex-1 md:block"></div>
        </section>
      </header>

      <main className="bg-orange-200">
        <div className="mx-auto max-w-7xl pb-10">
          <section id="aboutUs" className="flex items-center">
            <div className="flex-1">
              <div className="flex flex-col px-10">
                <p className="text-lg italic text-black/70">- About Us -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Welcome to{' '}
                  <span className="relative mr-1 inline-block transition before:absolute before:-inset-x-1 before:-inset-y-px before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105">
                    <span className="relative font-semibold">
                      Thicken Thighs
                    </span>
                  </span>
                  : Where Chickens Are Our Superstars!
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/70">
                  At Thicken Thighs, we take pride in being the premier
                  slow-food restaurant in the industry. Our commitment to
                  slowness and chicken-centric cuisine sets us apart. With the
                  quality coming from the slowest staff and thickest chickens,
                  we&apos;re here to serve up a memorable dining experience that
                  will leave you clucking for more!
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <Image src={aboutUs} alt="Inside a restaurant" />
            </div>
          </section>

          <section
            id="commitment"
            className="flex flex-row-reverse items-center"
          >
            <div className="flex-1">
              <div className="flex flex-col px-10">
                <p className="text-lg italic text-black/70">- Commitment -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Our Commitment to Slowness
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/70">
                  You won&apos;t find a restaurant slower than us — seriously,
                  we&apos;ve won awards for it! We take our time with each and
                  every meal, ensuring that the flavors develop at a
                  snail&apos;s pace to reach maximum deliciousness.! Join us on
                  a culinary adventure where every bite is worth the wait.
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <Image src={slow} alt="A snail on a long leaf" />
            </div>
          </section>

          <section id="profits" className="flex items-center">
            <div className="flex-1">
              <div className="flex flex-col px-10">
                <p className="text-lg italic text-black/70">- Profits -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Chicken Reproduction Fund
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/70">
                  At Thicken Thighs, our profits are dedicated to supporting our
                  backyard chickens. By dining with us, you contribute to their
                  romantic endeavors. Please be patient, as our feathered
                  friends need time to do their thing — reproduce. It&apos;s all
                  part of our commitment to sustainable poultry practices.
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <Image src={chickens} alt="Chickens in a garden" />
            </div>
          </section>

          <section
            id="freeMenu"
            className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
          >
            <h2 className="mb-3 text-center text-6xl font-semibold">
              Our Free Menu
            </h2>
            <p className="mt-3 text-center text-xl leading-loose text-black/70">
              We do things differently. That&apos;s why we offer this lovely
              free menu to our customers.
            </p>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="border border-dotted border-black p-10">
                <div className="w-80">
                  <div className="h-56">
                    <Image
                      src={egg}
                      alt="Sunny side-up egg"
                      className="rounded-md"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-3xl font-bold text-black/80">
                      Chicken Egg
                    </h3>
                    <p className="mt-3 text-lg text-black/70">
                      A delicately cooked egg straight from the source.
                      Breakfast and dinner collide in this delectable treat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-dotted border-black p-10">
                <div className="w-80">
                  <div className="h-56">
                    <Image
                      src={chickenHeart}
                      alt="Chicken Hearts Teriyaki"
                      className="rounded-md"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-3xl font-bold text-black/80">
                      Chicken Hearts
                    </h3>
                    <p className="mt-3 text-lg text-black/70">
                      Embark on a culinary adventure with our unconventional
                      offering. This dish is for the bold and daring!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-dotted border-black p-10">
                <div className="w-80">
                  <div className="h-56">
                    <Image
                      src={chickenKids}
                      alt="Baby chickens"
                      className="rounded-md"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-3xl font-bold text-black/80">
                      Chicken Kids
                    </h3>
                    <p className="mt-3 text-lg text-black/70">
                      We recommend adopting these adorable chicks instead of
                      eating them. They&apos;re for cuddles, not consumption!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <CiWarning size={30} className="text-red-600" />
              <p className="mx-3 text-center text-lg font-semibold italic text-red-600">
                Our free menu is limited, so please check with our slow AF staff
                for availability.
              </p>
              <CiWarning size={30} className="text-red-600" />
            </div>

            <div className="mt-10 flex justify-center">
              <Button>Explore Money Out Of The Bank Menu</Button>
            </div>
          </section>

          <Sauces />

          <ContactUs />
        </div>
      </main>

      <Footer />
    </>
  );
}
