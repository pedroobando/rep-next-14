'use client';

import { useTaskStore } from '@/stores';
import { WhiteCard } from '../card/WhiteCard';
import { IoPawOutline } from 'react-icons/io5';

export const CardJiraDash = () => {
  const getCountTask = useTaskStore((state) => state.taskCount);
  return (
    <WhiteCard centered href="/dashboard/tareas">
      <IoPawOutline size={50} className="text-indigo-600" />
      <h2>Total Tareas</h2>
      <p>{getCountTask()}</p>
    </WhiteCard>
  );
};
