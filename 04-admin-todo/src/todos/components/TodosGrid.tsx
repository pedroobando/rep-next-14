'use client';

import { Todo } from '@prisma/client';
import { FC } from 'react';
import { TodosItem } from './TodosItem';

import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';

//? Todo Rest
// import * as api from '@/todos/helpers/todos';

interface Props {
  todos?: Todo[];
}

export const TodosGrid: FC<Props> = ({ todos = [] }) => {
  const router = useRouter();

  //? Todo Rest
  // const toogleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await api.updateTodos(id, complete);
  //   router.refresh();
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
