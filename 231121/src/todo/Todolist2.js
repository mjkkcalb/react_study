import React from "react";
import Todoitem from "./Todoitem";

const Todolist2 = ({ data, onDel, onMod }) => {
  return (
    <div>
      <ul style={{ borderTop: "1px solid #000" }}></ul>
      {data.map((list) => (
        <Todoitem key={list.id} list={list} onDel={onDel} onMod={onMod} />
      ))}
    </div>
  );
};

export default Todolist2;
