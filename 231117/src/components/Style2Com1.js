import React from "react";
import styled from "styled-components";

/*
  const 컴포넌트명 = styled.태그명`
    css 스타일
  `

  const 컴포넌트명 = styled('태그')`
    css 스타일
  `
*/
const Container = styled.section`
  border: 1px solid #000;
  padding: 20px;
  margin: 0 auto;
  width: 50vw;
`;

const Box1 = styled.div`
  background-color: orange;
  width: 80%;
  padding: 20px;
  transition: 3s;
  &:hover {
    background-color: maroon;
    color: #fff;
  }
`;

const Box2 = styled("p")`
  border: 1px solid #000;
`;
const Box3 = styled("button")`
  border: 1px solid #000;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: white;
  }
`;

const Style2Com1 = () => {
  return (
    <Container>
      <h1>scss styled components 방식</h1>
      <Box1> 첫번째 박스</Box1>
      <Box2> 두번째 박스</Box2>
      <Box3> 세번째 박스</Box3>
    </Container>
  );
};

export default Style2Com1;
