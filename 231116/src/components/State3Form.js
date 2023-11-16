import React, { useState } from "react";

const State3Form = () => {
  const [isChk, setIsChk] = useState(false);

  const onCheck = (evt) => {
    const { checked } = evt.target;
    setIsChk(checked);
  };

  return (
    <section className="borderTop">
      <h2>오늘의 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: isChk ? "line-through" : "none",
          color: isChk ? "tomato" : "maroon",
        }}>
        <label>
          <input type="checkbox" onChange={onCheck} checked={isChk} />
          우산챙기기
        </label>
      </p>
    </section>
  );
};

export default State3Form;
