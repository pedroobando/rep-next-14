'use client';

import { DragEvent, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import Swal from 'sweetalert2';
import { TaskStatus } from '@/interfaces';
import { useTaskStore } from '@/stores';

interface Options {
  status: TaskStatus;
}

export const useTasks = ({ status }: Options) => {
  const { addTask, onTaskDrop } = useTaskStore((store) => store);
  const isDragging = useTaskStore((store) => !!store.draggingTaskId);
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
    onTaskDrop(status);
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

  return {
    //? Property
    isDragging,
    onDragOver,

    //? Method
    handleOnDragOver,
    handleOnDragLeave,
    handleOnDrop,
    handleAddTask,
  };
};
