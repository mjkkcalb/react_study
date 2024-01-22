import React, { useState } from "react";
import axios from "axios";
import xml2js from "xml2js";
import { Route, Routes, useNavigate } from "react-router-dom";
import SearchInfo from "../search/SearchInfo";
import FeedStyle from "../feed/Feed.module.css";

const HighNewSearch = ({
  setSearchFail,
  setSearchFail2,
  onBookClick,
  isModalOpen,
  closeModal,
}) => {
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

      // 검색 성공 시 리다이렉트
      if (items.length === 1) {
        // 검색 결과가 1개인 경우 해당 아이템의 ID를 URL에 추가하여 전달
        onBookClick({ title: items[0].title, imgUrl: items[0].cover });
        closeModal();
      }
    } catch (error) {
      console.error("Error during book search:", error);

      // 검색에 실패한 경우 상태 업데이트
      setSearchFail(true);
    }
  };

  const handleKeyPress = (e) => {
    // 엔터 키를 눌렀을 때 검색 수행
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleBookClick = (title, imgUrl) => {
    // 클릭된 도서의 정보를 부모 컴포넌트로 전달
    onBookClick({ title, imgUrl });
    closeModal();
  };

  return (
    <div>
      <form className={FeedStyle.newSearchForm}>
      <button onClick={handleSearch} className={FeedStyle.newSearchBtn}>
          <img src={`${publicUrl}/images/submit.svg`} alt="검색" />
        </button>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className={FeedStyle.newSearchText}
        />
        <button onClick={() => setSearchQuery("")} className={FeedStyle.newSearchDel}>
          <img src={`${publicUrl}/images/reset.svg`} alt="초기화" />
        </button>
      </form>

      <ul 
      className={FeedStyle.newSearchMenu}style={{ listStyle: "none" }}>
        {searchResults.map((result) => (
          <li
            key={result.isbn}
            className={FeedStyle.newSearchItem}
            style={{ width: "80%" }}
            onClick={() => handleBookClick(result.title, result.cover)}
          >
            <img src={result.cover} alt={result.title} className={FeedStyle.newSearchImg} />
            <div>
            <p className={FeedStyle.newSearchTitle}>{result.title}</p>
            <p className={FeedStyle.newSearchSubtext}>{result.author.slice(0, 2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/new" element={<SearchInfo />} />
      </Routes>
    </div>
  );
};

export default HighNewSearch;
