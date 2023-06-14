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
    className={`flex flex-col ${
      rowReverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } mt-14 items-center md:mt-0`}
  >
    <div className="flex-1 self-start md:py-10 xl:py-16">
      <div className="flex flex-col px-5 md:px-3 lg:px-10">
        <p className="text-lg font-bold italic text-black/70">
          - {sectionData.title} -
        </p>
        <h2 className="mt-6 text-3xl font-semibold lg:mt-16 lg:text-4xl">
          {sectionData.heading}
        </h2>
        <p className="mx-auto mb-10 mt-5 text-base leading-relaxed text-black/70 sm:leading-loose md:mt-10 lg:text-lg lg:leading-loose">
          {sectionData.content}
        </p>
      </div>
    </div>

    <div className="flex-1">
      <div className="relative h-80 w-96 px-3 sm:h-[500px] sm:w-[600px] md:h-[800px] md:w-full md:py-10 lg:px-10 xl:py-16 2xl:px-0">
        <Image
          src={sectionData.imgSrc}
          alt={sectionData.alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default FeaturedSectionCard;
