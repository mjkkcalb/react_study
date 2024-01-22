import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import LocalStorageService from "../../LocalStorage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import MyBookThreeSwiper from "./mybookSwiper.module.css";
import { FreeMode, Pagination } from "swiper/modules";
import myBookThree from "./mybook.module.css";

const MybookSave3 = () => {
  const navigate = useNavigate();
  const [likedBooks, setLikedBooks] = useState(
    LocalStorageService.getItem("likedBooks") || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDelete = (id) => {
    try {
      const updatedBooks = likedBooks.filter((book) => book.isbn !== id);
      LocalStorageService.setItem("likedBooks", updatedBooks);
      setLikedBooks(updatedBooks);
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
    closeModal();
    navigate("/mybook", { replace: true });
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
    <div>
      <h2 className={myBookThree.myTitle}>읽고싶은책</h2>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={myBookThree.mySwiper}>
        <SwiperSlide>
          <Link to="/search">책추가</Link>
        </SwiperSlide>
        {likedBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <img
              src={book.cover}
              alt={book.title}
              className={myBookThree.myImage}
              onClick={() => openModal(book)}
            />
            {isModalOpen && selectedBook && selectedBook.isbn === book.isbn && (
              <div className={MyBookThreeSwiper.modal}>
                <button onClick={closeModal} style={{ marginLeft: 95 }}>
                  X
                </button>
                <button onClick={() => handleDelete(book.isbn)}>삭제</button>
              </div>
            )}
            <p className={myBookThree.myText}>
              책 제목: {book.title.toString().slice(0, 5) || "알 수 없음"}
            </p>
            {/* 삭제 버튼 추가 */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MybookSave3;
