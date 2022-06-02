import { useSelector, useDispatch } from "react-redux";
import { remove, toggleTodo } from "../../redux/TodoSlice";

export const TodoList = () => {
  const items = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {!items.length ? (
        <h2>No items todo...</h2>
      ) : (
        <ul>
          {items.map((el) => (
            <li>
              <input
                onChange={() => dispatch(toggleTodo(el.id))}
                type="checkbox"
                checked={el.isCompleted}
              />
              <span>{el.title}</span>
              <button onClick={() => dispatch(remove(el.id))}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
