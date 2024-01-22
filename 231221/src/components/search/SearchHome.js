// SearchHome.js

import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import SearchList from "./SearchList";
import SearchTitle from "./SearchTitle";
import SearchAuthor from "./SearchAuthor";
import searchStyles from "./searchHome.module.css";
import Footer from "../footer/Footer";

const SearchHome = () => {
  const location = useLocation(); // 현재 경로 정보 가져오기
  const publicUrl = process.env.PUBLIC_URL;
  const [searchFail, setSearchFail] = useState(true);
  const [searchFail2, setSearchFail2] = useState(false);
  useEffect(() => {
    const navLinks = document.querySelectorAll(`.${searchStyles.searchNav} a`);

    navLinks.forEach((link) => {
      const path = link.getAttribute("href");

      // 정확한 경로 매칭 확인
      const isActive = location.pathname === path;

      if (isActive) {
        link.classList.add(searchStyles.active);
      } else {
        link.classList.remove(searchStyles.active);
      }
    });
  }, [location.pathname]);

  return (
    <div className={searchStyles.searchHome}>
      <div className={searchStyles.main}>
        {!searchFail && !searchFail2 && (
          <ul className={searchStyles.searchNav}>
            <li>
              <Link to="/search">통합</Link>
            </li>
            <li>
              <Link to="/search/title">도서명</Link>
            </li>
            <li>
              <Link to="/search/author">저자명</Link>
            </li>
          </ul>
        )}
        <Routes>
          <Route
            path="/*"
            element={
              <SearchList
                setSearchFail={setSearchFail}
                setSearchFail2={setSearchFail2}
              />
            }
          />
          <Route
            path="/title/*"
            element={
              <SearchTitle
                setSearchFail={setSearchFail}
                setSearchFail2={setSearchFail2}
              />
            }
          />
          <Route
            path="/author/*"
            element={
              <SearchAuthor
                setSearchFail={setSearchFail}
                setSearchFail2={setSearchFail2}
              />
            }
          />
        </Routes>
      </div>

      <div
        className={`${searchStyles.fail} ${
          searchFail ? "" : searchStyles.hidden
        }`}>
        <div className={searchStyles.pointCircle}></div>
        <img
          src={`${publicUrl}/images/Boring.png`}
          alt="검색화면"
          className={searchStyles.homeimg}
        />
        <img src={`${publicUrl}/images/why.svg`} alt="물음표" />
        <p>최근 검색하신 기록이 없습니다.</p>
      </div>
      <div
        className={`${searchStyles.fail2} ${
          searchFail2 ? searchStyles.block : searchStyles.hidden
        }`}>
        <div className={searchStyles.pointCircle2}></div>

        <img
          src={`${publicUrl}/images/Boring.png`}
          alt="검색실패"
          className={searchStyles.homeimg}
        />
        <img src={`${publicUrl}/images/why.svg`} alt="물음표" />
        <p>검색에 실패했습니다... 😵</p>
      </div>
      <Footer />
    </div>
  );
};

export default SearchHome;
