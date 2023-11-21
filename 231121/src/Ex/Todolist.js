import React from "react";
import Text from "./Text";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px auto;
  width: 300px;
  height: 300px;
  background-color: aliceblue;
  text-align: center;
`;
const H2 = styled.h2`
  padding-top: 20px;
`;

const Todolist = () => {
  return (
    <Container>
      <H2>to do list</H2>
      <Text />
    </Container>
  );
};

export default Todolist;
