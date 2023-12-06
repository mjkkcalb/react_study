import { useTodos } from "../../context/TodoContext";

const TodoInput = () => {
  const { text, onAdd, changeInput } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeInput} value={text} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
