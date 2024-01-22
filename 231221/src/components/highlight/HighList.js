import React from "react";
import Item from "./HighItem";
import { useHighTodos } from "../../context/FeedHighContext";
import FeedStyle from "../feed/Feed.module.css";

const HighList = () => {
  const { todos } = useHighTodos();
  return (
    <ul className={FeedStyle.highList}>
      {todos.map((list) => (
        <Item key={HighList.id} list={list} />
      ))}
    </ul>
  );
};

export default HighList;
