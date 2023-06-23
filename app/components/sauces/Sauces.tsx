import { saucesInfo } from '@/app/utils/constants';
import SauceInfo from './SauceInfo';

const Sauces = () => {
  return (
    <section
      id="sauces"
      className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
    >
      <h2 className="mb-3 text-center text-6xl font-semibold">
        Special Sauce Extravaganza
      </h2>
      <p className="mt-3 text-center text-xl leading-loose text-black/70">
        Ketchup? Honey Mustard? BBQ? Boring. Let&apos;s see what we offer.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-y-6 xl:gap-x-6">
        {saucesInfo.map(({ name, desc, imgSrc }) => (
          <SauceInfo key={name} imgSrc={imgSrc} name={name} desc={desc} />
        ))}
      </div>
    </section>
  );
};

export default Sauces;
