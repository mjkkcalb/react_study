import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import ErrorPage from "./ErrorPage";
import SearchSave from "./SearchSave";

const SearchInfo = () => {
  const currentLocation = useLocation();
  const bookInfo = currentLocation.state && currentLocation.state.bookInfo;
  const [saveInfo, setSaveInfo] = useState({
    isVisible: false,
    isInfoActive: false,
  });

  const handleResetClick = () => {
    setSaveInfo({ isVisible: false, isInfoActive: false });
  };

  if (!bookInfo || !bookInfo.isbn) {
    return <ErrorPage message="책 정보를 찾을 수 없습니다." />;
  }

  const toggleSaveVisibility = () => {
    setSaveInfo((prev) => ({
      isVisible: !prev.isVisible,
      isInfoActive: !prev.isVisible,
    }));
  };

  return (
    <div className={`searchInfo ${saveInfo.isInfoActive ? "active" : ""}`}>
      <img src={bookInfo.cover} alt={bookInfo.title} />
      <h2>책 제목: {bookInfo.title}</h2>
      <h2>작가: {bookInfo.author}</h2>
      <p>ISBN: {bookInfo.isbn}</p>
      <p>출판사: {bookInfo.publisher}</p>
      <p>출판일: {bookInfo.pubDate}</p>
      <a href={bookInfo.link} target="_blank" rel="noopener noreferrer">
        더보기
      </a>
      <Link to="/">
        <BiChevronLeft style={{ fontSize: "4rem" }} />
      </Link>
      <button className="save" onClick={toggleSaveVisibility}>
        저장
      </button>
      <SearchSave
        isVisible={saveInfo.isVisible}
        onResetClick={handleResetClick}
        bookInfo={bookInfo}
      />
    </div>
  );
};

export default SearchInfo;
