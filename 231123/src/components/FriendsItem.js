import React from "react";

const FriendsItem = ({ item, onDelete }) => {
  const { image, name, age, id } = item;
  const path = process.env.PUBLIC_URL;
  return (
    <li>
      <figure>
        <img src={path + image} alt={name} />
        <figcaption>
          이름 : {name} / 나이 : {age}
        </figcaption>
        <button onClick={() => onDelete(id)}>삭제</button>
      </figure>
    </li>
  );
};

export default FriendsItem;
