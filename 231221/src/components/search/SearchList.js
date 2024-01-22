// SearchList.js

import React, { useState } from "react";
import axios from "axios";
import xml2js from "xml2js";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SearchInfo from "./SearchInfo2";
import searchList from "./searchList.module.css";

const SearchList = ({ setSearchFail, setSearchFail2 }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const publicUrl = process.env.PUBLIC_URL;
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/search", {
        params: { q: searchQuery },
      });

      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(response.data);

      console.log("Search Results:", result);

      const items = result.object ? result.object.item || [] : [];
      setSearchResults(items);

      // 검색 결과에 따라 상태 업데이트
      setSearchFail(items.length === 1);
      setSearchFail2(items.length === 0);

      // 검색 성공 시 리다이렉트
      if (items.length === 1) {
        // 검색 결과가 1개인 경우 해당 아이템의 ID를 URL에 추가하여 전달
        navigate(`/info/${items[0].itemId}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error during book search:", error);

      // 검색에 실패한 경우 상태 업데이트
      setSearchFail(false);
      setSearchFail2(true);
    }
  };

  const handleKeyPress = (e) => {
    // 엔터 키를 눌렀을 때 검색 수행
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className={searchList.searchLists}>
      <div className={searchList.hidden}>
        <ul className={searchList.searchList}>
          {searchResults.map((result) => (
            <li key={result.isbn}>
              {/* Link 클릭 시 해당 아이템의 정보를 전달하도록 수정 */}
              <Link to={`/info/${result.isbn13}`} state={{ bookInfo: result }}>
                <div
                  style={{
                    background: `url(${result.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "340px",
                    height: "200px",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "5px 5px 4px #ddd",
                  }}
                  className={searchList.imgBg}></div>

                <img src={result.cover} alt={result.title} />
              </Link>
              <div className={searchList.pBox}>
                <p>{result.title.toString().slice(0, 20)}...</p>
                <p>작가 - {result.author.toString().slice(0, 15)}...</p>
                <p>{result.description.toString().slice(0, 40)}...</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          searchResults.length === 0
            ? searchList.noResults
            : searchList.pointtop
        }>
        {/* <h2 className={searchList.searchLogo}>
          <img src={`${publicUrl}/images/logo.svg`} alt="로고" />
        </h2> */}
        <h2 className={searchList.searchLogo}>
          <img src={`${publicUrl}/images/logo.svg`} alt="로고" />
        </h2>
        <form className={searchList.forms}>
          <button onClick={handleSearch}>
            <img src={`${publicUrl}/images/submit.svg`} alt="초기화" />
          </button>
          <input
            className={`${searchList.search} ${
              searchResults.length === 0 && searchList.noResultsInput
            }`}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="텍스트를 입력하세요."
          />
          <button onClick={() => setSearchQuery("")}>
            <img src={`${publicUrl}/images/reset.svg`} alt="검색" />
          </button>
        </form>
      </div>

      <Routes>
        <Route path="/info/*" element={<SearchInfo />} />
      </Routes>
    </div>
  );
};

export default SearchList;
