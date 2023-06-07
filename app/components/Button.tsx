interface ButtonProps {
  children: React.ReactNode;
  roundedBorder?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  roundedBorder = true,
  onClick,
}) => {
  return (
    <button
      className={`mt-4 w-fit bg-orange-400 px-7 py-4 text-lg text-white/90 shadow-md transition hover:scale-105 active:translate-y-1 ${
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
