interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  isTextarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  required,
  isTextarea = false,
}) => {
  return (
    <div className="relative my-3 w-full">
      {isTextarea ? (
        <textarea
          id={id}
          placeholder=" " // for placeholder animation
          className="peer w-full rounded-md border bg-gray-100 p-4 pt-7 font-light transition"
          required={required}
          rows={8}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder=" " // for placeholder animation
          className="peer w-full rounded-md border bg-gray-100 p-4 pt-7 font-light transition"
          required={required}
        />
      )}

      <label
        htmlFor={id}
        className="text-md peer absolute left-4 top-5 z-10 origin-top-left -translate-y-3 transform duration-150 active:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 [&:not(:placeholder-shown)]:-translate-y-4 [&:not(:placeholder-shown)]:scale-75"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
