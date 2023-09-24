import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;
  if (!name || !email || !password) {
    return new NextResponse('Missing name, email, or password', {
      status: 400,
    });
  }

  const existingUser = await prismadb.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return new NextResponse('Email is taken', { status: 422 });
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismadb.user.create({
    data: {
      name,
      email,
      hashedPassword,
      image: '',
      emailVerified: new Date(),
    },
  });
  return NextResponse.json(user);
}
