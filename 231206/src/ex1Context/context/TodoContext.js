// TodoContext.js
import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";

const TodoContext = createContext();

// custom hook: use가 앞에 붙으면 hook
export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "커피 사기" },
    { id: 2, text: "공부하기" },
    { id: 3, text: "운동" },
  ]);
  const [text, setText] = useState("");
  const no = useRef(todos.length + 1);

  // onAdd
  const onAdd = useCallback((text) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      {
        id: no.current++,
        text,
      },
    ]);
    setText("");
  }, []);

  // onDel
  const onDel = useCallback(
    (id) => {
      setTodos(todos.filter((item) => item.id !== id));
    },
    [todos]
  );

  const changeInput = useCallback(
    (e) => {
      const { value } = e.target;
      setText(value);
    },
    [todos]
  );

  const value = useMemo(
    () => ({ todos, text, onAdd, onDel, changeInput }),
    [todos, text, onAdd, onDel, changeInput]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
