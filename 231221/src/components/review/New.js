import React, { useState } from "react";
import { useTodos } from "../../context/FeedContext";
import { useNavigate } from "react-router-dom";
import Newsearch from "./Newsearch";
import NewStar from "./NewStar";
import FeedStyle from "../feed/Feed.module.css";
import { BiChevronLeft } from "react-icons/bi";

const New = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const { text, onAdd, changeInput, selectedDate, setSelectedDate } =
    useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0.5);
  const [savedRating, setSavedRating] = useState(2);
  const { onSaveRating } = useTodos();
  const maxLength = 15; // 최대 글자 수

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("날짜를 선택해주세요.");
      return;
    }
    if (!selectedBook) {
      alert("도서를 선택해주세요.");
      return;
    }

    if (!text) {
      alert("리뷰를 작성해주세요.");
      return;
    }

    await onAdd(selectedBook.title, selectedBook.imgUrl, rating);
    navigate("/feed");
  };

  const handleSaveRating = (rating) => {
    console.log("Selected Rating:", rating);
    onSaveRating(rating);
  };

  const onDragEnd = (rating) => {
    console.log("Selected Rating:", rating);
    handleSaveRating(rating);
  };

  const openModal = () => {
    setSelectedBook(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    const isConfirmed = window.confirm("작성을 취소하시겠습니까?");

    if (isConfirmed) {
      navigate("/feed");
    }
  };
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className={FeedStyle.newSearchHigh}>
      <div className={FeedStyle.newSearchHighSub}>
        <form onSubmit={handleSubmit} className={FeedStyle.FeedMargin}>
          <div className={FeedStyle.newTop}>
            <button
              type="button"
              onClick={handleCancel}
              className={FeedStyle.SearchHighBackBtn}>
              <BiChevronLeft />
            </button>
            <button
              type="submit"
              style={{ marginLeft: "50px" }}
              className={FeedStyle.SearchHighSubmitBtn}>
              저장
            </button>
          </div>
          <div className={FeedStyle.newInfoBox}>
            <div className={FeedStyle.newInfoDateBox}>
              <p className={FeedStyle.newDateTxt}>작성일:</p>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={FeedStyle.newDate}
              />
            </div>
            <div
              onClick={openModal}
              className={FeedStyle.newModalOpen}
              style={{
                display: selectedBook ? "none" : "block",
              }}>
              <p>도서를 선택해주세요</p>
              <img src={`${publicUrl}/images/Addbook1.png`} alt="도서추가" />
            </div>

            {selectedBook && (
              <div onClick={openModal}>
                <h2 className={FeedStyle.newTitle}> {selectedBook.title}</h2>
                <img src={selectedBook.imgUrl} alt={selectedBook.title} />
              </div>
            )}

            <div>
              <input
                type="text"
                onChange={(e) => {
                  if (e.target.value.length <= maxLength) {
                    changeInput(e);
                  }
                }}
                value={text}
                placeholder='"리뷰를 작성해주세요"'
                className={FeedStyle.newInputText}
              />
              <p className={FeedStyle.newInputSubText}>
                {text.length}/{maxLength}
              </p>
            </div>

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
    </div>
  );
};

export default New;
