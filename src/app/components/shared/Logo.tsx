import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-block text-xl h-12 font-extrabold text-black"
    >
      <span className="mr-1 inline-block rotate-[20deg] transform text-2xl">
        S
      </span>
      StayHub
    </Link>
  );
};

export default Logo;
