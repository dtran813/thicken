import Image, { StaticImageData } from 'next/image';

interface SauceInfoProps {
  name: string;
  desc: string;
  imgSrc: StaticImageData;
}

const SauceInfo: React.FC<SauceInfoProps> = ({ name, desc, imgSrc }) => {
  return (
    <div className="flex w-[500px] items-center gap-x-3 p-2 sm:gap-x-5 sm:p-4">
      <div>
        <Image
          src={imgSrc}
          alt={`${name}: ${desc}`}
          className="rounded-full border-4 border-dotted border-orange-400"
        />
      </div>

      <div className="basis-3/4 sm:flex-1">
        <h3 className="text-xl font-bold text-black/80 md:text-2xl">{name}</h3>
        <p className="mt-1 text-base text-black/70 sm:mt-3 md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SauceInfo;
