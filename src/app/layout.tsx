import { FC } from "react";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import ToasterProvider from "@/context/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayHub",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
