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
      ${primary && "bg-white"} 
      ${secondry && "bg-green-400"} 
      ${black && "bg-black"} 
      rounded-[100vw] 
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
