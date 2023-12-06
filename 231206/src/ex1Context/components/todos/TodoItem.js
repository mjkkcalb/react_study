import { useTodos } from "../../context/TodoContext";

const TodoItem = ({ list }) => {
  const { id, text } = list;
  const { onDel } = useTodos();
  return (
    <li>
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
