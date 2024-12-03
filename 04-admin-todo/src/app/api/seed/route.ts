// import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  //

  // const todox = await prisma.todo.create({
  //   data: {
  //     description: 'hola mundo',
  //   },
  // });

  await prisma.todo.deleteMany({}); // delete * from todo

  const createSeed = await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', complete: true },
      { description: 'Piedra del poder' },
      { description: 'Piedra del tiempo' },
      { description: 'Piedra del espacio' },
      { description: 'Piedra del realidad' },
    ],
  });

  return NextResponse.json({ message: `create ${createSeed.count} elements` });
}
