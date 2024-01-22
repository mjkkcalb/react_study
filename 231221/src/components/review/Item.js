// Item.js
import React from "react";
import { useTodos } from "../../context/FeedContext";
import ItemStar from "./ItemStar";
import FeedStyle from "../feed/Feed.module.css";

const Item = ({ list }) => {
  const { id, text, selectedDate, selectedBook, savedRating } = list;
  const { onDel } = useTodos();

  return (
    <li className={FeedStyle.reviewItem}>
      {selectedBook && (
        <img
          src={selectedBook.imgUrl}
          alt={selectedBook.title}
          className={FeedStyle.reviewbookImg}
        />
      )}
      <div className={FeedStyle.reviewTextBox}>
        {selectedBook && (
          <h2>{selectedBook.title.toString().slice(0, 7)}...</h2>
        )}
        {text && <p>&quot;{text}&quot;</p>}
        {/* savedRating을 직접 전달 */}
        <ItemStar savedRating={list.rating} />
      </div>
      {selectedDate && <span className={FeedStyle.reviewDate}>{selectedDate}</span>}
      <button onClick={() => onDel(id)} className={FeedStyle.reviewDelBtn}>
        삭제
      </button>
    </li>
  );
};

export default Item;
