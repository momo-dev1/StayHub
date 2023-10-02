import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import ToasterProvider from '@/context/ToasterProvider';
import RentModal from '@/components/modals/RentModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StayHub',
  description:
    'StayHub is a web application designed to provide users with a seamless and user-friendly experience when searching for and booking vacation rentals and experiences',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToasterProvider />
        <RentModal />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
