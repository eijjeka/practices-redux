import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
    reset() {
      return 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions;
