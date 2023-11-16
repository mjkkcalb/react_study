import React from "react";

const Target = () => {
  const border = {
    border: "1px solid #000",
    padding: 10,
    display: "block",
    width: "50%",
    margin: 10,
  };
  const onClick = (e) => {
    // 사용자가 실제 클릭한 대상
    console.log("target: ", e.target);
    // 이벤트가 바인딩된 대상(이벤트 함수가 있는 버튼)
    console.log("currentnTarget: ", e.currentTarget);

    console.log("--------------");
  };

  return (
    <div className="borderTop">
      <h2>e.target, e.currentTarget</h2>
      <div onClick={onClick} style={border}>
        <span style={border}>span</span>
        <strong style={border}>click</strong>
      </div>
    </div>
  );
};

export default Target;
