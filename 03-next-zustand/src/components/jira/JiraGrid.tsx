'use client';

import { JiraTasks } from './JiraTasks';
import { useTaskStore } from '@/stores';
import dynamic from 'next/dynamic';
import { useShallow } from 'zustand/shallow';

const JiraGrid = () => {
  const tasksOpen = useTaskStore(useShallow((store) => store.getTaskByStatus('open')));
  const tasksInProgress = useTaskStore(useShallow((store) => store.getTaskByStatus('in-progress')));
  const tasksDone = useTaskStore(useShallow((store) => store.getTaskByStatus('done')));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <JiraTasks title="Pendientes" value="open" tasks={tasksOpen} />

      <JiraTasks title="Avanzando" value="in-progress" tasks={tasksInProgress} />

      <JiraTasks title="Terminadas" value="done" tasks={tasksDone} />
    </div>
  );
};

// export default JiraGrid;
export default dynamic(() => Promise.resolve(JiraGrid), { ssr: false });
