import React, { useState } from "react";

const dataList = [
  { id: 1, name: "chk1", text: "연령(만 14세 이상) 확인(필수)", isChk: true },
  { id: 2, name: "chk2", text: "증권플러스 이용약관 (필수)", isChk: false },
  {
    id: 3,
    name: "chk3",
    text: "개인정보 수집 및 이용 약관 안내(필수)",
    isChk: false,
  },
  { id: 4, name: "chk4", text: "이벤트 우대 혜택 안내(필수)", isChk: false },
];

const Ex2 = () => {
  const [data, setData] = useState(dataList);

  const handleAllCheck = (isChecked) => {
    const updatedData = data.map((item) => ({ ...item, isChk: isChecked }));
    setData(updatedData);
  };

  const handleSingleCheck = (id, isChecked) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isChk: isChecked } : item
    );
    setData(updatedData);
  };

  return (
    <div className="borderTop">
      <h2>약관동의</h2>
      <p>
        <input
          type="checkbox"
          id="all"
          checked={data.every((item) => item.isChk)}
          onChange={(e) => handleAllCheck(e.target.checked)}
        />
        <label htmlFor="all">전체동의</label>
      </p>
      <hr />
      {data.map((item) => (
        <p key={item.id}>
          <input
            type="checkbox"
            id={item.name}
            name={item.name}
            checked={item.isChk}
            onChange={(e) => handleSingleCheck(item.id, e.target.checked)}
          />
          <label htmlFor={item.name}>{item.text}</label>
        </p>
      ))}
    </div>
  );
};

export default Ex2;
