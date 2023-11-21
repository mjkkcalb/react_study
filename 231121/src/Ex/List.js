import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;
const Div = styled.div`
  padding: 5px 0;
  margin: 5px auto;
  width: 80%;
  height: 100%;
  background-color: snow;
  border: 1px solid #ddd;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 5px;
`;
const Input = styled.input`
  margin-left: 5px;
`;

const List = ({ data, onDelate, onCheck }) => {
  return (
    <Container>
      {data.map((itm) => (
        <Div key={itm.id}>
          <label>
            <Input
              type="checkbox"
              onChange={() => onCheck(itm.id)}
              checked={itm.isCheck}
            />
            {itm.text}
          </label>
          <Button onClick={() => onDelate(itm.id)}>🗑️</Button>
        </Div>
      ))}
    </Container>
  );
};

export default List;
