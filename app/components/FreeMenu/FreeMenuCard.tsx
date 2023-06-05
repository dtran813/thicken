import Image, { StaticImageData } from 'next/image';

interface FreeMenuProps {
  name: string;
  desc: string;
  imgSrc: StaticImageData;
}

const FreeMenuCard: React.FC<FreeMenuProps> = ({ name, desc, imgSrc }) => {
  return (
    <>
      <div className="border border-dotted border-black p-10">
        <div className="w-80">
          <div className="h-56">
            <Image
              src={imgSrc}
              alt={`${name}: ${desc}`}
              className="rounded-md"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-3xl font-bold text-black/80">{name}</h3>
            <p className="mt-3 text-lg text-black/70">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeMenuCard;
