'use client';

import { DragEvent, useState } from 'react';
import { IoCheckmarkCircleOutline, IoClipboardOutline } from 'react-icons/io5';
import classNames from 'classnames';
import Swal from 'sweetalert2';

import { useTaskStore } from '@/stores';
import { ITask, TaskStatus } from '@/interfaces';
import { SingleTask } from './SingleTask';

interface Props {
  title: string;
  value: TaskStatus;
  tasks: ITask[];
}

export const JiraTasks = ({ title, tasks, value }: Props) => {
  const addTask = useTaskStore((store) => store.addTask);
  const isDragging = useTaskStore((store) => !!store.draggingTaskId);
  const onTaskDrop = useTaskStore((store) => store.onTaskDrop);
  const [onDragOver, setOnDragOver] = useState(false);

  const handleOnDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleOnDragLeave = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };

  const handleOnDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    setOnDragOver(false);
    onTaskDrop(value);
  };

  const handleAddTask = async (status: TaskStatus) => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'Nueva Tarea',
      input: 'text',
      inputLabel: 'Nombre de la tarea',
      inputPlaceholder: 'Ingrese el nombre de la tarea',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) return 'Debe de ingresar un nombre para la tarea';
      },
    });
    // console.log(newTask);
    if (!isConfirmed) return;
    addTask(value, status);
  };

  return (
    <section
      id={`${title}`}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      className={classNames(
        '!text-black border-4 relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
        { 'border-blue-300 border-dotted': isDragging },
        { 'border-orange-400 border-dotted': isDragging && onDragOver },
      )}
    >
      {/* Task Header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{title}</h4>
        </div>

        <button
          className="bg-blue-500 px-6 py-2 rounded-2xl text-white font-bold text-xl"
          onClick={() => handleAddTask(value)}
        >
          <IoClipboardOutline />
        </button>
      </div>

      <div className="h-full w-full">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};
