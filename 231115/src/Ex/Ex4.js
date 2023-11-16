import React from "react";
import Ex4sub from "./Ex4sub";

const Ex4 = () => {
  return (
    <div className="borderTop">
      <h2>Ex4 - defaultProps</h2>
      <Ex4sub />
      <Ex4sub
        name="아메리카노"
        type="아이스"
        price="4500"
        size="tall"
        color="tomato"
        bgcolor="orange"
      />
      <Ex4sub name="라떼" price="5000" color="lightblue" done={false} />
    </div>
  );
};

export default Ex4;

//아메리카노, 아이스, tall, 4500, color, bgcolor
// h3 > ul > li
