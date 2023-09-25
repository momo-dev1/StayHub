import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import getCurrentUser from '@/actions/getCurrentUser';

interface IParams {
    listingId?: string
}

export async function POST(req: Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID")
    }

    let favoritesIds = [...(currentUser.favoritesIds) || []]

    favoritesIds.push(listingId)

    const user = await prismadb.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoritesIds
        },
    });

    return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID")
    }

    let favoritesIds = [...(currentUser.favoritesIds) || []]

    favoritesIds = favoritesIds.filter(id => id !== listingId)

    const user = await prismadb.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoritesIds
        },
    });

    return NextResponse.json(user);
}