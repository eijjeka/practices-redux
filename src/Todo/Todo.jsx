import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { add } from "../redux/TodoSlice";
import { TodoList } from "./TodoList/TodoList";

export const Todo = () => {
  const dispatch = useDispatch();

  const [nameTodo, setNameTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add({
        id: nanoid(),
        title: nameTodo,
        isCompleted: false,
      })
    );
    e.target.reset();
  };

  const handleChange = (e) => {
    setNameTodo(e.target.value);
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={handleFormSubmit}>
          <h2>Todo React Redux</h2>
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter todo..."
          />
          <button onSubmit={handleFormSubmit} type="submit">
            Add
          </button>
        </form>
        <TodoList />
      </div>
    </>
  );
};
