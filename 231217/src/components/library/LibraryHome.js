// MainCombined.jsx (하나로 합쳐진 파일)

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import xml2js from "xml2js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
// import "./swiper.css";
// import "./MainPage.modules.css";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const LibraryHome = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 베스트셀러 API 호출
        const bestSellerResponse = await axios.get(
          "http://localhost:3001/library"
        );
        const bestSellerParser = new xml2js.Parser();
        const bestSellerResult = await bestSellerParser.parseStringPromise(
          bestSellerResponse.data
        );

        // 베스트셀러만 가져오기
        const bestSellers = bestSellerResult.object.item || [];

        // 서버에서 받은 결과를 상태에 설정 (undefined일 경우 빈 배열로 설정)
        setSearchResults(bestSellers);

        // 신간 API 호출
        const newBooksResponse = await axios.get(
          "http://localhost:3001/library"
        );
        const newBooksParser = new xml2js.Parser();
        const newBooksResult = await newBooksParser.parseStringPromise(
          newBooksResponse.data
        );

        // 서버에서 받은 결과를 상태에 설정 (undefined일 경우 빈 배열로 설정)
        setNewBooks(newBooksResult.object.item || []);
      } catch (error) {
        console.error("Error during book search:", error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div className="main-container">
      <img src="./images/logo1.svg" alt="logo1" className="logo1" />
      <h2 className="store">Book Store</h2>
      <img src="./images/dash2.svg" alt="dash2" className="dog" />
      <Logout />

      <h2 className="best-seller-title">📘bestSeller📘</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper fade-in1">
        {searchResults.map((result) => (
          <SwiperSlide key={result.isbn}>
            <div className="best-seller-item1 feed-in1">
              <div className="slide-content1">
                <p>{result.title}</p>
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  <img src={result.cover} alt={result.title} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="best-seller-title">📙New Book📙</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper fade-in">
        {newBooks.map((book) => (
          <SwiperSlide key={book.isbn} className="best-seller-item fade-in">
            <div className="slide-content">
              <p>{book.title}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="best-seller-item-img"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LibraryHome;
