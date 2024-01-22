import React, { useState, useEffect, useRef } from "react";
import FeedStyle from "../feed/Feed.module.css";

const NewStar = ({ onSaveRating, savedRating, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rating, setRating] = useState(savedRating);
  const ratingRef = useRef(null);
  const starWidth = 24;

  const handleRatingChange = (offsetX) => {
    const newRating = Math.min(
      5,
      Math.max(0.5, Math.floor(offsetX / starWidth) * 0.5 + 0.5)
    );
    setRating(newRating);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.classList.add("grabbing-cursor");
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.classList.remove("grabbing-cursor");
    onDragEnd(rating);
    onSaveRating(rating); // 변경된 별점을 저장
    console.log("Rating saved:", rating);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const rect = ratingRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      handleRatingChange(offsetX);
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.classList.remove("grabbing-cursor");
        onDragEnd(rating);
        onSaveRating(rating); // 변경된 별점을 저장
        console.log("Rating saved:", rating);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.classList.remove("grabbing-cursor");
      onDragEnd(rating);
      onSaveRating(rating); // 변경된 별점을 저장
      console.log("Rating saved:", rating);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, onDragEnd, rating, onSaveRating]);

  return (
    <div
      className={FeedStyle.starRating1}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}>
      <span
        className={FeedStyle.filledStars}
        ref={ratingRef}
        onMouseDown={handleMouseDown}>
        {"★".repeat(Math.max(0, Math.min(rating * 2, 5)))}
      </span>
      <span className={FeedStyle.emptyStars}>
        {"★".repeat(Math.max(0, 5 - rating * 2))}
      </span>
    </div>
  );
};

export default NewStar;
