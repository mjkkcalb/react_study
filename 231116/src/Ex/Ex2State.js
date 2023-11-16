import React, { useState } from "react";

const Ex2State = () => {
  const [isToggle, setIsToggle] = useState("#ddd");
  const colorChange = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="borderTop">
      <h1>Ex2 - state</h1>
      <p>박스를 클릭할 때마다 색상1, 색상2 번갈아 나옴(토글)</p>

      <div
        onClick={colorChange}
        style={{
          width: 150,
          height: 150,
          backgroundColor: isToggle ? "red" : "orange",
        }}>
        box
      </div>
    </section>
  );
};

export default Ex2State;
<h1></h1>;
