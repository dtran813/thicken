import Image, { StaticImageData } from 'next/image';

interface SectionData {
  id: string;
  title: string;
  heading: string;
  content: string;
  imgSrc: StaticImageData;
  alt: string;
}

interface FeaturedSectionProps {
  sectionData: SectionData;
  rowReverse: boolean;
}

const FeaturedSectionCard: React.FC<FeaturedSectionProps> = ({
  sectionData,
  rowReverse,
}) => (
  <section
    id={sectionData.id}
    className={`flex ${rowReverse ? 'flex-row-reverse' : ''} items-center`}
  >
    <div className="flex-1">
      <div className="flex flex-col px-10">
        <p className="text-lg italic text-black/70">- {sectionData.title} -</p>
        <h2 className="mt-9 text-6xl font-semibold">{sectionData.heading}</h2>
        <p className="mx-auto my-10 text-lg leading-loose text-black/70">
          {sectionData.content}
        </p>
      </div>
    </div>

    <div className="flex flex-1">
      <Image src={sectionData.imgSrc} alt={sectionData.alt} />
    </div>
  </section>
);

export default FeaturedSectionCard;
