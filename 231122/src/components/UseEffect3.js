import React, { useState } from "react";
import UseEffect3sub from "./UseEffect3sub";

const UseEffect3 = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section>
      <h2>UseEffect3</h2>
      {/* 토글 버튼 */}
      <button onClick={handleToggle}>{isToggle ? "숨김" : "보임"}</button>
      {isToggle && <UseEffect3sub />}
    </section>
  );
};

export default UseEffect3;
