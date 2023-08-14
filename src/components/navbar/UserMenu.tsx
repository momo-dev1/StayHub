"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import Avatar from "@/components/shared/Avatar";

import { SafeUser } from "@/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" text-black ">
      <div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
          p-4
          md:py-1
          md:px-2
          border-2 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
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
