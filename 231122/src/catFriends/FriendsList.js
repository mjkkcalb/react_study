import React from "react";
import FriendsItem from "./FriendsItem";
import styled from "styled-components";

const FriendsList = ({ data, onDel }) => {
  const Ul = styled.ul`
    list-style: none;
    margin: 0 auto;
    text-align: left;
    padding: 0;
  `;

  return (
    <Ul>
      {data.map((item) => (
        <FriendsItem key={item.id} item={item} onDel={onDel} />
      ))}
    </Ul>
  );
};

export default FriendsList;
