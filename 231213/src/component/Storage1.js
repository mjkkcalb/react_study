import React, { useState } from "react";

const Storage1 = () => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState("");

  const handleSave = () => {
    //로컬스토리지에 데이터 저장

    localStorage.setItem("item1", inputText);
    setInputText("");
  };

  const handleLoad = () => {
    //로컬스토리지에 데이터 호출
    setData(localStorage.getItem("item1"));
  };

  const handleRemove = () => {
    localStorage.removeItem("name");
  };
  const handleClear = () => {
    localStorage.clear();
  };
  return (
    <div>
      <h2>로컬스트리지 1</h2>
      <input
        type="text"
        placeholder="이곳에 입력하세요"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleLoad}>호출</button>
        <button onClick={handleRemove}>삭제</button>
        <button onClick={handleClear}>모두삭제</button>
      </p>
      <h3>저장된 데이터 : {data}</h3>
    </div>
  );
};

export default Storage1;
