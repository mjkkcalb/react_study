import React from "react";
import { useState } from "react";
import Box from "./Box";

const UseCallback1 = () => {
  const [size, setSize] = useState(100);

  const boxStyle = () => {
    {
      return {
        backgroundColor: "orange",
        width: `${size * 0.5}px`,
        height: `${size}px`,
        textAlign: "center",
        fontWeight: "bold",
      };
    }
  };

  const [isBg, setIsBg] = useState(false);
  return (
    <div>
      <h2>UseCallback</h2>
      <ul>
        <li>useMemo는 값을 반환</li>
        <li>UseCallback은 함수 반환</li>
        <li>
          주로 자식 컴포넌트로 전달되는 콜백함수를 메모이제이션하여 부모
          컴포넌트의 불필요한 렌더링 방지
        </li>
      </ul>
      <hr />
      <div
        style={{ backgroundColor: isBg ? "lightblue" : "tomato", padding: 20 }}>
        <Box boxStyle={boxStyle} />
        <input
          type="number"
          value={size}
          step={10}
          onChange={(e) => setSize(e.target.value)}
        />
        <hr />
        {/* 토글 버튼. "lightblue" : "tomato" */}
        <button onClick={() => setIsBg(!isBg)}>
          배경색 변경{isBg ? "tomato" : "lightblue"}
        </button>
      </div>
    </div>
  );
};

export default UseCallback1;
