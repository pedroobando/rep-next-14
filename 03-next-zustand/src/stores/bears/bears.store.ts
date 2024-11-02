import { create } from 'zustand';

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBears: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  pandaBears: 5,
  polarBears: 1,

  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
}));
