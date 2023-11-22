import React, { useState } from "react";
import styled from "styled-components";

const FriendsAdd = ({ onAdd }) => {
  const Div = styled.div`
    display: "flex";
    flex-direction: "column";
    background-color: #ddd;
    text-align: left;
    padding: 10px 15px;
    margin: 30px auto 0;
    border-radius: 20px;
  `;
  const Label = styled.label`
    width: 100%;
  `;
  const Input = styled.input`
    width: 80%;
    height: 20px;
    margin-left: 15px;
  `;
  const Button = styled.button`
    margin: 10px auto;
    width: 100%;
    height: 30px;
  `;

  const [newItem, setNewITem] = useState({ name: "", age: "", image: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewITem((prevFriend) => ({ ...prevFriend, [name]: value }));
  };

  const handleAddItem = () => {
    onAdd(newItem);
    setNewITem({ name: "", age: "", image: "" });
  };

  return (
    <Div>
      <p>
        <Label>
          이름
          <Input
            type="text"
            name="name"
            placeholder="이름을 입력해 주세요"
            value={newItem.name}
            onChange={handleInputChange}
          />
        </Label>
      </p>
      <p>
        <Label>
          나이
          <Input
            type="text"
            name="age"
            placeholder="나이를 입력해 주세요"
            value={newItem.age}
            onChange={handleInputChange}
          />
        </Label>
      </p>
      <p>
        <Label>
          사진
          <Input
            type="text"
            name="image"
            placeholder="경로를 입력해 주세요"
            value={newItem.image}
            onChange={handleInputChange}
          />
        </Label>
      </p>
      <Button onClick={handleAddItem}>추가</Button>
    </Div>
  );
};

export default FriendsAdd;
