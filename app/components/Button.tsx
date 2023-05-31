interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="mt-4 w-fit rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md bg-orange-400  p-3 text-lg text-white/90 transition hover:scale-105 active:translate-y-1 sm:p-4">
      {children}
    </button>
  );
};

export default Button;
