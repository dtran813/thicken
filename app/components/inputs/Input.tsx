import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  isTextarea?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  required,
  isTextarea = false,
  register,
  errors,
}) => {
  const inputStyle = `peer w-full rounded-md border p-4 pt-7 font-light transition disabled:cursor-not-allowed disabled:opacity-70 ${
    errors[id]
      ? 'border-l-4 border-red-600 focus:border-red-600'
      : 'border-neutral-300 focus:border-black'
  }`;

  return (
    <div className="relative my-3 w-full">
      {isTextarea ? (
        <textarea
          id={id}
          disabled={disabled}
          placeholder=" " // for placeholder animation
          className={inputStyle}
          {...register(id, { required })}
          rows={8}
        />
      ) : (
        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder=" " // for placeholder animation
          {...register(id, { required })}
          className={inputStyle}
        />
      )}

      <label
        htmlFor={id}
        className={`text-md peer absolute left-4 top-5 z-10 origin-top-left -translate-y-3 transform duration-150 active:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 [&:not(:placeholder-shown)]:-translate-y-4 [&:not(:placeholder-shown)]:scale-75 ${
          errors[id] ? 'text-red-600' : 'text-zinc-400'
        }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
