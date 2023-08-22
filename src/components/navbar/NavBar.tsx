"use client";
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

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 w-full bg-white shadow-md">
      <nav className="py-4 border-b-[1px]">
        <Container>
          <div className="md:gap-0 flex items-center justify-between gap-3">
            <Logo />
            <Search />
            <div className="md:w-1/4 relative flex justify-end">
              {currentUser ? (
                <UserMenu currentUser={currentUser} />
              ) : (
                <div className="flex min-w-[170px] gap-2">
                  <Button
                    intent="secondary"
                    onClick={() => router.push("/auth")}
                  >
                    Sign in
                  </Button>
                  <Button onClick={() => router.push("/auth")}>Sign up</Button>
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
