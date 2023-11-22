import React from "react";
import styled from "styled-components";

const FriendsItem = ({ item, onDel }) => {
  const Li = styled.li`
    display: flex;
    margin: 30px auto;
    background-color: #eee;
    border-radius: 30px;
    padding: 30px 30px;
  `;
  const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `;
  const Div = styled.div`
    margin-left: 50px;
  `;
  const Strong = styled.strong`
    margin: 0;
  `;
  const P = styled.p`
    margin: 0;
    padding-top: 20px;
    padding-bottom: 10px;
  `;
  const Button = styled.button`
    width: 50px;
  `;

  const { id, name, age, image } = item;
  return (
    <Li key={id}>
      <Img src={image} alt={name} />
      <Div>
        <Strong>이름:{name}</Strong>
        <P>나이: {age}</P>
        <Button onClick={() => onDel(id)}>삭제</Button>
      </Div>
    </Li>
  );
};

export default FriendsItem;
