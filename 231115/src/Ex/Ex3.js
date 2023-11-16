import React from "react";

const Ex3 = () => {
  return (
    <div className="borderTop">
      <h2>현재 시간</h2>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Ex3;
