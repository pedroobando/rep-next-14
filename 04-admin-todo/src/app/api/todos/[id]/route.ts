import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

interface Segment {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Segment) {
  const prisma = new PrismaClient();
  const id = (await params).id;
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return NextResponse.json({ message: `Id: ${id} not found` }, { status: 404 });
  }

  return NextResponse.json({ todo });
}

export async function DELETE(request: NextRequest, { params }: Segment) {
  const prisma = new PrismaClient();
  const id = (await params).id;
  const getData = await prisma.todo.findFirst({ where: { id } });
  if (!getData) {
    return NextResponse.json({ data: null, message: `id ${id} not found` }, { status: 404 });
  }
  const objectDelete = await prisma.todo.delete({ where: { id } });

  return new Response(
    JSON.stringify({
      data: objectDelete,
    }),
    { status: 200 }
  );
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PATCH(request: NextRequest, { params }: Segment) {
  const prisma = new PrismaClient();

  const id = (await params).id;
  let getData = await prisma.todo.findFirst({ where: { id } });
  if (!getData) {
    return NextResponse.json({ data: null, message: `Id: ${id} not found` }, { status: 400 });
  }

  try {
    const { description, complete } = await putSchema.validate(await request.json());

    const UpdateObj = await prisma.todo.update({
      where: { id: id },
      data: { description, complete },
    });

    return new Response(
      JSON.stringify({
        data: UpdateObj,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        data: error,
      }),
      { status: 400 }
    );
  }
}
