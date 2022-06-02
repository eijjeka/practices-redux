import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
    toggleTodo(state, action) {
      const todoItem = state.find((el) => el.id === action.payload);
      todoItem.isCompleted = !todoItem.isCompleted;
    },
  },
});

export const { add, remove, toggleTodo } = TodoSlice.actions;
