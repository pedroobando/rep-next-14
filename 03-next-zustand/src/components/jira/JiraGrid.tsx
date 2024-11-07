'use client';

import { JiraTasks } from './JiraTasks';
import { useTaskStore } from '@/stores';
import { useShallow } from 'zustand/shallow';

export const JiraGrid = () => {
  const tasksOpen = useTaskStore(useShallow((store) => store.getTaskByStatus('open')));
  const tasksInProgress = useTaskStore(useShallow((store) => store.getTaskByStatus('in-progress')));
  const tasksDone = useTaskStore(useShallow((store) => store.getTaskByStatus('done')));

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <JiraTasks title="Pendientes" value="open" tasks={tasksOpen} />

      <JiraTasks title="Avanzando" value="in-progress" tasks={tasksInProgress} />

      <JiraTasks title="Terminadas" value="done" tasks={tasksDone} />
    </section>
  );
};
