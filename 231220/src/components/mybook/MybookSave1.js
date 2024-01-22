import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import myBookSaveOne from "./mybookSwiper.module.css";

import { FreeMode, Pagination } from "swiper/modules";
import myBookOne from "./mybook.module.css";

const MybookSave1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  const [savedBooks1, setSavedBooks1] = useState(
    LocalStorageService.getItem("savedBooks1") || []
  );

  const handleDelete = (id, isLikedBook) => {
    try {
      const key = isLikedBook ? "likedBooks" : "savedBooks1";
      const books = LocalStorageService.getItem(key) || [];

      // 해당 ID를 가진 책을 제외한 목록을 저장
      const updatedBooks = books.filter((book) => book.id !== id);
      LocalStorageService.setItem(key, updatedBooks);

      if (isLikedBook) {
        // likedBooks 상태 업데이트
      } else {
        setSavedBooks1(updatedBooks); // savedBooks1 상태 업데이트
      }
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
    closeModal();
    navigate("/myBook", { replace: true });
  };

  const openModal = (book) => {
    setIsModalOpen(true);
    setSelectedBook(book);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className={myBookSaveOne.readSwiper}>
      <h1>읽은책</h1>
      <Swiper
        slidesPerView={3.4}
        spaceBetween={14}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={myBookSaveOne.readSwiperSlide}>
        <SwiperSlide className={myBookSaveOne.readAddBook}>
          <Link to="/search">+</Link>
        </SwiperSlide>
        {savedBooks1.map((book, index) => (
          <SwiperSlide key={index} className={myBookSaveOne.readSwiperSlide}>
            <Link
              to={`/detailpage/${book.isbn13}`}
              state={{
                bookInfo: {
                  id: book.id,
                  cover: book.cover,
                  title: book.title,
                  author: book.author,
                  startDate: book.startDate,
                  readingPage: book.readingPage,
                  isbn: book.isbn13,
                },
              }}>
              <img
                src={book.cover}
                alt={book.title}
                onClick={() => openModal(book)}
              />
            </Link>
            {isModalOpen && selectedBook && selectedBook.id === book.id && (
              <div className={myBookOne.modal1}>
                <button onClick={() => handleDelete(selectedBook.id, false)}>
                  삭제
                </button>
                <button>수정</button>
                <button onClick={closeModal}>X</button>
              </div>
            )}
            {/* <p>제목: {book.title.toString().slice(0, 8) || "알 수 없음"}...</p>
            <p>작가: {book.author || "알 수 없음"}</p>
            <p>시작일: {book.startDate || "알 수 없음"}</p>
            <p>끝난일: {book.endDate || "알 수 없음"}</p>
            <p>
              평점: {book.rangeValue}
              <FaStar style={{ color: "gold", fontSize: "2rem" }} />
            </p> */}
            <div className={myBookSaveOne.readBookShalf}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MybookSave1;
