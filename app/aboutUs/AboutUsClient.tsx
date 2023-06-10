import { aboutUsLogo, line } from '@/public';
import Image from 'next/image';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';

const AboutUsClient = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-7xl pb-10">
        <div className="flex justify-center p-5 pb-10">
          <Image src={aboutUsLogo} alt="Products from chickens" />
        </div>
        <div className="mb-10 flex items-center px-5 py-10">
          <div className="flex-1">
            <Image src={line} alt="Decoration line" />
            <h1 className="my-8 text-5xl font-black uppercase tracking-tight lg:text-6xl">
              <span className="-mt-3 block opacity-90">Our Story</span>
              <span className="-mt-3 block opacity-60">Our Story</span>
              <span className="-mt-3 block opacity-30">Our Story</span>
              <span className="-mt-3 block opacity-10">Our Story</span>
            </h1>
            <Image src={line} alt="Decoration line" />
          </div>

          <p className="flex-1 p-10 text-base text-black/70 sm:leading-loose lg:text-xl">
            Thicken Thighs: where chickens achieve superstar status and flavors
            burst with mouthwatering madness. We are a fearless team of culinary
            rebels, serving up slow-cooked marvels that will have you clucking
            for more. Embark on an unforgettable flavor journey that will
            redefine your chicken experience. Get ready to indulge in poultry
            perfection and unleash your inner chicken aficionado!
          </p>
        </div>

        <FeaturedSection />
      </div>
    </div>
  );
};

export default AboutUsClient;
