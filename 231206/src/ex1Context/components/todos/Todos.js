import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
      <h3 style={{ color: "teal" }}>할 일</h3>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todos;
