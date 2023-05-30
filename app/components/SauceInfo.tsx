import Image, { StaticImageData } from 'next/image';

interface SauceInfoProps {
  name: string;
  desc: string;
  imgSrc: StaticImageData;
}

const SauceInfo: React.FC<SauceInfoProps> = ({ name, desc, imgSrc }) => {
  return (
    <div className="w-[500px] p-5">
      <div>
        <Image src={imgSrc} alt={`${name}: ${desc}`} />
      </div>
      <h3 className="text-3xl font-bold text-black/80">{name}</h3>
      <p className="mt-3 text-lg text-black/70">{desc}</p>
    </div>
  );
};

export default SauceInfo;
