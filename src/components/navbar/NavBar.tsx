"use client";
import Logo from "@/components/shared/Logo";
import UserMenu from "./UserMenu";
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
    <header className="sticky top-0 z-[9999] w-full bg-white shadow-md">
      <nav className="py-4 border-b-[1px]">
        <Container>
          <div className="md:gap-0 flex items-center justify-between gap-3">
            <Logo />
            <div className="md:w-1/4 relative flex justify-end">
              {currentUser ? (
                <UserMenu currentUser={currentUser} />
              ) : (
                <div className="flex min-w-[170px] gap-2">
                  <Button
                    className="hover:translate-y-1  
                      hover:[box-shadow:0_0px_0_0_#14ba86,0_0px_0_0_#14b8a6]
                       transition-all duration-150 [box-shadow:0_8px_0_0_#28867b]
                        "
                    intent="secondary"
                    onClick={() => router.push("/auth")}
                  >
                    Sign in
                  </Button>
                  <Button
                    className="hover:translate-y-1  
                        hover:[box-shadow:0_0px_0_0_#000000,0_0px_0_0_#1b70f841]
                         transition-all duration-150 [box-shadow:0_8px_0_0_#000000]
                         "
                    onClick={() => router.push("/auth")}
                  >
                    Sign up
                  </Button>
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
