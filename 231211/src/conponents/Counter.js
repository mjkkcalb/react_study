import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>counter: {count}</h2>
      <p>
        <button aria-lable="증가 버튼" onClick={() => dispatch(increment())}>
          증가
        </button>
        <button aria-lable="감소 버튼" onClick={() => dispatch(decrement())}>
          감소
        </button>
      </p>
    </div>
  );
};

export default Counter;
