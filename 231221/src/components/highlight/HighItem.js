// Item.js
import React from "react";
import { useHighTodos } from "../../context/FeedHighContext";
import FeedStyle from "../feed/Feed.module.css";

const HighItem = ({ list }) => {
  const { id, text, selectedDate, selectedBook } = list;
  const { onDel } = useHighTodos();

  return (
    <li className={FeedStyle.highItem}>

      {selectedBook && (
        <div
          style={{
            backgroundImage: `url(${selectedBook.imgUrl})`,
            width: "100%",
            height: "230px",
            borderRadius: "10px 10px 0 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: "-2",
          }}>
          <div className={FeedStyle.highBlurBox}></div>
          <div className={FeedStyle.highTextBox}>
            <img
              src={selectedBook.imgUrl}
              alt={selectedBook.title}
              className={`${FeedStyle.highbookImg}`}
            />
            <h2>{selectedBook.title.toString().slice(0, 15)}...</h2>
            {text && <p>&quot;{text}&quot;</p>}
          </div>
        </div>
      )}
      <div className={FeedStyle.highUndermBox}>
      {selectedDate && <span>{selectedDate}</span>}
      <button onClick={() => onDel(id)} className={FeedStyle.highDelBtn}>삭제</button>
      </div>
    </li>
  );
};

export default HighItem;
