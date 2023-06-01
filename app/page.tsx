import { aboutUs, chickens, slow } from '@/public';
import Image from 'next/image';
import Button from './components/Button';
import Footer from './components/Footer';
import Menu from './components/FreeMenu/page';
import Sauces from './components/sauces/page';
import ContactUs from './contactUs/page';

export default function Home() {
  return (
    <>
      <main className='relative bg-orange-200'>
        <div className='absolute -top-20 left-0 h-screen w-full flex-col bg-hero bg-cover bg-center bg-no-repeat' />
        <div className='mx-auto max-w-7xl pb-10'>
          {/* height = 100vh - header height */}
          <section
            id='hero'
            className='relative flex h-[calc(100vh-5rem)] p-10'
          >
            <div className='m-auto flex max-w-xl flex-col xl:max-w-3xl'>
              <p className='mb-10 text-3xl font-bold text-white sm:text-5xl md:text-6xl xl:text-7xl'>
                <span className='block'>Unleash Boldness,</span>
                <span className='mt-3 block'>Embrace Slowness.</span>
              </p>
              <p className='mb-10 text-lg text-white/80 sm:text-xl sm:leading-loose'>
                At{' '}
                <span className='relative mr-1 inline-block transition before:absolute before:-inset-x-1 before:-inset-y-px before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105'>
                  <span className='relative font-semibold'>Thicken Thighs</span>
                </span>
                , you need to prepare for a culinary adventure that is so slow,
                it will have you questioning the meaning of haste in the most
                outrageously delicious way possible.
              </p>
              <Button>Make A Reservation</Button>
            </div>
            <div className='hidden flex-1 md:block'></div>
          </section>

          <section id='aboutUs' className='flex items-center'>
            <div className='flex-1'>
              <div className='flex flex-col px-10'>
                <p className='text-lg italic text-black/70'>- About Us -</p>
                <h2 className='mt-9 text-6xl font-semibold'>
                  Welcome to{' '}
                  <span className='relative mr-1 inline-block transition before:absolute before:-inset-x-1 before:-inset-y-px before:block before:-skew-y-3 before:bg-orange-400 hover:scale-105'>
                    <span className='relative font-semibold'>
                      Thicken Thighs
                    </span>
                  </span>
                  : Where Chickens Are Our Superstars!
                </h2>
                <p className='mx-auto my-10 text-lg leading-loose text-black/70'>
                  At Thicken Thighs, we take pride in being the premier
                  slow-food restaurant in the industry. Our commitment to
                  slowness and chicken-centric cuisine sets us apart. With the
                  quality coming from the slowest staff and thickest chickens,
                  we&apos;re here to serve up a memorable dining experience that
                  will leave you clucking for more!
                </p>
              </div>
            </div>

            <div className='flex flex-1'>
              <Image src={aboutUs} alt='Inside a restaurant' />
            </div>
          </section>

          <section
            id='commitment'
            className='flex flex-row-reverse items-center'
          >
            <div className='flex-1'>
              <div className='flex flex-col px-10'>
                <p className='text-lg italic text-black/70'>- Commitment -</p>
                <h2 className='mt-9 text-6xl font-semibold'>
                  Our Commitment to Slowness
                </h2>
                <p className='mx-auto my-10 text-lg leading-loose text-black/70'>
                  You won&apos;t find a restaurant slower than us — seriously,
                  we&apos;ve won awards for it! We take our time with each and
                  every meal, ensuring that the flavors develop at a
                  snail&apos;s pace to reach maximum deliciousness.! Join us on
                  a culinary adventure where every bite is worth the wait.
                </p>
              </div>
            </div>

            <div className='flex flex-1'>
              <Image src={slow} alt='A snail on a long leaf' />
            </div>
          </section>

          <section id='profits' className='flex items-center'>
            <div className='flex-1'>
              <div className='flex flex-col px-10'>
                <p className='text-lg italic text-black/70'>- Profits -</p>
                <h2 className='mt-9 text-6xl font-semibold'>
                  Chicken Reproduction Fund
                </h2>
                <p className='mx-auto my-10 text-lg leading-loose text-black/70'>
                  At Thicken Thighs, our profits are dedicated to supporting our
                  backyard chickens. By dining with us, you contribute to their
                  romantic endeavors. Please be patient, as our feathered
                  friends need time to do their thing — reproduce. It&apos;s all
                  part of our commitment to sustainable poultry practices.
                </p>
              </div>
            </div>

            <div className='flex flex-1'>
              <Image src={chickens} alt='Chickens in a garden' />
            </div>
          </section>

          <Menu />

          <Sauces />

          <ContactUs />
        </div>
      </main>

      <Footer />
    </>
  );
}
