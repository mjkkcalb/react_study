// New.js
import React, { useState } from "react";
import { useTodos } from "../../context/FeedContext";
import { useNavigate } from "react-router-dom";
import Newsearch from "./Newsearch";
import NewStar from "./NewStar";
import FeedStyle from "../feed/Feed.module.css";

const New = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const { text, onAdd, changeInput, selectedDate, setSelectedDate } =
    useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0.5);
  const [savedRating, setSavedRating] = useState(2);
  const { onSaveRating } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    if (selectedBook) {
      await onAdd(selectedBook.title, selectedBook.imgUrl, rating); // Rating 추가
    } else {
      await onAdd(text, null, rating); // Rating 추가
    }
    navigate("/feed");
  };

  const handleSaveRating = (rating) => {
    console.log("Selected Rating:", rating);
    onSaveRating(rating);
  };

  const onDragEnd = (rating) => {
    // 드래그로 선택된 값을 handleSaveRating를 통해 받아옴
    console.log("Selected Rating:", rating);
    handleSaveRating(rating);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={FeedStyle.newSearchHigh}>
      <form onSubmit={handleSubmit} className={FeedStyle.FeedMargin}>
        <div className={FeedStyle.newTop}>
          <button type="button" onClick={() => navigate("/feed")}>
            뒤로가기
          </button>
          <button type="submit" style={{ marginLeft: "50px" }}>
            저장
          </button>
        </div>
        <div className={FeedStyle.newInfoBox}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={FeedStyle.newDate}
          />
          <div
            onClick={openModal}
            className={FeedStyle.newModalOpen}
            style={{
              display: selectedBook ? "none" : "block",
            }}>
            도서를 선택해주세요
          </div>

          {selectedBook && (
            <>
              <h2 className={FeedStyle.newTitle}> {selectedBook.title}</h2>
              <img src={selectedBook.imgUrl} alt={selectedBook.title} />
            </>
          )}
          <input
            type="text"
            onChange={changeInput}
            value={text}
            className={FeedStyle.newInputText}
            placeholder="인상 깊은 문장을 작성해 주세요"
          />
          <NewStar
            onSaveRating={handleSaveRating}
            savedRating={savedRating}
            onDragEnd={onDragEnd}
          />
          {isModalOpen && (
            <div className={FeedStyle.newInfoModalBack}>
              <div className={FeedStyle.newInfoModalFront}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={FeedStyle.newModalBtn}>
                  닫기
                </button>
                <Newsearch
                  onBookClick={setSelectedBook}
                  isModalOpen={isModalOpen}
                  closeModal={closeModal}
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default New;
