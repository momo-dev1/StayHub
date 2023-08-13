import React, { FC } from "react";

type ButtonProps = {
  name: string;
  color: string;
};

const Button: FC<ButtonProps> = ({ name, color }) => {
  return (
    <button className={`text-md ${color} rounded-pill px-3 py-1 shadow-md`}>
      {name}
    </button>
  );
};

export default Button;
