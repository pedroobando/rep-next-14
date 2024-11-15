import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();
  await prisma.$disconnect();

  return NextResponse.json(
    {
      method: 'GET',
      data: users,
    },
    { status: 200 }
  );
}
