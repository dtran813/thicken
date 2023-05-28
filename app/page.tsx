import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { aboutUs, slow, chickens } from '@/public';

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
              <span className="relative mr-1 inline-block before:absolute before:-inset-x-1 before:-inset-y-[1px] before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105">
                <span className="relative font-bold">Thicken Thighs</span>
              </span>
              , you need to prepare for a culinary adventure that is so slow, it
              will have you questioning the meaning of haste in the most
              outrageously delicious way possible.
            </p>
            <button className="mt-4 w-fit rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md bg-orange-400  p-3 text-lg text-white hover:scale-105 active:translate-y-1 sm:p-4">
              Make A Reservation
            </button>
          </div>
          <div className="hidden flex-1 md:block"></div>
        </section>
      </header>

      <main className="bg-orange-200">
        <div className="mx-auto max-w-7xl">
          <section id="about-us" className="flex items-center">
            <div className="flex-1">
              <div className="flex flex-col px-10">
                <p className="text-lg italic text-black/80">- About Us -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Welcome to{' '}
                  <span className="relative mr-1 inline-block before:absolute before:-inset-x-1 before:-inset-y-[1px] before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105">
                    <span className="relative font-semibold">
                      Thicken Thighs
                    </span>
                  </span>
                  : Where Chickens Are Our Superstars!
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/80">
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
                <p className="text-lg italic text-black/80">- Commitment -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Our Commitment to Slowness
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/80">
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
                <p className="text-lg italic text-black/80">- Profits -</p>
                <h2 className="mt-9 text-6xl font-semibold">
                  Chicken Reproduction Fund
                </h2>
                <p className="mx-auto my-10 text-lg leading-loose text-black/80">
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

          <section>
            <h2 className="mb-3 text-2xl">Introducing Our Free Menu</h2>

            <div className="flex flex-wrap justify-between">
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3 className="mt-0 text-xl">Chicken Egg</h3>
                <p className="mb-5">
                  A delicately cooked egg straight from the source. Breakfast
                  and dinner collide in this delectable treat.
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3 className="mt-0 text-xl">Chicken Pancreas</h3>
                <p className="mb-5">
                  Embark on a culinary adventure with our unconventional
                  offering. This dish is for the bold and daring!
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3 className="mt-0 text-xl">Chicken Head</h3>
                <p className="mb-5">
                  Make a lasting impression with this unique delicacy
                  that&apos;ll leave you clucking for more.
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3 className="mt-0 text-xl">Chicken Kids</h3>
                <p className="mb-5">
                  We recommend adopting these adorable chicks instead of eating
                  them. They&apos;re for cuddles, not consumption!
                </p>
              </div>
            </div>

            <h2 className="mb-3 text-2xl">Special Sauce Extravaganza</h2>

            <div className="flex flex-wrap justify-between">
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3>Walnut Honey Skunk</h3>
                <p className="mb-5">
                  A unique combination of walnut essence and the mysterious
                  aroma of a skunk.
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3>Not Really A Special Sauce (Weak Sauce)</h3>
                <p className="mb-5">
                  A sauce that challenges the boundaries of mediocrity. Prepare
                  for a taste adventure!
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3>House Special Saliva</h3>
                <p className="mb-5">
                  A magical sauce crafted from unicorn saliva. It&apos;s
                  mystical, it&apos;s enchanting—it&apos;s one of a kind.
                </p>
              </div>
              <div className="mb-5 w-80 bg-gray-200 p-5">
                <h3>More Special Than You Sauce</h3>
                <p className="mb-5">
                  A sauce that outshines even the most special of individuals.
                  Brace yourself for an extraordinary experience!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
