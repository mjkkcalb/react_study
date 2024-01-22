import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import DetailList from "./DetailList";
import LocalStorageService from "../../LocalStorage";

const DetailPage = () => {
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
      const savedBooks2 = LocalStorageService.getItem("savedBooks2") || [];
      const savedBooks1 = LocalStorageService.getItem("savedBooks1") || [];

      // Filter out the book to be deleted based on the id
      const filteredBooks = savedBooks2.filter((book) => book.id !== id);
      const filteredBooks1 = savedBooks1.filter((book) => book.id !== id);

      // Update the local storage and state with the filtered data
      LocalStorageService.setItem("savedBooks2", filteredBooks);
      setSavedBooks2(filteredBooks);
      LocalStorageService.setItem("savedBooks1", filteredBooks1);
      setSavedBooks2(filteredBooks1);

      // Navigate to the "/mybook" route
      navigate("/mybook");
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
  };

  return (
    <div>
      <h1>도서 상세 페이지</h1>

      {bookInfo ? (
        <>
          <img src={bookInfo.cover} alt="" />
          <p>책 제목: {bookInfo.title || "알 수 없음"}</p>
          <p>작가: {bookInfo.author || "알 수 없음"}</p>
          <p>{pageTitle}</p>
          <p>시작일: {bookInfo.startDate || "알 수 없음"}</p>
          <p>현재 페이지: {bookInfo.readingPage || "알 수 없음"}</p>
          <button
            onClick={() => {
              console.log("bookInfo:", bookInfo);
              if (bookInfo) {
                console.log("bookInfo.id:", bookInfo.id);
                handleDelete(bookInfo.id);
              }
            }}>
            삭제
          </button>
        </>
      ) : (
        <p>도서 정보를 불러올 수 없습니다.</p>
      )}
      <Link
        to={`/detailnew/${bookInfo.isbn}`}
        state={{
          bookInfo: bookInfo,
          listData: updatedListData,
        }}>
        <button>글쓰기</button>
      </Link>
      <DetailList
        bookInfo={bookInfo}
        listData={updatedListData}
        setListData={setUpdatedListData}
      />
    </div>
  );
};

export default DetailPage;
