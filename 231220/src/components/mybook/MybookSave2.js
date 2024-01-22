import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";
import { BiPencil } from "react-icons/bi";

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
  const publicUrl = process.env.PUBLIC_URL;

  const pageTitle = "읽고 있는 책";
  return (
    <div className={myBookSaveTwo.redingSwiper}>
      <Swiper
        slidesPerView={2.16}
        spaceBetween={12}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={`mySwiper ${myBookSaveTwo.redingSwiperItem}`}>
        <SwiperSlide className={myBookSaveTwo.redingAddBook}>
          <Link to="/search">
            {" "}
            <img src={`${publicUrl}/images/book.svg`} alt="책더미" />+
          </Link>
        </SwiperSlide>
        {savedBooks2.map((book, index) => (
          <SwiperSlide key={index} className={myBookSaveTwo.redingSwiperSlide}>
            <div className={myBookSaveTwo.redingItemBox}>
              <img src={book.cover} alt={book.title} />

              <div className={myBookSaveTwo.redingTextBox}>
                <div>
                  <p className={myBookSaveTwo.redingTextTitle}>
                    {book.title.toString().slice(0, 7) || "알 수 없음"}
                  </p>
                  <p className={myBookSaveTwo.redingTextAuthor}>
                    {book.author.toString().slice(0, 7) || "알 수 없음"}
                  </p>
                  {/* <p>시작일: {book.startDate || "-"}</p> */}
                  <p className={myBookSaveTwo.redingTextPage}>
                    현재 페이지: {book.readingPage || "-"}p
                  </p>
                </div>
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
                    pageTitle: pageTitle,
                  }}
                  className={myBookSaveTwo.redingTextBtn}>
                  <BiPencil />
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
