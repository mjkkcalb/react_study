import React from "react";
import FriendsItem from "./FriendsItem";

const FriendsList = ({ data, onDelete }) => {
  return (
    <ul>
      {data.map((item) => (
        <FriendsItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default FriendsList;
