// FeedProvider.js
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
  saveRatingsToLocalStorage,
  getRatingsFromLocalStorage,
} from "../LocalStorage";

const FeedContext = createContext();

export const useTodos = () => useContext(FeedContext);

const FeedProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => getRatingsFromLocalStorage());
  const [text, setText] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [savedRating, setSavedRating] = useState(2);
  const no = useRef(todos.length + 1);

  const onAdd = useCallback(
    (title, imgUrl) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: no.current++,
          text,
          selectedDate,
          selectedBook: { title, imgUrl },
          rating: savedRating,
        },
      ]);
      setText("");
      setSelectedDate("");
    },
    [savedRating, text, selectedDate]
  );

  const onDel = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }, []);

  const changeInput = useCallback((e) => {
    const { value } = e.target;
    setText(value);
  }, []);

  const onSaveRating = useCallback((rating) => {
    setSavedRating(rating);
  }, []);

  const onDragEnd = useCallback((draggedValue) => {
    setSavedRating(draggedValue);
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
      savedRating,
      setSavedRating,
      onSaveRating,
      onDragEnd,
    }),
    [
      todos,
      text,
      onAdd,
      onDel,
      changeInput,
      selectedDate,
      setSelectedDate,
      savedRating,
      setSavedRating,
      onSaveRating,
      onDragEnd,
    ]
  );

  useEffect(() => {
    saveRatingsToLocalStorage(todos);
  }, [todos]);

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>;
};

export default FeedProvider;
