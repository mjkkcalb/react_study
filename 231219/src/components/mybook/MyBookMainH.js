// MyBookMainH.jsx

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import mybookSwiperStyles from "./mainHswiper.module.css"; // CSS 모듈을 가져옵니다.

import myBookMainH from "./mainHswiper.module.css";

import { FreeMode, Pagination } from "swiper/modules";

const MyBookMainH = () => {
  const navigate = useNavigate();
  const [savedBooks, setSavedBooks] = useState(
    LocalStorageService.getItem("savedBooks2") || []
  );

  const bookCounter = savedBooks.length;

  return (
    <div className={myBookMainH.bookCounter}>
      <p id="book-number" style={{ fontSize: "15px" }}>
        현재 <strong>{bookCounter}</strong>권의 기록이 있습니다 :)
      </p>
      <div>
        <Swiper
          slidesPerView={1.8}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={mybookSwiperStyles.mySwiper}>
          <SwiperSlide className={mybookSwiperStyles.swiperSlide}>
            <div className={myBookMainH.flex}>
              <div className={myBookMainH.addBox}>
                <Link to="/search" className={myBookMainH.addBtn}>
                  +
                </Link>
              </div>
            </div>
          </SwiperSlide>
          {savedBooks.map((book, index) => (
            <SwiperSlide key={index} className={mybookSwiperStyles.swiperSlide}>
              {" "}
              {/* CSS 모듈을 사용합니다. */}
              <div className={myBookMainH.flex}>
                <Link to="/mybook">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className={myBookMainH.swiper}
                  />
                </Link>

                <div className={myBookMainH.textBox}>
                  <strong>
                    {book.title.toString().slice(0, 10) || "알 수 없음"}
                    ...
                  </strong>
                  <p>
                    {book.author.toString().slice(0, 7) || "알 수 없음"}
                    ...
                  </p>
                  <p>{book.readingPage || "알 수 없음"}p를 기록했어요!</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyBookMainH;
