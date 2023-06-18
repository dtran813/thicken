interface ButtonProps {
  children: React.ReactNode;
  roundedBorder?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  roundedBorder = false,
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`w-fit shadow-md transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring active:translate-y-1 ${
        roundedBorder
          ? 'rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md'
          : 'rounded-md'
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
