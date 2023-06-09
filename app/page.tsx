import Hero from './components/Hero';
import FeaturedSection from './components/featuredSection/FeaturedSection';
import FreeMenu from './components/freeMenu/FreeMenu';
import Sauces from './components/sauces/page';
import ContactUsSection from './contactUs/ContactUsSection';

export default function Home() {
  return (
    <>
      <main className="relative bg-orange-200">
        <div className="absolute -top-20 left-0 h-screen w-full flex-col bg-hero bg-cover bg-center bg-no-repeat" />
        <div className="mx-auto max-w-7xl pb-10">
          {/* height = 100vh - header height */}
          <Hero />

          <FeaturedSection />

          <FreeMenu />

          <Sauces />

          <ContactUsSection />
        </div>
      </main>
    </>
  );
}
