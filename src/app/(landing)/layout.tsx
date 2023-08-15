import getCurrentUser from "@/actions/getCurrentUser";
import NavBar from "@/components/navbar/NavBar";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "StayHub",
  description: "Generated by create next app",
};

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: FC<LandingLayoutProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <NavBar currentUser={currentUser} />
      {children}
    </section>
  );
};

export default LandingLayout;
