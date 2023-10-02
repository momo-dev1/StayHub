import getCurrentUser from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListingById';
import getReservations from '@/actions/getReservations';

import EmptyState from '@/components/shared/EmptyState';
import NavBar from '@/components/navbar/NavBar';

import ListingClient from './ListingClient';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  return (
    <>
      <NavBar currentUser={currentUser} />
      {!listing ? (
        <EmptyState />
      ) : (
        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default ListingPage;
