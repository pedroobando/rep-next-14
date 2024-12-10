'use client';

import { FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoTrashOutline } from 'react-icons/io5';
import * as apiTodo from '@/todos/helpers/todos';
import { createTodo, deleteCompleted } from '@/todos/actions/todo-actions';

export const TodosNew: FC = () => {
  const [descriptionTodo, setDescriptionTodo] = useState<string>('');
  // const router = useRouter();

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (descriptionTodo.trim().length <= 0) return;

    try {
      const newTodo = await createTodo(descriptionTodo);
      // const newTodo = await apiTodo.createTodos(descriptionTodo);
      console.log({ newTodo });
      setDescriptionTodo('');
      // router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteCompleted = async () => {
  //   const totalTodos = await apiTodo.deleteTodosCompleted();
  //   console.log(totalTodos);
  //   router.refresh();
  // };

  return (
    <form className="flex w-full" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        value={descriptionTodo}
        onChange={(e) => setDescriptionTodo(e.target.value)}
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline className="mr-2" />
        Borrar Completados
      </button>
    </form>
  );
};
