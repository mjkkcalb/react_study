// SearchInfo.js

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import ErrorPage from "./ErrorPage";
import SearchSave from "./SearchSave";
import searchInfoStyles from "./searchInfo.module.css";

const SearchInfo = () => {
  const currentLocation = useLocation();
  const publicUrl = process.env.PUBLIC_URL;
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
    <div className={searchInfoStyles.searchInfo2}>
      <div
        className={`${searchInfoStyles.searchInfo} ${
          saveInfo.isInfoActive ? searchInfoStyles.active : ""
        }`}></div>
      <div className={searchInfoStyles.searchInfo1}>
        <div className={searchInfoStyles.btns}>
          <Link to="/search/*">
            <BiChevronLeft style={{ fontSize: "3rem", color: "black" }} />
          </Link>
          <button
            className={searchInfoStyles.save}
            onClick={toggleSaveVisibility}>
            저장
          </button>
        </div>
        <div className={searchInfoStyles.infos}>
          <div className={searchInfoStyles.bookBg}>
            <img src={`${publicUrl}/images/draw.svg`} alt="" />
          </div>
          <img src={bookInfo.cover} alt={bookInfo.title} />
          <p className={searchInfoStyles.infoT}>
            {bookInfo.author.toString().slice(0, 10)}... (p)
          </p>
          <span className={searchInfoStyles.line}></span>
          <div className={searchInfoStyles.ttBox}>
            <p className={searchInfoStyles.mainTxt}>책 소개</p>
            <p className={searchInfoStyles.subTxt}>
              줄거리 - {bookInfo.description.toString().slice(0, 50)}...
            </p>
            <p className={searchInfoStyles.mainTxt}>출판사</p>
            <p className={searchInfoStyles.subTxt}>{bookInfo.publisher}</p>
            <p className={searchInfoStyles.mainTxt}>ISBN</p>
            <p className={searchInfoStyles.subTxt}> {bookInfo.isbn}</p>
            <p className={searchInfoStyles.mainTxt}>회원 평균 별점</p>
            <p className={searchInfoStyles.subTxt}>
              {" "}
              <FaStar style={{ color: "gold", fontSize: "1.5rem" }} />
              {bookInfo.customerReviewRank}
            </p>
            <div className={searchInfoStyles.flex}>
              <a href={bookInfo.link} target="_blank" rel="noopener noreferrer">
                자세히 보기
              </a>
              <img src={`${publicUrl}/images/Boring.png`} alt="지루한 강아지" />
              <span className={searchInfoStyles.infoTxt}>
                도서 DB 제공: 알라딘
              </span>
            </div>
          </div>

          <div className={searchInfoStyles.saveBox}>
            <SearchSave
              isVisible={saveInfo.isVisible}
              onResetClick={handleResetClick}
              bookInfo={bookInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInfo;
