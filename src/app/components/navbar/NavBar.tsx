import React, { FC } from "react";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import UserMenu from "./UserMenu";
import Search from "./Search";
import { SafeUser } from "@/types";

type NavBarProps = { currentUser?: SafeUser | null };

const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div className="flex items-center justify-between max-[1440px] mx-auto w-full shadow-md">
      <Logo />
      <Search />
      <UserMenu currentUser={currentUser} />
      <div className="flex items-center gap-2">
        <Button name="Sign in" color="bg-green-500" />
        <Button name="Sign up" color="bg-white" />
      </div>
    </div>
  );
};

export default NavBar;
