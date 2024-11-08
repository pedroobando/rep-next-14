import { StateCreator } from 'zustand';

export interface IConfirmationSlice {
  isConfirmed: boolean;

  setIsConfirmed: (value: boolean) => void;
}

export const createConfirmationSlice: StateCreator<IConfirmationSlice, [['zustand/devtools', never]]> = (set, get) => ({
  isConfirmed: true,

  setIsConfirmed: (value: boolean) => set({ isConfirmed: value }, false, 'setIsConfirmed'),
});
