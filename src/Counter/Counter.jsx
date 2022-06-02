import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "../redux/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="counter-title">Counter React Redux Slice</h2>
      <div className="counter">
        <h2>{count}</h2>
        <button onClick={() => dispatch(decrement(10))}>-</button>
        <button onClick={() => dispatch(increment(10))}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
};
