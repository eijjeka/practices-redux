import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./counterSlice";
import { TodoSlice } from "./TodoSlice";

export const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    todo: TodoSlice.reducer,
  },
  devTools: true,
});
