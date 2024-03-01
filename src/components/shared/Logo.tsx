import Link from 'next/link';
import React from 'react';

interface IProps {
  color?: string;
}
const Logo = (color: IProps) => {
  return (
    <Link
      href='/'
      className={` text-xl font-bold ${color ? 'text-white' : 'text-black'} `}
    >
      <span className='mr-1 inline-block rotate-[20deg] transform text-2xl font-extrabold'>
        S
      </span>
      StayHub
    </Link>
  );
};

export default Logo;
