import React from "react";
import Item from "./Item";
import { useTodos } from "../../context/FeedContext";
import FeedStyle from "../feed/Feed.module.css";

const List = () => {
  const { todos } = useTodos();
  return (
    <ul className={FeedStyle.reviewList}>
      {todos.map((list) => (
        <Item key={list.id} list={list} />
      ))}
    </ul>
  );
};

export default List;
