import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  const prisma = new PrismaClient();

  async function main() {
    const user = await prisma.user.create({
      data: {
        name: 'Pedro',
        email: 'pedro@prisma.io',
      },
    });
    console.log(user);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  return new Response(
    JSON.stringify({
      message: 'Hello World',
    }),
    { status: 200 }
  );
}
