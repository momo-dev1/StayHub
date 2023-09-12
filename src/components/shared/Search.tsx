import { BiSearch, BiCalendar } from "react-icons/bi";
import { HiUsers, HiOutlineLocationMarker } from "react-icons/hi";
const Search = () => {
  return (
    <div
      onClick={() => {}}
      className="
        bg-white
          border-[1px] 
          lg:max-w-fit	
          mx-auto
          py-2 
          rounded-md
          lg:rounded-full
          shadow-sm 
          hover:shadow-md 
          transition 
          cursor-pointer
          px-1
        "
    >
      <div className=" grid  grid-cols-1 lg:grid-cols-4 items-center  gap-4">
        <div className=" px-6 text-sm font-semibold">
          <div className="flex items-center justify-center gap-3">
            <HiOutlineLocationMarker size={18} />
            <div className="flex-1 text-start ">
              <span className="text-xs  text-gray-500 ">Location</span>
              <h6 className="font-bold text-xs  mt-1">Where are you going?</h6>

              {/* {locationLabel} */}
            </div>
          </div>
        </div>

        <div
          className="
              text-sm 
              font-semibold 
              px-6 
              border-x-[1px] 
              text-center
            "
        >
          <div className="flex items-center justify-center gap-3">
            <BiCalendar size={18} />
            <div className="flex-1 text-start">
              <span className="text-xs text-gray-500 ">
                Check In / Check Out
              </span>
              <h6 className="font-bold text-xs mt-1">Add dates</h6>

              {/* {durationLabel} */}
            </div>
          </div>
        </div>

        <div className=" flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div>
            <div className="flex items-center justify-center gap-3">
              <HiUsers size={18} />
              <div className="flex-1 text-start">
                <span className="text-xs text-gray-500 ">Guest and Rooms</span>
                <h6 className="font-bold text-xs mt-1">Add guests and rooms</h6>

                {/* {guestLabel} */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 bg-zinc-950 p-2 md:p-4 text-white rounded-md lg:rounded-full">
          <BiSearch size={18} />
          <span className="text-xs md:text-base">Search</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
