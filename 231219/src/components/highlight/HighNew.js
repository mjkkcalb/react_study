import React, { useState } from "react";
import { useHighTodos } from "../../context/FeedHighContext";
import { useNavigate } from "react-router-dom";
import Newsearch from "./HighNewSearch";
import FeedStyle from "../feed/Feed.module.css";

const HighNew = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const { text, onAdd, changeInput, selectedDate, setSelectedDate } =
    useHighTodos(); // FeedHighContext에서 FeedContext로 수정
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    if (selectedBook) {
      await onAdd(selectedBook.title, selectedBook.imgUrl);
    } else {
      await onAdd(text);
    }
    navigate("/feed");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div  className={FeedStyle.newSearchHigh}>
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
        onChange={(e) => setSelectedDate(e.target.value)} className={FeedStyle.newDate}
      />
      <div
        onClick={openModal}
        className={FeedStyle.newModalOpen}
        style={{
          display: selectedBook ? "none" : "block",
        }}
      >
        도서를 선택해주세요
      </div>

      {selectedBook && (
        <>
          <h2  className={FeedStyle.newTitle}> {selectedBook.title}</h2>
          <img src={selectedBook.imgUrl} alt={selectedBook.title} />
        </>
      )}
      <br />
      <input type="text" onChange={changeInput} value={text} className={FeedStyle.newInputText}/>
      {isModalOpen && (
        <div className={FeedStyle.newInfoModalBack}>
          <div className={FeedStyle.newInfoModalFront}>
          <button type="button" onClick={closeModal} className={FeedStyle.newModalBtn}>
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

export default HighNew;
