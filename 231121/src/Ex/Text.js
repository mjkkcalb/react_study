import React, { useRef, useState } from "react";
import List from "./List";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;
const Input = styled.input``;
const Button = styled.button`
  margin-left: 5px;
`;

const Text = () => {
  const [txt, setTxt] = useState("");
  const [data, setData] = useState([]);
  const [isCheck, setIsCheck] = useState(false);

  const listItem = (e) => {
    const { value } = e.target;
    setTxt(value);
  };

  const idRef = useRef(1);
  const addItem = () => {
    setData((item) => [...item, { id: idRef.current++, text: txt }]);
    setTxt("");
  };

  const Delate = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const onCheck = (id) => {
    setData((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      );
    });
  };

  return (
    <Container>
      <Input type="text" value={txt} onChange={listItem} />
      <Button onClick={addItem}>add</Button>
      <List data={data} onDelate={Delate} onCheck={onCheck} />
    </Container>
  );
};

export default Text;
