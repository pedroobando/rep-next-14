import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
// import { produce } from 'immer';

import { ITask, TaskStatus } from '@/interfaces';

interface ITaskState {
  draggingTaskId?: string;
  tasks: Record<string, ITask>;

  getTaskByStatus: (status: TaskStatus) => ITask[];
  addTask: (title: string, status: TaskStatus) => void;

  setDraggingTaskId: (taskId: string) => void;
  removeDraggingTaskId: () => void;

  changeTaskStatus: (taskId: string, status: TaskStatus) => void;
  onTaskDrop: (status: TaskStatus) => void;
}

const storeAPI: StateCreator<ITaskState, [['zustand/devtools', never], ['zustand/immer', never]]> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },

  getTaskByStatus: (status: TaskStatus) => Object.values(get().tasks).filter((task) => task.status === status),

  addTask: (title: string, status: TaskStatus) => {
    const newTask: ITask = { id: uuidv4(), title, status };

    //? Con immer middleware de zustand
    set(
      (state) => {
        state.tasks[newTask.id] = newTask;
      },
      false,
      'addTask',
    );

    //? Requiere npm install immer
    //* Codigo mutante con immer, no utiliza el operador express "..."
    // set(
    //   produce((state: ITaskState) => {
    //     state.tasks[newTask.id] = newTask;
    //   }),
    //   true,
    //   'addTask',
    // );

    //? Forma Nativa
    //* Sin Codigo mutante de immer, utiliza el operador express "...state"
    // set((state) => ({
    //   tasks: {
    //     ...state.tasks,
    //     [newTask.id]: newTask,
    //   },
    // }));
  },

  setDraggingTaskId: (taskId: string) => set({ draggingTaskId: taskId }, false, 'setDraggingTaskId'),
  removeDraggingTaskId: () => set({ draggingTaskId: undefined }, false, 'removeDraggingTaskId'),

  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    const task = get().tasks[taskId];
    task.status = status;

    //? Con immer middleware de zustand
    set(
      (state) => {
        state.tasks[taskId] = task;
      },
      false,
      'changeTaskStatus',
    );

    //? Forma Nativa
    //* Sin Codigo mutante de immer, utiliza el operador express "...state"
    // set(
    //   (state) => ({
    //     tasks: {
    //       ...state.tasks,
    //       [taskId]: task,
    //     },
    //   }),
    //   false,
    //   'changeTaskStatus',
    // );
  },
  onTaskDrop: (status: TaskStatus) => {
    const taskId = get().draggingTaskId;
    if (!taskId) return;

    get().changeTaskStatus(taskId, status);
    get().removeDraggingTaskId();
  },
});

export const useTaskStore = create<ITaskState>()(
  devtools(immer(storeAPI), {
    name: 'Jira-Task',
  }),
);
