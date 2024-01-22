// MainCombined.jsx

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import xml2js from "xml2js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, FreeMode } from "swiper/modules";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Liby from "./mainpage.module.css";
import Footer from "../footer/Footer";
import { BiArrowBack , BiCaretDown, } from "react-icons/bi";

const LibraryHome = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  const [newsBooks, setNewsBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 베스트셀러 API 호출
        const bestSellerResponse = await axios.get(
          "http://localhost:3001/library/best"
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
          "http://localhost:3001/library/new"
        );
        const newBooksParser = new xml2js.Parser();
        const newBooksResult = await newBooksParser.parseStringPromise(
          newBooksResponse.data
        );
        const newsBooksResponse = await axios.get(
          "http://localhost:3001/library/news"
        );
        const newsBooksParser = new xml2js.Parser();
        const newsBooksResult = await newsBooksParser.parseStringPromise(
          newsBooksResponse.data
        );

        // 서버에서 받은 결과를 상태에 설정 (undefined일 경우 빈 배열로 설정)
        setNewBooks(newBooksResult.object.item || []);
        setNewsBooks(newsBooksResult.object.item || []);
      } catch (error) {
        console.error("Error during book search:", error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div className={Liby.library}>
      <div className={Liby.bg}></div>
      <header className={Liby.head}>
        <img src="./images/logo.svg" alt="logo1" className={Liby.libyimg} />
      </header>
      <div className={Liby.liby}>
        <h2>읽을 책이 고민된다면?</h2>
        <p>
          실시간 <strong className={Liby.strong}>서점 베스트</strong>를 <br />
          확인해 보세요!
        </p>
        <p className={Liby.arrow}><BiArrowBack /></p>
      </div>
      <img src="./images/peo.svg" alt="peo" className={Liby.peo} />
      <div className={Liby.swiper1}>
        <p><BiCaretDown /> 베스트셀러</p>
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={Liby.mySwiper}
        >
          {searchResults.map((result) => (
            <SwiperSlide key={result.isbn}>
              <div className={Liby.bestSellerItem1 + " " + Liby.feedIn1}>
                <div className={Liby.slideContent1}>
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={result.cover} alt={result.title} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={Liby.stick1}></div>
      </div>
      <div className={Liby.swiper2}>
        <p><BiCaretDown />주목할 만한 신간</p>

        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={Liby.mySwiper}
        >
          {newBooks.map((book) => (
            <SwiperSlide key={book.isbn} className={Liby.bestSellerItem}>
              <div className={Liby.slideContent2}>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className={Liby.bestSellerItemImg}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={Liby.stick1}></div>
      </div>
      <div className={Liby.swiper3}>
        <p><BiCaretDown />신간 목록</p>
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={Liby.mySwiper + " " + Liby.fadeIn}
        >
          {newsBooks.map((book) => (
            <SwiperSlide
              key={book.isbn}
              className={Liby.bestSellerItem + " " + Liby.fadeIn}
            >
              <div className={Liby.slideContent3}>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className={Liby.bestSellerItemImg}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={Liby.stick1}></div>
      </div>
      <div className={Liby.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LibraryHome;
