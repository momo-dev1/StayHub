'use client';
import Logo from '@/components/shared/Logo';
import UserMenu from './UserMenu';
import { SafeUser } from '@/types';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/navigation';
interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-[9999] w-full bg-white shadow-md'>
      <nav className='border-b-[1px] py-4'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <div className='relative flex justify-end '>
              {currentUser ? (
                <UserMenu currentUser={currentUser} />
              ) : (
                <div className='flex min-w-[170px] gap-2'>
                  <Button
                    className='transition-all  
                      duration-150
                       [box-shadow:0_8px_0_0_#28867b] hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#14ba86,0_0px_0_0_#14b8a6]
                        '
                    intent='secondary'
                    onClick={() => router.push('/auth')}
                  >
                    Sign in
                  </Button>
                  <Button
                    className='transition-all  
                        duration-150
                         [box-shadow:0_8px_0_0_#000000] hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#000000,0_0px_0_0_#1b70f841]
                         '
                    onClick={() => router.push('/auth')}
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
