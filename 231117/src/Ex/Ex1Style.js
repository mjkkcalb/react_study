import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => (props.size ? props.size : "50%")};
  border: 3px solid #000;
  margin: 50px auto;
  padding: 20px;
  border-radius: 30px;
  background-color: lightblue;
`;
const Title = styled.h2`
  font-family: "나눔고딕", sans-serif;
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background-color: #eee;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px 3px;
  padding: 5px 20px;
  font-size: 1.5rem;
  border-radius: 10px;
  &:hover {
    background-color: #83a2ff;
  }
  &.plus::after {
    content: "+";
  }
  &.minus::after {
    content: "-";
  }
  &:disabled {
    background-color: red;
    filter: grayscale(50%);
  }
`;

const Ex1Style = () => {
  const [count, setCount] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    //setCount(count >= max ? max : count + 1);
    setCount((num) => (num >= max ? max : num + 1));
  };
  const decrement = () => {
    //setCount(count === min ? min : count - 1);
    setCount((num) => (num === min ? min : num - 1));
  };

  return (
    <Box size="300px">
      {/* 0이하, 10이상으로 커지면 버튼 비활성화 */}
      <Title>count : {count}</Title>
      {/* 이 버튼을 클릭하면 1씩 증가 */}
      <Button className="plus" onClick={increment} />
      {/* 이 버튼을 클릭하면 1씩 감소 */}
      <Button className="minus" onClick={decrement} />
    </Box>
  );
};

export default Ex1Style;
