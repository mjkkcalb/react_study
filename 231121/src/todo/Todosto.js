import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import Todolist2 from "./Todolist2";

const Todosto = () => {
  const [data, setData] = useState([]);
  const no = useRef(1);
  // 추가 create
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isChk: false }]);
  };
  // 삭제 Delete
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };
  // 수정 update(취소선)
  const onMod = (id) => {
    setData(
      data.map((list) =>
        list.id === id ? { ...list, isChk: !list.isChk } : list
      )
    );
  };

  return (
    <div>
      <h2>todo list</h2>
      <TodoForm onAdd={onAdd} />
      <Todolist2 data={data} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todosto;
