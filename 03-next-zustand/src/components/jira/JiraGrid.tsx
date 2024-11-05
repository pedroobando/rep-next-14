'use client';

import { JiraTasks } from './JiraTasks';
import { useTaskStore } from '@/stores';
import { useShallow } from 'zustand/shallow';

export const JiraGrid = () => {
  const tasks = useTaskStore((store) => store.tasks);
  // const tasksInProgress = useTaskStore((store) => store.getTaskByStatus('in-progress'));
  const tasksOpen = useTaskStore(useShallow((store) => store.getTaskByStatus('open')));
  console.log(tasksOpen);

  // useEffect(() => {
  //   console.log(tasks);
  //   console.log(tasksOpen);
  // }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <JiraTasks title="Pendientes" value="open" />

      <JiraTasks title="Avanzando" value="in-progress" />

      <JiraTasks title="Terminadas" value="done" />
    </div>
  );
};
