import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/store";

export const Counter = () => {
  const count = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="counter-title">Counter React Redux Slice</h2>
      <div className="counter">
        <h2>{count}</h2>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
};
