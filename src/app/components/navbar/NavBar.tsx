import React, { FC } from "react";
import Logo from "@/components/shared/Logo";
import UserMenu from "./UserMenu";
import Search from "./Search";
import { SafeUser } from "@/types";
import Container from "@/components/shared/Container";

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  return (
    <header className="fixed bg-white z-10 w-full shadow-sm">
      <nav className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={null} />
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
