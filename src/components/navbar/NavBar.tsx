"use client";
import React, { FC } from "react";
import Logo from "@/components/shared/Logo";
import UserMenu from "./UserMenu";
import Search from "./Search";
import { SafeUser } from "@/types";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";
interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <header className="fixed bg-white z-10 w-full shadow-md">
      <nav className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <div className="relative flex justify-end md:w-1/4 ">
              {currentUser ? (
                <UserMenu currentUser={currentUser} />
              ) : (
                <div className="flex gap-3">
                  <Button
                    secondry
                    name="Sign in"
                    onClick={() => router.push("/auth")}
                  />
                  <Button
                    primary
                    name="Sign up"
                    onClick={() => router.push("/auth")}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
