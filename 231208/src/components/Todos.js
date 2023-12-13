import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
      <h2>Todos</h2>
      <ol>
        <li>입력폼</li>
        <li>리스트 컴포넌트에 추가</li>
        <li>수정, 삭제 버튼</li>
      </ol>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todos;
