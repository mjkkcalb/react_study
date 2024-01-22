// SearchSave.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Save1 from "./Save1";
import Save2 from "./Save2";
import Save3 from "./Save3";
import searchSaveStyles from "./searchSave.module.css"; // 변경된 파일명
import { BiHeart } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";
import { BiX } from "react-icons/bi";

const SearchSave = ({ isVisible, onResetClick, bookInfo }) => {
  const [selectedOption, setSelectedOption] = useState("읽은 책");

  const handleCategoryClick = (category) => {
    setSelectedOption(category);
  };

  const handleLinkClick = (category, event) => {
    event.preventDefault();
    handleCategoryClick(category);
  };

  const onSaveClick = (bookInfo) => {
    // 이 부분에서 페이지 전환 또는 추가 동작 수행
    console.log("책을 찜했습니다.", bookInfo);
  };

  return (
    <div className={searchSaveStyles.searchsave}>
      <div
        className={`${searchSaveStyles.searchSave} ${
          isVisible ? searchSaveStyles.show : ""
        }`}>
        <button onClick={onResetClick} className={searchSaveStyles.btn}>
          X
        </button>
        <h3 className={searchSaveStyles.title}>어떤 책 인가요?</h3>

        <ul
          style={{ display: "flex", margin: "0 auto" }}
          className={searchSaveStyles.searchNav}>
          <li
            className={
              selectedOption === "읽은 책" ? searchSaveStyles.active : ""
            }>
            <Link to="/save1" onClick={(e) => handleLinkClick("읽은 책", e)}>
              <BiFlag />
              <p>읽은 책</p>
            </Link>
          </li>
          <li
            className={
              selectedOption === "읽고 있는 책" ? searchSaveStyles.active : ""
            }>
            <Link
              to="/save2"
              onClick={(e) => handleLinkClick("읽고 있는 책", e)}>
              <BiBookmark />
              <p>읽고 있는 책</p>
            </Link>
          </li>
          <li
            className={
              selectedOption === "읽고 싶은 책" ? searchSaveStyles.active : ""
            }>
            <Link
              to="/save3"
              onClick={(e) => handleLinkClick("읽고 싶은 책", e)}>
              <BiHeart />
              <p>읽고 싶은 책</p>
            </Link>
          </li>
        </ul>

        {selectedOption === "읽은 책" && <Save1 bookInfo={bookInfo} />}
        {selectedOption === "읽고 있는 책" && <Save2 bookInfo={bookInfo} />}
        {selectedOption === "읽고 싶은 책" && (
          <Save3 onSaveClick={onSaveClick} bookInfo={bookInfo} />
        )}
      </div>
    </div>
  );
};

export default SearchSave;
