import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-color: teal;
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 20px;
`;

// 실행 컴포넌트 앞에 작성
const mov = keyframes`
0%, 100% {transform: translateY(0)}
25% { transform: translateY(-20px) rotate(20deg)}
50% { transform: translateY(10px)}
70% { transform: translateY(-20px) rotate(-20deg)}
`;

const Rabbit = styled.div`
  font-size: 5rem;
  animation: ${mov} 0.5s infinite ease-in-out;
`;

const Style4Com = () => {
  return (
    <Container>
      <Rabbit>🐇</Rabbit>
    </Container>
  );
};

export default Style4Com;
