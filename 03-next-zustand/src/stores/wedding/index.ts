import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { createGuestSlice, IGuestSlice } from './guest.slice';
import { createPersonSlice, IPersonSlice } from './person.slice';
import { createDateSlice, IDateSlice } from './date.slice';
import { createConfirmationSlice, IConfirmationSlice } from './confirmation.slice';

//? Create ShareState
type ShareState = IPersonSlice & IGuestSlice & IDateSlice & IConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  persist(
    devtools((...a) => ({
      ...createPersonSlice(...a),
      ...createGuestSlice(...a),
      ...createDateSlice(...a),
      ...createConfirmationSlice(...a),
    })),
    {
      name: 'wedding-storage',
    },
  ),
);
