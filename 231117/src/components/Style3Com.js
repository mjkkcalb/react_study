import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
  width: ${(props) => props.wt};
  text-align: center;
  background-color: ${(props) => (props.bg ? props.bg : "black")};
`;
const Title = styled.h2`
  font-size: 1.2rem;
  color: tomato;
`;
const Box = styled.div`
  text-align: center;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "pink")};
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${(props) => (props.width ? props.width : "100px")};

  ${(props) =>
    props.primary &&
    css`
      background-color: #000;
      width: 80%;
      display: block;
      color: white;
    `}
`;

const Style3Com = () => {
  return (
    //사용자 정의 props명 -> wt
    <Wrapper wt="70vw" bg="#ddd">
      <Title>styled-components</Title>
      <Box width="120px" bgcolor="tomato">
        box1
      </Box>
      <Box width="200px" bgcolor="teal">
        box2
      </Box>
      <Box>box3</Box>
      <Box primary>box4</Box>
    </Wrapper>
  );
};

export default Style3Com;
