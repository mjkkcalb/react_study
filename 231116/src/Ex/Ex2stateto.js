import React, { useState } from "react";

const Ex2State = () => {
  const [bgcolor, setBgcolor] = useState("#ddd");

  const boxStyle = {
    border: "1px solid #000",
    width: 100,
    height: 100,
    margin: 10,
    textAlign: "center",
  };

  const handleColor = () => {
    setBgcolor(bgcolor === "orange" ? "tomato" : "orange");
  };

  return (
    <section className="borderTop">
      <h2>Ex2 - state to 쌤</h2>
      <p>박스를 클릭할 때마다 색상1, 색상2 번갈아 나옴(토글)</p>

      <div
        style={{ ...boxStyle, backgroundColor: bgcolor }}
        onClick={handleColor}>
        box color:{bgcolor}
      </div>
    </section>
  );
};

export default Ex2State;
