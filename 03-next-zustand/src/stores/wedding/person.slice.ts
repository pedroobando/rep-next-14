import { StateCreator } from 'zustand';

export interface IPersonSlice {
  firstName: string;
  lastName: string;

  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

export const createPersonSlice: StateCreator<IPersonSlice, [['zustand/devtools', never]]> = (set, get, store) => ({
  firstName: '',
  lastName: '',

  setFirstName: (firstName: string) => set({ firstName }, false, 'setFirstName'),
  setLastName: (lastName: string) => set({ lastName }, false, 'setLastName'),
});
