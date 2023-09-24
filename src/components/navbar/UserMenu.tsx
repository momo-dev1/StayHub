'use client';

import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import MenuItem from './MenuItem';
import Avatar from '@/components/shared/Avatar';

import { SafeUser } from '@/types';
import { useRentModal } from '@/hooks/useRentModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal();

  return (
    <div className=' text-black'>
      <div className='flex items-center justify-center gap-5'>
        <h5
          onClick={() => rentModal.onOpen()}
          className='cursor-pointer p-2 font-bold hover:border'
        >
          List your property
        </h5>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=' flex cursor-pointer flex-row items-center gap-3 rounded-full border-2 border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
            absolute 
            right-0 
            top-14
            w-[40vw]
            overflow-hidden
            rounded-xl 
            border-2
            bg-white 
            text-sm 
            shadow-md
            md:top-12 
            md:w-4/5
          '
        >
          <div className='flex cursor-pointer flex-col'>
            <>
              <MenuItem
                label='My trips'
                onClick={() => router.push('/trips')}
              />
              <MenuItem
                label='My favorites'
                onClick={() => router.push('/favorites')}
              />
              <MenuItem
                label='My reservations'
                onClick={() => router.push('/reservations')}
              />
              <MenuItem
                label='My properties'
                onClick={() => router.push('/properties')}
              />
              <hr />
              <MenuItem label='Logout' onClick={() => signOut()} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
