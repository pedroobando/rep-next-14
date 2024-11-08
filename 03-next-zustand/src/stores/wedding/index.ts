import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createGuestSlice, IGuestSlice } from './guest.slice';
import { createPersonSlice, IPersonSlice } from './person.slice';
import { createDateSlice, IDateSlice } from './date.slice';

//? Create ShareState
type ShareState = IPersonSlice & IGuestSlice & IDateSlice;

export const useWeddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
  })),
);
