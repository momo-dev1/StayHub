import React, { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  type = "text",
  label,
  register,
  errors,
  disabled,
  required,
}) => {
  return (
    <div className="relative">
      <label
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3"
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
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
      placeholder:text-gray-400
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        ${errors[id] && "focus:ring-rose-500"}
        ${disabled && "opacity-50 cursor-default"}
        `}
      />
    </div>
  );
};

export default Input;
