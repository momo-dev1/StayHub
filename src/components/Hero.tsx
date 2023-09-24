'use client';
import React from 'react';
import Search from '@/components/shared/Search';

const Hero = () => {
  return (
    <section className='mt-10'>
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[url('/images/hero.webp')] bg-cover bg-no-repeat px-10 py-10  md:px-28">
        {/* overlay */}
        <div className='absolute inset-0 bg-black/30'></div>
        {/* end overlay */}

        <div className=' relative z-20'>
          {/* content */}
          <div className='mx-auto max-w-lg pt-20 text-center text-white md:max-w-2xl'>
            <h1 className='mb-2 text-4xl md:text-5xl lg:text-7xl'>
              Find your favorite place here!
            </h1>
            <h5 className='md:text-md text-xs lg:text-lg'>
              The best prices for over 2 million properties worldwide
            </h5>
          </div>

          {/* search */}
          <div className=' mx-auto mt-20 p-3'>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
