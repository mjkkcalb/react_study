import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import myBookSaveTwo from "./mybookSwiper.module.css"; // Import module CSS for styling

import { FreeMode, Pagination } from "swiper/modules";

const MybookSave2 = () => {
  const navigate = useNavigate();
  const [savedBooks2, setSavedBooks2] = useState(
    LocalStorageService.getItem("savedBooks2") || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDelete = (id) => {
    try {
      const updatedBooks = savedBooks2.filter((book) => book.id !== id);
      LocalStorageService.setItem("savedBooks2", updatedBooks);
      setSavedBooks2(updatedBooks);
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
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

  const pageTitle = "읽고 있는 책";
  return (
    <div className={myBookSaveTwo.redingSwiper}>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={200}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className={`mySwiper ${myBookSaveTwo.redingSwiperItem}`}>
        <SwiperSlide>
          <Link to="/search">책 추가</Link>
        </SwiperSlide>
        {savedBooks2.map((book, index) => (
          <SwiperSlide key={index} className={myBookSaveTwo.redingSwiperSlide}>
            <div className={myBookSaveTwo.redingItemBox}>
              <img
                src={book.cover}
                alt={book.title}
                onClick={() => openModal(book)}
              />
              {isModalOpen && selectedBook && selectedBook.id === book.id && (
                <div className={myBookSaveTwo.modal}>
                  <button onClick={closeModal} style={{ marginLeft: 95 }}>
                    X
                  </button>
                  <button onClick={() => handleDelete(selectedBook.id)}>
                    삭제
                  </button>
                </div>
              )}
              <div className={myBookSaveTwo.redingTextBox}>
                <div>
                  <p>
                    책 제목: {book.title.toString().slice(0, 7) || "알 수 없음"}
                  </p>
                  <p>
                    작가: {book.author.toString().slice(0, 7) || "알 수 없음"}
                  </p>
                  <p>시작일: {book.startDate || "알 수 없음"}</p>
                  <p>현재 페이지: {book.readingPage || "알 수 없음"}</p>
                </div>
                <Link
                  to={`/detailpage/${book.isbn13}`}
                  state={{
                    bookInfo: {
                      cover: book.cover,
                      title: book.title,
                      author: book.author,
                      startDate: book.startDate,
                      readingPage: book.readingPage,
                      isbn: book.isbn13,
                    },
                    pageTitle: pageTitle,
                  }}>
                  글쓰기
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MybookSave2;
