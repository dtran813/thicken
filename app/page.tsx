import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import FreeMenu from './components/FreeMenu/FreeMenu';
import HeroSection from './components/HeroSection/HeroSection';
import Sauces from './components/sauces/page';
import ContactUsSection from './contactUs/ContactUsSection';

export default function Home() {
  return (
    <>
      <main className="relative bg-orange-200">
        <div className="absolute -top-20 left-0 h-screen w-full flex-col bg-hero bg-cover bg-center bg-no-repeat" />
        <div className="mx-auto max-w-7xl pb-10">
          {/* height = 100vh - header height */}
          <HeroSection />

          <FeaturedSection />

          <FreeMenu />

          <Sauces />

          <ContactUsSection />
        </div>
      </main>
    </>
  );
}
