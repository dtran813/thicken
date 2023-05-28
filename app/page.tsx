import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <header className="h-screen bg-hero bg-cover bg-center bg-no-repeat">
        <div className="flex items-center bg-slate-200/75 p-5">
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
      </header>

      <section className="m-5">
        <h2 className="mb-3 text-2xl">
          Welcome to Thicken Thighs: Where Chickens Are Our Slow-Roasted
          Superstars!
        </h2>

        <p className="mb-5">
          At Thicken Thighs, we take pride in being the premier slow food
          restaurant in the industry. Our commitment to slowness and
          chicken-centric cuisine sets us apart. With a touch of sarcasm and a
          dash of humor, we&apos;re here to serve up a memorable dining
          experience that will leave you clucking for more!
        </p>

        <h2 className="mb-3 text-2xl">Our Commitment to Slowness</h2>

        <p className="mb-5">
          We&apos;ve mastered the art of slow cooking, taking our time to craft
          dishes that burst with amazing flavors. We&apos;re not just slow,
          we&apos;re award-winningly slow! Join us on a culinary adventure where
          every bite is worth the wait.
        </p>

        <h2 className="mb-3 text-2xl">Chicken Reproduction Fund</h2>

        <p className="mb-5">
          At Thicken Thighs, our profits are dedicated to supporting our
          backyard chickens. By dining with us, you contribute to their romantic
          endeavors. Please be patient, as our feathered friends need time to do
          their thing—reproduce. It&apos;s all part of our commitment to
          sustainable poultry practices.
        </p>

        <h2 className="mb-3 text-2xl">Introducing Our Free Menu</h2>

        <div className="flex flex-wrap justify-between">
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3 className="mt-0 text-xl">Chicken Egg</h3>
            <p className="mb-5">
              A delicately cooked egg straight from the source. Breakfast and
              dinner collide in this delectable treat.
            </p>
          </div>
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3 className="mt-0 text-xl">Chicken Pancreas</h3>
            <p className="mb-5">
              Embark on a culinary adventure with our unconventional offering.
              This dish is for the bold and daring!
            </p>
          </div>
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3 className="mt-0 text-xl">Chicken Head</h3>
            <p className="mb-5">
              Make a lasting impression with this unique delicacy that&apos;ll
              leave you clucking for more.
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
              A unique combination of walnut essence and the mysterious aroma of
              a skunk.
            </p>
          </div>
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3>Not Really A Special Sauce (Weak Sauce)</h3>
            <p className="mb-5">
              A sauce that challenges the boundaries of mediocrity. Prepare for
              a taste adventure!
            </p>
          </div>
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3>House Special Saliva</h3>
            <p className="mb-5">
              A magical sauce crafted from unicorn saliva. It&apos;s mystical,
              it&apos;s enchanting—it&apos;s one of a kind.
            </p>
          </div>
          <div className="mb-5 w-80 bg-gray-200 p-5">
            <h3>More Special Than You Sauce</h3>
            <p className="mb-5">
              A sauce that outshines even the most special of individuals. Brace
              yourself for an extraordinary experience!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
