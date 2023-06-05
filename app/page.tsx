import Button from './components/Button';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import FreeMenu from './components/FreeMenu/FreeMenu';
import Sauces from './components/sauces/page';
import ContactUsSection from './contactUs/ContactUsSection';

export default function Home() {
  return (
    <>
      <main className="relative bg-orange-200">
        <div className="absolute -top-20 left-0 h-screen w-full flex-col bg-hero bg-cover bg-center bg-no-repeat" />
        <div className="mx-auto max-w-7xl pb-10">
          {/* height = 100vh - header height */}
          <section
            id="hero"
            className="relative flex h-[calc(100vh-5rem)] p-10"
          >
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
                , you need to prepare for a culinary adventure that is so slow,
                it will have you questioning the meaning of haste in the most
                outrageously delicious way possible.
              </p>
              <Button>Make A Reservation</Button>
            </div>
            <div className="hidden flex-1 md:block"></div>
          </section>

          <FeaturedSection />

          <FreeMenu />

          <Sauces />

          <ContactUsSection />
        </div>
      </main>
    </>
  );
}
