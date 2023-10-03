import NavBar from '@/components/navbar/NavBar';
import EmptyState from '@/components/shared/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getListings from '@/actions/getListings';

import PropertiesClient from './PropertiesClient';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const listings = await getListings({ userId: currentUser.id });

  return (
    <>
      <NavBar currentUser={currentUser} />
      {listings.length === 0 ? (
        <EmptyState
          title='No properties found'
          subtitle='Looks like you have no properties.'
        />
      ) : (
        <PropertiesClient
        listings={listings}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default PropertiesPage;
