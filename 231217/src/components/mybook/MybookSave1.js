import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const MybookSave1 = () => {
  const navigate = useNavigate();
  const [savedBooks1, setSavedBooks1] = useState(
    LocalStorageService.getItem("savedBooks1") || []
  );
  const [likedBooks, setLikedBooks] = useState(
    LocalStorageService.getItem("likedBooks") || []
  );

  const handleDelete = (id, isLikedBook) => {
    try {
      const key = isLikedBook ? "likedBooks" : "savedBooks1";
      const books = LocalStorageService.getItem(key) || [];

      // 해당 ID를 가진 책을 제외한 목록을 저장
      const updatedBooks = books.filter((book) => book.id !== id);
      LocalStorageService.setItem(key, updatedBooks);

      if (isLikedBook) {
        setLikedBooks(updatedBooks); // likedBooks 상태 업데이트
      } else {
        setSavedBooks1(updatedBooks); // savedBooks1 상태 업데이트
      }
    } catch (error) {
      console.error("책을 삭제하는 동안 오류가 발생했습니다", error);
    }
    navigate("/myBook", { replace: true });
  };

  return (
    <div>
      <h1>읽은책</h1>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Link to="/search">책추가</Link>
        </SwiperSlide>
        {savedBooks1.map((book, index) => (
          <SwiperSlide key={index}>
            <img src={book.cover} alt={book.title} />
            <p>책 제목: {book.title || "알 수 없음"}</p>
            <p>작가: {book.author || "알 수 없음"}</p>
            <p>시작일: {book.startDate || "알 수 없음"}</p>
            <p>끝난일: {book.endDate || "알 수 없음"}</p>
            <p>
              평점: {book.rangeValue}{" "}
              <FaStar style={{ color: "gold", fontSize: "2rem" }} />
            </p>
            {/* 삭제 버튼 추가 */}
            <button onClick={() => handleDelete(book.id, false)}>삭제</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MybookSave1;
