// ItemStar.js
import React from "react";
import FeedStyle from "../feed/Feed.module.css";

const ItemStar = ({ savedRating }) => {
  const renderStars = () => {
    const filledStars = "★".repeat(Math.max(0, Math.min(savedRating * 2, 5)));
    const emptyStars = "★".repeat(Math.max(0, 5 - savedRating * 2));

    return (
      <>
        <span className={FeedStyle.filledStars}>{filledStars}</span>
        <span className={FeedStyle.emptyStars}>{emptyStars}</span>
      </>
    );
  };

  return <div className={FeedStyle.starRating2}>{renderStars()}</div>;
};

export default ItemStar;
