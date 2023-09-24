import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  label,
  register,
  errors,
  disabled,
  required,
}) => {
  return (
    <div className='relative'>
      <label
        className='
        text-md 
        absolute
      left-6
        top-4 
        z-10 
        origin-[0] 
        -translate-y-3 
        scale-75 
        transform 
        text-gray-900 
        duration-150
        peer-placeholder-shown:translate-y-0 
        peer-placeholder-shown:scale-100 
        peer-focus:-translate-y-3
        peer-focus:scale-75'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        className={`
        text-md
        invalid:border-b-1
        peer
        block
        w-full
        appearance-none
        rounded-md
      bg-white/50
      px-6
       pb-1
      pt-6
        text-black
        backdrop-blur
        placeholder:text-gray-900
        focus:outline-none
        focus:ring-0
        ${errors[id] && 'focus:ring-rose-500'}
        ${disabled && 'cursor-default opacity-50'}
        `}
      />
    </div>
  );
};

export default Input;
