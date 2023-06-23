import Link from 'next/link';
import { socialLinks } from '../utils/constants';
import Icon from './Icon';

const SocialLinks = () => {
  return (
    <div className="flex w-[300px] justify-between">
      {socialLinks.map(({ url, icon }) => (
        <Link key={url} href={url} target="_blank">
          <Icon icon={icon} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
