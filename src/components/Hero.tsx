"use client";
import React from "react";
import Search from "@/components/shared/Search";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="relative bg-[url('/images/hero.webp')] overflow-hidden rounded-2xl w-full h-full bg-cover bg-no-repeat px-10 md:px-28  py-10">
        {/* overlay */}
        <div className="bg-black/30 absolute inset-0"></div>
        {/* end overlay */}

        <div className=" relative z-20">
          {/* content */}
          <div className="md:max-w-2xl max-w-lg pt-20 mx-auto text-center text-white">
            <h1 className="md:text-5xl lg:text-7xl mb-2 text-4xl">
              Find your favorite place here!
            </h1>
            <h5 className="md:text-md lg:text-lg text-xs">
              The best prices for over 2 million properties worldwide
            </h5>
          </div>

          {/* search */}
          <div className="mx-auto md:w-3/4 p-3 mt-20 w-full">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
