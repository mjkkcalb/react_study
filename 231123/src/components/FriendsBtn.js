import React from "react";

const FriendsBtn = ({ onRemove, onReset }) => {
  return (
    <div>
      <button onClick={onRemove}>모두 삭제</button>
      <button onClick={onReset}>모두 복구</button>
    </div>
  );
};

export default FriendsBtn;
