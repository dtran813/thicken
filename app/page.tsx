import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { CiWarning } from 'react-icons/ci';
import {
  aboutUs,
  slow,
  chickens,
  egg,
  chickenHeart,
  chickenKids,
} from '@/public';

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
              <li className="inline-block">
                <Link href="#" className="px-3 py-1 text-lg font-medium">
                  Home
                </Link>
              </li>
              <li className="inline-block">
                <Link href="#" className="px-3 py-1 text-lg font-medium">
                  Menu
                </Link>
              </li>
              <li className="inline-block">
                <Link href="#" className="px-3 py-1 text-lg font-medium">
                  About
                </Link>
              </li>
              <li className="inline-block">
                <Link href="#" className="px-3 py-1 text-lg font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 justify-end">
            <div className="flex w-40 justify-between">
              <Link href="/">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black">
                  <FiInstagram size={22} />
                </span>
              </Link>
              <Link href="/">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black">
                  <FiFacebook size={22} />
                </span>
              </Link>
              <Link href="/">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black">
                  <FiTwitter size={22} />
                </span>
              </Link>
            </div>
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
            <button className="mt-4 w-fit rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md bg-orange-400  p-3 text-lg text-white/90 transition hover:scale-105 active:translate-y-1 sm:p-4">
              Make A Reservation
            </button>
          </div>
          <div className="hidden flex-1 md:block"></div>
        </section>
      </header>

      <main className="bg-orange-200">
        <div className="mx-auto max-w-7xl">
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
            className="mt-20 border-t-2 border-dotted border-orange-600 pt-10"
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
              <button className="mt-4 w-fit rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md bg-orange-400  p-3 text-lg text-white/90 transition hover:scale-105 active:translate-y-1 sm:p-4">
                Explore Money Out Of The Bank Menu
              </button>
            </div>
          </section>

          <section
            id="sauces"
            className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
          >
            <h2 className="mb-3 text-center text-6xl font-semibold">
              Special Sauce Extravaganza
            </h2>
            <p className="mt-3 text-center text-xl leading-loose text-black/70">
              Ketchup? Honey Mustard? BBQ? Boring. Let&apos;s see what we offer.
            </p>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-[500px] p-5">
                <h3 className="text-3xl font-bold text-black/80">
                  Walnut Honey Skunk
                </h3>
                <p className="mt-3 text-lg text-black/70">
                  A unique combination of walnut essence and the mysterious
                  aroma of a skunk.
                </p>
              </div>

              <div className="w-[500px] p-5">
                <h3 className="text-3xl font-bold text-black/80">
                  Not Really A Special Sauce (Weak Sauce)
                </h3>
                <p className="mt-3 text-lg text-black/70">
                  A sauce that challenges the boundaries of mediocrity. Prepare
                  for a taste adventure!
                </p>
              </div>

              <div className="w-[500px] p-5">
                <h3 className="text-3xl font-bold text-black/80">
                  House Special Saliva
                </h3>
                <p className="mt-3 text-lg text-black/70">
                  A magical sauce crafted from unicorn saliva. It&apos;s
                  mystical, it&apos;s enchanting—it&apos;s one of a kind.
                </p>
              </div>

              <div className="w-[500px] p-5">
                <h3 className="text-3xl font-bold text-black/80">
                  More Special Than You Sauce
                </h3>
                <p className="mt-3 text-lg text-black/70">
                  A sauce that outshines even the most special of individuals.
                  Brace yourself for an extraordinary experience!
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"></section>
        </div>
      </main>
    </>
  );
}
