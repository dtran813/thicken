import { IconType } from 'react-icons/lib';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: Icon,
  size = 22,
  color = 'black',
}) => {
  return (
    <span
      style={{ color }}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-current`}
    >
      <Icon size={size} />
    </span>
  );
};

export default Icon;
