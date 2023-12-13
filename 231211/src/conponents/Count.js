import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/countSlice";

const Count = () => {
  const { num, color } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ color: color }}>count:{num}</h2>
      <p>
        <button aria-lable="증가 버튼" onClick={() => dispatch(increment())}>
          up
        </button>
        <button aria-lable="감소 버튼" onClick={() => dispatch(decrement())}>
          dw
        </button>
      </p>
    </div>
  );
};

export default Count;
