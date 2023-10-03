import NavBar from '@/components/navbar/NavBar';
import EmptyState from '@/components/shared/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';

import FavoritesClient from './FavoritesClient';
import getFavoriteListings from '@/actions/getFavoriteListings';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  return (
    <>
      <NavBar currentUser={currentUser} />
      {listings.length === 0 ? (
        <EmptyState
          title='No favorites found'
          subtitle='Looks like you have no favorite listings.'
        />
      ) : (
        <FavoritesClient listings={listings} currentUser={currentUser} />
      )}
    </>
  );
};

export default ListingPage;
