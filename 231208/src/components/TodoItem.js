import { useDispatch } from "react-redux";
import { remove, toggle } from "../store/modules/todosStore";

const TodoItem = ({ item }) => {
  const { id, text, done } = item;
  const dispatch = useDispatch();

  return (
    <li>
      <span style={done === true ? { textDecoration: "line-through" } : {}}>
        {text}
      </span>
      <button onClick={() => dispatch(toggle(id))}>수정</button>
      <button onClick={() => dispatch(remove(id))}>삭제</button>
    </li>
  );
};

export default TodoItem;
