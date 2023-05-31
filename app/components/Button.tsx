interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="mt-4 w-fit rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md bg-orange-400 px-7 py-4 text-lg text-white/90 shadow-md transition hover:scale-105 active:translate-y-1">
      {children}
    </button>
  );
};

export default Button;
