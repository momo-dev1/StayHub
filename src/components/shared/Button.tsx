import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "font-bold",
    "border-2",
    "rounded-full",
    "shadow-md",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-white", "text-black"],
        secondary: ["bg-teal-600"],
        dark: ["bg-black"],
      },
      size: {
        small: ["text-sm md:text-xs md:text-sm lg:text-md", "py-1", "px-2"],
        medium: [
          "text-sm md:text-md lg:text-lg",
          "px-2 md:px-4",
          "py-1 md:py-3",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button: FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
