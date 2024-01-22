// FeedHighContext.js
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  saveTodosToLocalStorage,
  getTodosFromLocalStorage,
} from "../LocalStorage";

const FeedHighContext = createContext();

export const useHighTodos = () => useContext(FeedHighContext);

const FeedHighProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => getTodosFromLocalStorage());
  const [text, setText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const no = useRef(todos.length + 1);

  const onAdd = useCallback(
    (title, imgUrl) => {
      setTodos((prevTodo) => [
        ...prevTodo,
        {
          id: no.current++,
          text,
          selectedDate,
          selectedBook: { title, imgUrl },
        },
      ]);

      saveTodosToLocalStorage(todos.filter((item) => !item.rating));
      setText("");
      setSelectedDate("");
    },
    [text, selectedDate, todos]
  );

  const onDel = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }, []);

  const changeInput = useCallback((e) => {
    const { value } = e.target;
    setText(value);
  }, []);

  const value = useMemo(
    () => ({
      todos,
      text,
      onAdd,
      onDel,
      changeInput,
      selectedDate,
      setSelectedDate,
    }),
    [todos, text, onAdd, onDel, changeInput, selectedDate, setSelectedDate]
  );

  useEffect(() => {
    // 별점이 있는 아이템은 저장하지 않음
    saveTodosToLocalStorage(todos.filter((item) => !item.rating));
  }, [todos]);

  return (
    <FeedHighContext.Provider value={value}>
      {children}
    </FeedHighContext.Provider>
  );
};

export default FeedHighProvider;
