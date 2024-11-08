import { StateCreator } from 'zustand';

export interface IGuestSlice {
  guestCount: number;

  setGuestCount: (guestCount: number) => void;
}

export const createGuestSlice: StateCreator<IGuestSlice, [['zustand/devtools', never]]> = (set, get, store) => ({
  guestCount: 0,

  setGuestCount: (guestCount: number) => set({ guestCount: guestCount > 0 ? guestCount : 0 }, false, 'setGuestCount'),
});
