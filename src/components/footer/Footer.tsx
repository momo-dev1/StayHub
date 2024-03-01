import Container from '../shared/Container';
import Logo from '../shared/Logo';

// Reusable Section component
const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <div className='font-lato cursor-pointer pb-2 text-xl font-bold lg:pb-5'>
      {title}
    </div>
    <div className='font-lato text-base font-light text-[#d2d2d2]'>
      {items.map((item: string, index: number) => (
        <div
          key={index}
          className={`cursor-pointer pb-2 ${index === items.length - 1 ? '' : 'pb-2'}`}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

// Reusable SocialIcon component
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className='cursor-pointer pr-5'>{children}</div>
);

const Footer = () => {
  const sections = [
    {
      title: 'Explore',
      items: ['Hotels in Berlin', 'Hotels in Jakarta', 'Villa in Bekasi'],
    },
    { title: 'Company', items: ['About us', 'Brand', 'Customers'] },
    {
      title: 'Help',
      items: ['Support', 'Cancel your booking', 'Refund Process'],
    },
  ];

  return (
    <>
      <div className='mt-10 w-full bg-[#222222] px-4 lg:mt-60 lg:px-0'>
        <Container>
          <div className=' border-b border-white pb-8 pt-8 lg:flex lg:pt-16'>
            <div className='ml-4 flex max-w-lg flex-1 flex-col pb-8 lg:ml-0 lg:w-full lg:pb-8'>
              <div>
                <Logo color='white' />
                <p className='my-4 max-w-md font-normal text-[#d2d2d2]'>
                  StayHub as a web application designed to provide a seamless
                  and user-friendly experience when searching for and booking
                  vacation rentals and experiences.{' '}
                </p>
              </div>
              <div className=' w-full pt-4  lg:pr-10 lg:pt-0'>
                <h3 className='font-lato text-2xl font-bold uppercase text-white'>
                  NEWSLETTER
                </h3>

                <div className='relative mt-4 flex w-full items-center justify-center rounded '>
                  <input
                    type='email'
                    required
                    placeholder='Email Address'
                    id='email'
                    aria-label='email'
                    className='h-12 w-full rounded-lg border border-white bg-transparent pl-4 text-base text-white placeholder-white focus:outline-none  '
                  />
                  <button
                    type='submit'
                    className='absolute inset-y-0 right-0 flex h-full w-1/5 items-center justify-center rounded bg-white px-2 py-2 text-xs focus:outline-none sm:px-2 lg:py-4'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={26}
                      height={16}
                      viewBox='0 0 26 16'
                      fill='none'
                    >
                      <path
                        d='M0.785156 7.85693H24.7852'
                        stroke='#334048'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M17.9282 14.7141L24.7854 7.85693'
                        stroke='#334048'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M17.9282 1L24.7854 7.85714'
                        stroke='#334048'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='ml-4 mt-2  lg:ml-4 lg:mt-0 lg:w-1/2'>
              <div className='f-f-l grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-3'>
                {sections.map((section, index) => (
                  <Section
                    key={index}
                    title={section.title}
                    items={section.items}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='font-lato flex w-full flex-col-reverse items-center justify-between py-2 text-base text-white lg:ml-0 lg:flex-row lg:py-8'>
            <div>Copyright @2024 All rights reserved</div>
            <div className='mt-4 flex items-center lg:mt-0'>
              {/* Use SocialIcon for each social media icon */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
