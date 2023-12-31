import getCurrentUser from '@/actions/getCurrentUser';
import getListings, { IListingsParams } from '@/actions/getListings';

import Hero from '@/components/Hero';
import Categories from '@/components/category/Categories';
import ListingCard from '@/components/listings/ListingCard';
import Container from '@/components/shared/Container';
import EmptyState from '@/components/shared/EmptyState';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <main className='min-h-screen'>
        <Hero />
        {listings.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <>
            <Categories />

            <div
              className='
    grid
    grid-cols-1 
    gap-8 
    py-20 
    sm:grid-cols-2 
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
  '
            >
              {listings.map((listing: any) => (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </Container>
  );
};

export default Home;
