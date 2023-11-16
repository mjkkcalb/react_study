import React, { useState } from "react";

const Ex5Form = () => {
  const [isChk, setIsChk] = useState(false);

  const onCheck = (evt) => {
    const { checked } = evt.target;
    setIsChk(checked);
  };

  return (
    <section className="borderTop">
      <p>
        <label>
          <input type="checkbox" onChange={onCheck} checked={isChk} />
          {isChk ? "박스 보임" : "박스 숨김"}
        </label>
        {/* 체크박스를 체크하면 '박스 보임', 해제하면'박스 숨김' */}
      </p>
      {/* 위의 체크박스 체크하면 div 보임. 해제하면 안보임 */}
      {/*  만든 식
      <div
        style={{
          width: isChk ? 100 : 0,
          height: 100,
          backgroundColor: "teal",
        }}>
        {isChk ? "box" : null}
      </div> */}
      {isChk && (
        <div style={{ width: 100, height: 100, backgroundColor: "teal" }}>
          box
        </div>
      )}
    </section>
  );
};

export default Ex5Form;
