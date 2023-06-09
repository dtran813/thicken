import { intro } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import Button from './components/Button';
import Hero from './components/Hero';
import FreeMenu from './components/freeMenu/FreeMenu';
import Sauces from './components/sauces/Sauces';
import ContactUsSection from './contactUs/ContactUsSection';

export default function Home() {
  return (
    <>
      <main className="relative bg-orange-200">
        <div className="absolute -top-20 left-0 h-screen w-full flex-col bg-hero bg-cover bg-center bg-no-repeat" />
        <div className="mx-auto max-w-screen-xl pb-10">
          <Hero />

          <section id="intro" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    alt="Introduction image"
                    src={intro}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-orange-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-100"></span>

                <div className="p-8 sm:p-16 lg:p-6 xl:p-20">
                  <h2 className="mb-3 text-6xl font-semibold">Why So Slow?</h2>

                  <p className="mb-4 mt-4 text-lg text-black/70">
                    We&apos;ve never asked why you eat so slow, so stop asking
                    us why are we so slow. Don&apos;t you see the award we win
                    every year? We ranked{' '}
                    <span className="text-xl font-bold">#1 </span>
                    in the market for being the slowest food service for more
                    than 50 years for no reason. So stop asking us that stupid
                    question, just sit back, relax, take a nap, and enjoy the
                    food.
                  </p>
                  <Button className="mt-4 bg-orange-400 px-8 py-4 text-lg font-medium text-white/90">
                    <Link href="/aboutUs">More Info</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <FreeMenu />

          <Sauces />

          <ContactUsSection />
        </div>
      </main>
    </>
  );
}
