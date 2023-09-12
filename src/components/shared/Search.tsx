import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      onClick={() => {}}
      className="
      bg-white
          border-[1px] 
          w-full 
          md:w-auto 
          py-2 
          rounded-full 
          shadow-sm 
          hover:shadow-md 
          transition 
          cursor-pointer
        "
    >
      <div className=" flex flex-row items-center justify-between">
        <div className=" px-6 text-sm font-semibold">
          {/* {locationLabel} */}
        </div>
        <div
          className="
              hidden 
              sm:block 
              text-sm 
              font-semibold 
              px-6 
              border-x-[1px] 
              flex-1 
              text-center
            "
        >
          {/* {durationLabel} */}
        </div>
        <div className=" flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="sm:block hidden">{/* {guestLabel} */}</div>
          <div className="flex justify-center items-center gap-2 bg-zinc-950 p-2 md:p-4 text-white rounded-full">
            <BiSearch size={18} />
            <span className="text-xs md:text-base">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
