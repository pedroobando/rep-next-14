import { Todo } from '@prisma/client';

const sleep = (second: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, second * 1000);
  });
};

export const updateTodos = async (id: string, complete: boolean): Promise<Todo> => {
  //* Simula un delay de internet dos (2) segundos.
  sleep(3);

  const body = { complete };

  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return todo;
};

export const createTodos = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return todo;
};

export const deleteTodoOne = async (id: string): Promise<Todo> => {
  const todo = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return todo;
};

export const deleteTodosCompleted = async (): Promise<{ todos: { count: number } }> => {
  const todo = await fetch(`/api/todos`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return todo;
};
