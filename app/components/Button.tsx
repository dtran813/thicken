interface ButtonProps {
  children: React.ReactNode;
  roundedBorder?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  roundedBorder = false,
  onClick,
}) => {
  return (
    <button
      className={`mt-4 w-fit bg-orange-400 px-12 py-4 text-lg font-medium text-white/90 shadow-md transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring active:translate-y-1 ${
        roundedBorder
          ? 'rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md'
          : 'rounded-md'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
