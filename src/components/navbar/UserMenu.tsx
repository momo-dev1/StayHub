"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import Avatar from "@/components/shared/Avatar";

import { SafeUser } from "@/types";
import { useRentModal } from "@/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal();

  return (
    <div className=" text-black">
      <div className="flex items-center justify-center gap-5">
        <h5
          onClick={() => rentModal.onOpen()}
          className="font-bold cursor-pointer hover:border p-2 "
        >
          Create your home
        </h5>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" md:py-1 md:px-2 border-neutral-200 hover:shadow-md flex flex-row items-center gap-3 p-4 transition border-2 rounded-full cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="md:block hidden">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-4/5
            bg-white 
            border-2
            overflow-hidden 
            right-0 
            top-14
            md:top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                label="My trips"
                onClick={() => router.push("/trips")}
              />
              <MenuItem
                label="My favorites"
                onClick={() => router.push("/favorites")}
              />
              <MenuItem
                label="My reservations"
                onClick={() => router.push("/reservations")}
              />
              <MenuItem
                label="My properties"
                onClick={() => router.push("/properties")}
              />
              <hr />
              <MenuItem label="Logout" onClick={() => signOut()} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
