import { BiSearch, BiCalendar } from 'react-icons/bi';
import { HiUsers, HiOutlineLocationMarker } from 'react-icons/hi';
const Search = () => {
  return (
    <div
      onClick={() => {}}
      className='
        mx-auto
          cursor-pointer 
          rounded-md	
          border-[1px]
          bg-white 
          px-1
          py-2
          shadow-sm 
          transition 
          hover:shadow-md 
          lg:max-w-fit
          lg:rounded-full
        '
    >
      <div className=' grid grid-cols-1 items-center gap-4 lg:grid-cols-4'>
        <div className=' px-6 text-sm font-semibold'>
          <div className='flex items-center justify-center gap-3'>
            <HiOutlineLocationMarker size={18} />
            <div className='flex-1 text-start'>
              <span className=' text-xs text-gray-500'>Location</span>
              <h6 className='mt-1 text-xs font-bold'>Where are you going?</h6>

              {/* {locationLabel} */}
            </div>
          </div>
        </div>

        <div
          className='
              border-x-[1px] 
              px-6 
              text-center 
              text-sm 
              font-semibold
            '
        >
          <div className='flex items-center justify-center gap-3'>
            <BiCalendar size={18} />
            <div className='flex-1 text-start'>
              <span className=' text-xs text-gray-500'>
                Check In / Check Out
              </span>
              <h6 className='mt-1 text-xs font-bold'>Add dates</h6>

              {/* {durationLabel} */}
            </div>
          </div>
        </div>

        <div className=' flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600'>
          <div>
            <div className='flex items-center justify-center gap-3'>
              <HiUsers size={18} />
              <div className='flex-1 text-start'>
                <span className=' text-xs text-gray-500'>Guest and Rooms</span>
                <h6 className='mt-1 text-xs font-bold'>Add guests and rooms</h6>

                {/* {guestLabel} */}
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center gap-2 rounded-md bg-zinc-950 p-2 text-white md:p-4 lg:rounded-full'>
          <BiSearch size={18} />
          <span className='text-xs md:text-base'>Search</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
