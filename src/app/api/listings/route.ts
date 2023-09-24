import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import getCurrentUser from '@/actions/getCurrentUser';

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await req.json();
  const {
    title,
    price,
    location,
    category,
    imageSrc,
    roomCount,
    guestCount,
    description,
    bathroomCount,
  } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) return NextResponse.error();
  });

  const listing = await prismadb.listing.create({
    data: {
      title,
      category,
      imageSrc,
      roomCount,
      guestCount,
      description,
      bathroomCount,
      userId: currentUser.id,
      price: parseInt(price, 10),
      locationValue: location.value,
    },
  });

  return NextResponse.json(listing);
}
