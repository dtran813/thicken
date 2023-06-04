import { featuredSection } from '@/app/constants';
import FeaturedSectionCard from './FeaturedSectionCard';

const FeaturedSection = () => {
  return (
    <>
      {featuredSection.map((sectionData, index) => (
        <FeaturedSectionCard
          key={index}
          sectionData={sectionData}
          rowReverse={index % 2 !== 0}
        ></FeaturedSectionCard>
      ))}
    </>
  );
};

export default FeaturedSection;
