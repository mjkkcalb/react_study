import React, { useState } from "react";
import FriendsAdd from "./FriendsAdd";
import FriendsList from "./FriendsList";
import CatData from "../assets/DB/CatData";
import styled from "styled-components";

const Friends = () => {
  const Container = styled.div`
    margin: 50px auto;
    width: 450px;
    padding: 40px;
    text-align: center;
    border: 3px solid #000;
    border-radius: 20px;
  `;
  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const H2 = styled.h2`
    margin: 0;
  `;
  const Label = styled.label`
    background-color: #000;
    color: #fff;
    width: 130px;
    padding: 10px 0;
    text-align: center;
    align-items: center;
    border-radius: 20px;
  `;
  const Button = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 5px;
    margin-left: 10px;
    border-radius: 20px;
  `;
  const [data, setData] = useState(CatData);
  const [isToggle, setIsToggle] = useState(false);
  const [count, setCount] = useState(data.length);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const DeleteAll = () => {
    setCount(0);
    setData([]);
  };
  const Restore = () => {
    setCount(CatData.length);
    setData(CatData);
  };

  const onDel = (id) => {
    setCount((Count) => Count - 1);
    setData(data.filter((list) => list.id !== id));
  };

  const onAdd = (newItem) => {
    setData([...data, { id: data.length + 1, ...newItem }]);
    setCount((Count) => Count + 1);
  };

  return (
    <Container>
      <Div>
        <H2>고양이 친구들 : {count}마리</H2>
        <Label htmlFor="">
          <input
            type="checkbox"
            id="chk"
            onClick={handleToggle}
            checked={isToggle ? true : false}
          />
          {isToggle ? "고양이 추가" : "추가 비활성"}
        </Label>
      </Div>
      <FriendsList data={data} onDel={onDel} />
      <Button onClick={DeleteAll}>모두 삭제</Button>
      <Button onClick={Restore}>초기 복구</Button>
      {isToggle && <FriendsAdd onAdd={onAdd} />}
    </Container>
  );
};

export default Friends;
