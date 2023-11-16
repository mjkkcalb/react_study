import React, { useState } from "react";

const btnStyle = {
  border: "1px solid #000",
  backgroundColor: "#fff",
  padding: 10,
  margin: 5,
  fontWeight: "bold",
};

const colors = [
  { id: 1, bg: "tomato" },
  { id: 2, bg: "orange" },
  { id: 3, bg: "teal" },
  { id: 4, bg: "skyblue" },
  // { id: 5, bg: "maroon" },
];

const Ex4State = () => {
  // 토글 출력
  const [name, setName] = useState(true);
  const toggleName = () => {
    setName(!name);
  };

  // 컬러 배열에 객체 추가
  const [arr, setArr] = useState(colors);
  const addColor = () => {
    // 방법1)
    // const newColor = [...arr];
    // newColor[4] = { id: 5, bg: "maroon" };

    // 방법2) 바로 대입
    const newColor = [...arr, { id: 5, bg: "maroon" }];
    setArr(newColor);
    // console.log(arr);
  };

  return (
    <section className="borderTop">
      <h2>Ex4 - state</h2>
      {/* 클릭이벤트를 통해 name값이 버튼1, 버튼2로 토글 출력 */}
      <button style={btnStyle} onClick={toggleName}>
        {name ? "버튼1" : "버튼2"}
      </button>

      {/* 버튼을 클릭하면 제일 마지막 줄에 색상 추가
          : 컬러 배열에 객체 추가 == useState() */}
      <button style={btnStyle} onClick={addColor}>
        maroon 색상 추가
      </button>

      <ul>
        {/* 각각의 li에 컬러명 출력, 배경색 변경 == .map() */}
        {arr.map((color) => {
          const { id, bg } = color;
          return (
            <li
              key={id}
              style={{ backgroundColor: bg, width: "30%", marginTop: 5 }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Ex4State;
