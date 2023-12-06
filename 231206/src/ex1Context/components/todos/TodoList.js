import { useTodos } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((list) => (
        <TodoItem key={list.id} list={list} />
      ))}
    </ul>
  );
};

export default TodoList;
