'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { format } from 'date-fns';

import useCountries from '@/hooks/useCountries';
import { SafeListing, SafeReservation, SafeUser } from '@/types';

import HeartButton from '@/components/shared/HeartButton';
import Button from '@/components/shared/Button';

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className='group col-span-1 cursor-pointer'
    >
      <div className='flex w-full flex-col gap-2'>
        <div className='relative'>
          <div className=' relative aspect-square w-full overflow-hidden rounded-xl'>
            <Image
              fill
              className=' h-full w-full object-cover transition group-hover:scale-110'
              src={data.imageSrc}
              alt='Listing'
            />
          </div>
          <div className='absolute bottom-0 right-2 z-10 flex translate-y-7 transform flex-row items-center gap-1 rounded-md border bg-white p-3 shadow-2xl'>
            <div className='font-bold'>$ {price}</div>
            {!reservation && (
              <div className=' text-xs text-neutral-500'>/Night</div>
            )}
          </div>
        </div>

        <div className='mt-8 flex w-full items-center justify-between'>
          <div className='text-lg font-semibold'>
            {location?.region}, {location?.label}
          </div>

          <div>
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className='font-light text-neutral-500'>
          {reservationDate || data.category}
        </div>

        {onAction && actionLabel && (
          <Button disabled={disabled} size='small' onClick={handleCancel}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
