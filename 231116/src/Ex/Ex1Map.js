import React from "react";

const Ex1Map = () => {
  const color = [
    { no: 1, bg: "tomato" },
    { no: 2, bg: "orange" },
    { no: 3, bg: "salmon" },
    { no: 4, bg: "lightblue" },
  ];

  return (
    <div className="borderTop">
      <h2 className="margin-10">.map() 연습</h2>
      <ul style={{ margin: 0 }}>
        {color.map((bgname) => {
          return (
            <li
              key={bgname.id}
              style={{
                backgroundColor: bgname.bg,
                width: "100px",
                marginTop: "5px",
              }}>
              {bgname.bg}
            </li>
          );
        })}
      </ul>
      <ul style={{ marginTop: "20px", fontSize: "1.3rem" }}>
        {color.map((color) => {
          const { no, bg } = color;
          return (
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ex1Map;
