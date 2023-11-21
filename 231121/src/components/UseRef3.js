import { useRef, useState } from "react";
import myStyled from "styled-components";

const Box = myStyled.div`
width: 150px;
height:150px;
background-color: orange;
margin: 30px;
transtion: 0.8s;
text-align : center;
`;

const UseRef3 = () => {
  const boxRef = useRef(null);
  let [num, setNum] = useState(1);

  const nextRotate = () => {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  const prevRotate = () => {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };

  return (
    <div className="borderTop">
      <h2>useRef3</h2>
      <button onClick={nextRotate}>오른쪽으로</button>
      <button onClick={prevRotate}>왼쪽으로</button>

      <Box ref={boxRef}>box</Box>
    </div>
  );
};

export default UseRef3;
