import React from "react";

const DataDel2Btn = ({ onDel, onAdd, onMod }) => {
  return (
    <p>
      <button onClick={() => onDel(1)}>1번 삭제</button>
      <button onClick={() => onAdd("아이스")}>'아이스 ~' 추가</button>
      <button onClick={() => onMod(2)}>2번 수정</button>
    </p>
  );
};

export default DataDel2Btn;
