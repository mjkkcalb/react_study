import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import DetailList from "./DetailList";
import LocalStorageService from "../../LocalStorage";
import { BiChevronLeft } from "react-icons/bi";

import MyBookStyle from "./mybook.module.css";

const DetailPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const { bookInfo, pageTitle } = state;
  const { isbn } = useParams();
  const [updatedListData, setUpdatedListData] = useState([]);
  const [savedBooks2, setSavedBooks2] = useState([]);

  const handleDelete = (id) => {
    try {
      // Get the current savedBooks2 data from local storage
      const likedBooks = LocalStorageService.getItem("likedBooks") || [];

      // Filter out the book to be deleted based on the id
      const filteredBooks = likedBooks.filter((book) => book.id !== id);

      // Update the local storage and state with the filtered data

      LocalStorageService.setItem("likedBooks", filteredBooks);
      setSavedBooks2(filteredBooks);

      // Navigate to the "/mybook" route
      navigate("/mybook");
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
  };

  const handleCancel = () => {
    navigate("/mybook");
  };

  return (
    <div className={MyBookStyle.DetailPage}>
      <div className={MyBookStyle.DetailPageTop}>
        {" "}
        <button
          type="button"
          onClick={handleCancel}
          className={MyBookStyle.DetailPagePrev}>
          <BiChevronLeft />
        </button>
        {bookInfo ? (
          <>
            <button
              onClick={() => {
                console.log("bookInfo:", bookInfo);
                if (bookInfo) {
                  console.log("bookInfo.id:", bookInfo.id);
                  handleDelete(bookInfo.id);
                }
              }}
              className={MyBookStyle.DetailPageDel}>
              삭제
            </button>
          </>
        ) : (
          <p>도서 정보를 불러올 수 없습니다.</p>
        )}
      </div>

      {bookInfo ? (
        <>
          <p className={MyBookStyle.DetailPageTitle2}>
            {bookInfo.title || "알 수 없음"}
          </p>
          <img
            src={bookInfo.cover}
            alt=""
            className={MyBookStyle.DetailPageImg2}
          />

          <p className={MyBookStyle.DetailPageAuthor2}>
            {bookInfo.author || "알 수 없음"}
          </p>
          <p className={MyBookStyle.DetailPageRead}>{pageTitle}</p>
        </>
      ) : (
        <p>도서 정보를 불러올 수 없습니다.</p>
      )}
    </div>
  );
};

export default DetailPage2;
