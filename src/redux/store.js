import { configureStore, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = countSlice.actions;

export const store = configureStore({
  reducer: countSlice,
});
