'use server';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';

//* Con esto no utilizas el restfull endpoint o API (todo).

const sleep = async (second: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, second * 1000);
  });
};

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw `Todo con id ${id} no encontrado`;
  }

  const updateTodo = await prisma.todo.update({ where: { id }, data: { complete } });
  revalidatePath('/dashboard/server-todos');
  return updateTodo;
};

export const createTodo = async (description: string): Promise<Todo | any> => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath('/dashboard/server-todos');
    return todo;
  } catch (error: any) {
    return { code: error.code, message: `error en la creacion del todo ${description}` };
  }
};

export const deleteCompleted = async (): Promise<number> => {
  try {
    const deleteCount = await prisma.todo.deleteMany({ where: { complete: true } });
    revalidatePath('/dashboard/server-todos');
    return deleteCount.count;
  } catch (error: any) {
    return 0;
  }
};
