'use client';

import { FC } from 'react';
import { IoReorderTwoOutline } from 'react-icons/io5';
import classNames from 'classnames';
import { ITask } from '@/interfaces/task.interface';
import { useTaskStore } from '@/stores';
import { useShallow } from 'zustand/shallow';

interface Props {
  task: ITask;
}

export const SingleTask: FC<Props> = ({ task }: Props) => {
  const { draggingTaskId, setDraggingTaskId, removeDraggingTaskId } = useTaskStore(useShallow((store) => store));

  return (
    <div
      draggable
      onDragStart={() => setDraggingTaskId(task.id)}
      onDragEnd={() => removeDraggingTaskId()}
      className={classNames('mt-5 flex items-center justify-between p-2', {
        'rounded-xl bg-gray-300': draggingTaskId === task.id,
      })}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold text-navy-700">{task.title}</p>
      </div>
      <span className=" h-6 w-6 text-navy-700 cursor-pointer">
        <IoReorderTwoOutline />
      </span>
    </div>
  );
};
