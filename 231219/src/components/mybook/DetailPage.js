import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import DetailList from "./DetailList";
import LocalStorageService from "../../LocalStorage";

const DetailPage = () => {
  const location = useLocation();
  const state = location.state || {};
  const { bookInfo, pageTitle } = state;
  const { isbn } = useParams();
  const [updatedListData, setUpdatedListData] = useState([]);

  useEffect(() => {
    try {
      const storedListData =
        JSON.parse(localStorage.getItem(`listData-${bookInfo.isbn}`)) || [];
      console.log("Stored List Data:", storedListData);

      const filteredListData = storedListData.filter(
        (item) => item.isbn === isbn
      );

      console.log("Filtered List Data:", filteredListData);

      setUpdatedListData(filteredListData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, [isbn, bookInfo]);

  const handleDeleteFromLocalStorage = () => {
    try {
      const savedBooks2 = LocalStorageService.getItem("savedBooks2") || [];
      const updatedBooks = savedBooks2.filter((book) => book.isbn13 !== isbn);
      LocalStorageService.setItem("savedBooks2", updatedBooks);
      // 아래의 코드 추가
      setSavedBooks2(updatedBooks); // MybookSave2 컴포넌트에서 state 업데이트
      navigate("/myBook", { replace: true }); // 페이지 다시 로드
    } catch (error) {
      console.error("Error deleting book from local storage:", error);
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
          <button onClick={handleDeleteFromLocalStorage}>삭제</button>
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
