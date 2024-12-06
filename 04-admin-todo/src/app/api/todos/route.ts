import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const take = +(searchParams.get('take') ?? '10');
  const skip = +(searchParams.get('skip') ?? '0');

  if (isNaN(take)) {
    return NextResponse.json({ message: 'Take debe ser un valor numerico' }, { status: 400 });
  }
  if (isNaN(skip)) {
    return NextResponse.json({ message: 'Skip debe ser un valor numerico' }, { status: 400 });
  }

  const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json({ todos });
}

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(true),
  });

  const { description, complete } = await postSchema.validate(await request.json());

  try {
    const createObj = await prisma.todo.create({
      data: {
        description,
        complete,
      },
    });

    return new NextResponse(
      JSON.stringify({
        data: createObj,
      }),
      { status: 201 }
    );
  } catch (error) {
    // console.log(error.message);
    return new NextResponse(
      JSON.stringify({
        data: null,
        message: `Error de duplicacion de datos - ${error}`,
      }),
      { status: 400 }
    );
  }
};

export async function DELETE(request: NextRequest) {
  const prisma = new PrismaClient();
  try {
    const todos = await prisma.todo.deleteMany({ where: { complete: true } });
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, message: error }, { status: 400 });
  }
}
