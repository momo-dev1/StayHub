import NavBar from '@/components/navbar/NavBar';
import EmptyState from '@/components/shared/EmptyState';
import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';

import ReservationsClient from './ReservationsClient';

const ReservationsPage  = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  return (
    <>
      <NavBar currentUser={currentUser} />
      {reservations.length === 0 ? (
        <EmptyState
          title='No reservations found'
          subtitle='Looks like you have no reservations on your properties.'
        />
      ) : (
        <ReservationsClient reservations={reservations} currentUser={currentUser} />
      )}
    </>
  );
};

export default ReservationsPage ;
