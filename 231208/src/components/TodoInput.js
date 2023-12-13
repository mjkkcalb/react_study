import { useDispatch, useSelector } from "react-redux";
import { changeInput, add } from "../store/modules/todosStore";

const TodoInput = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add(input));
    dispatch(changeInput(input));
    dispatch(changeInput(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="입력하세요"
        value={input}
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
    </form>
  );
};

export default TodoInput;
