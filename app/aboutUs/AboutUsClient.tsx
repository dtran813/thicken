import { aboutUs, aboutUsLogo } from '@/public';
import Image from 'next/image';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';

const AboutUsClient = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-7xl pb-10">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-1">
            <Image src={aboutUs} alt="Our story" />
          </div>

          <div className="mb-10 flex flex-1 flex-col px-5 py-10">
            <div className="flex justify-center px-5 pb-5">
              <Image src={aboutUsLogo} alt="Products from chickens" />
            </div>
            <p className="p-10 text-base text-black/70 sm:leading-loose lg:text-xl">
              Thicken Thighs: where chickens achieve superstar status and
              flavors burst with mouthwatering madness. We are a fearless team
              of culinary rebels, serving up slow-cooked marvels that will have
              you clucking for more. Embark on an unforgettable flavor journey
              that will redefine your chicken experience. Get ready to indulge
              in poultry perfection and unleash your inner chicken aficionado!
            </p>
          </div>
        </div>

        <FeaturedSection />
      </div>
    </div>
  );
};

export default AboutUsClient;
