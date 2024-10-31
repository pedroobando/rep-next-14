import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  isInit: boolean;
}

const initialState: CounterState = {
  count: 5,
  isInit: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
      // state.isInit = false;
    },
    initCounter(state, action: PayloadAction<number>) {
      if (state.isInit) return;
      state.count = action.payload;
      state.isInit = true;
    },
  },
});

export const { addOne, substractOne, resetCounter, initCounter } = counterSlice.actions;

export default counterSlice.reducer;
