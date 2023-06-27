import { aboutUs, aboutUsLogo } from '@/public';
import Image from 'next/image';
import FeaturedSection from '../components/featuredSection/FeaturedSection';

const AboutUsClient = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-screen-xl pb-10">
        <div className="flex flex-col items-center md:flex-row xl:h-[calc(100vh-5rem)]">
          <div className="h-96 w-96 flex-1 p-5 md:h-auto md:w-auto">
            <Image
              src={aboutUs}
              alt="Our story"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col px-5 py-5 lg:py-10">
            <div className="flex justify-center px-5 pb-5">
              <Image src={aboutUsLogo} alt="Products from chickens" />
            </div>
            <p className="text-base text-black/70 sm:leading-loose lg:text-xl lg:leading-relaxed xl:p-5">
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
