import { freeMenu } from '@/app/constants';
import { CiWarning } from 'react-icons/ci';
import Button from '../Button';
import FreeMenuCard from './FreeMenuCard';

const FreeMenu = () => {
  return (
    <section
      id="freeMenu"
      className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
    >
      <h2 className="mb-3 text-center text-6xl font-semibold">Our Free Menu</h2>
      <p className="mt-3 text-center text-xl leading-loose text-black/70">
        We do things differently. That&apos;s why we offer this lovely free menu
        to our customers.
      </p>
      <div className="mt-10 flex flex-wrap justify-center">
        {freeMenu.map(({ name, desc, imgSrc }) => (
          <FreeMenuCard
            key={name}
            imgSrc={imgSrc}
            name={name}
            desc={desc}
          ></FreeMenuCard>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <CiWarning size={30} className="text-red-600" />
        <p className="mx-3 text-center text-lg font-semibold italic text-red-600">
          Our free menu is limited, so please check with our slow AF staff for
          availability.
        </p>
        <CiWarning size={30} className="text-red-600" />
      </div>

      <div className="mt-10 flex justify-center">
        <Button>Explore Money Out Of The Bank Menu</Button>
      </div>
    </section>
  );
};

export default FreeMenu;
