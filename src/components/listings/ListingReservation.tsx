'use client';

import { Range } from 'react-date-range';

import Button from '@/components/shared/Button';
import Calendar from '@/components/shared/inputs/Calendar';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className='
      overflow-hidden 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        bg-white
      '
    >
      <div className=' flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {price}</div>
        <div className='font-light text-neutral-600'>/ night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className='p-3'>
        <Button
          intent='secondary'
          className='w-full flex-1'
          disabled={disabled}
          onClick={onSubmit}
        >
          Reserve
        </Button>
      </div>
      <hr />
      <div className=' flex flex-row items-center justify-between p-4 text-lg font-semibold'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
