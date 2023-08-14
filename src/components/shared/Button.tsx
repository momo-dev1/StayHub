import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  name: string;
  primary?: boolean;
  secondry?: boolean;
  black?: boolean;
  icon?: IconType;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  name,
  primary,
  secondry,
  black,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
      flex 
      items-center
      justify-center
      gap-2
      text-md
      font-bold
      border-2
      ${primary && "bg-white text-black"} 
      ${secondry && "bg-teal-600"} 
      ${black && "bg-black"} 
      rounded-full
      px-4 
      py-3
      shadow-md
      `}
    >
      {Icon && <Icon size="20" className="" />}
      {name}
    </button>
  );
};

export default Button;
