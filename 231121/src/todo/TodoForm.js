import React, { useRef, useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const focusRef = useRef();

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("내용을 작성해 주세요");
      return;
    }
    //추가 함수
    onAdd(text);
    setText("");

    focusRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSubmit(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={changeInput}
        ref={focusRef}
        onKeyPress={handleKeyPress}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
