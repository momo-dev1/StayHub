"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import Avatar from "@/components/shared/Avatar";
import Button from "@/components/shared/Button";

interface UserMenuProps {
  currentUser?: null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={() => {}}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
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
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
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
                <MenuItem label="Airbnb your home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <Button
                  name="Sign in"
                  color="bg-green-500"
                  onClick={() => {}}
                />
                <Button name="Sign up" color="bg-white" onClick={() => {}} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
