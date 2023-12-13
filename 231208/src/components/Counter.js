import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/modules/counterStore";

const Counter = () => {
  const { num, color } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(decrease());

  return (
    <article>
      <h2 style={{ color: color }}>count : {num}</h2>
      <p>
        <button onClick={() => dispatch(increase())}>👍</button>
        <button onClick={handleDecrease}>👎</button>
      </p>
    </article>
  );
};

export default Counter;
