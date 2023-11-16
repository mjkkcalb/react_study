import React from "react";

//하위 컴포넌트
function Ex5Box({ width, height, backgroundColor, title, border }) {
  const borderStyle = border || ["3px", "dotted", "#000"];
  const boxStyle = {
    width: width || 150,
    height: height || 50,
    backgroundColor: backgroundColor || "#ddd",
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
    margin: "20px auto",
    padding: "10px",
  };
  return <div style={boxStyle}>{title}</div>;
}

const Ex5 = () => {
  return (
    <div className="borderTop">
      <h2>스타일 속성(props) 넘기기</h2>
      <Ex5Box width="300px" height="300px" backgroundColor="red" title="box1" />
      <Ex5Box
        width={100}
        height={100}
        backgroundColor={"tomato"}
        title="box2"
      />
      <Ex5Box border={["6px", "solid", "blue"]} title="box3" />
    </div>
  );
};

export default Ex5;
//div
//width, height, backgroundcolor, ...
