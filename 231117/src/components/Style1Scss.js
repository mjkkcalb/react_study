import React from "react";
import "../assets/style/Style1Scss.scss";

const Style1Scss = () => {
  return (
    <div className="borderTop">
      <h2>Scss 스타일</h2>
      {/* scss 과거부터 전통적으로 사용되는 스타일 방식 */}
      <div className="container">
        <div className="box orange">orange</div>
        <div className="box salmon">salmon</div>
        <div className="box tomato">tomato</div>
        <div className="box maroon">maroon</div>
        <div className="box teal">teal</div>
      </div>
    </div>
  );
};

export default Style1Scss;
