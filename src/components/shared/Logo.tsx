import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className=" text-xl font-bold text-black">
      <span className="mr-1 font-extrabold inline-block rotate-[20deg] transform text-2xl">
        S
      </span>
      StayHub
    </Link>
  );
};

export default Logo;
