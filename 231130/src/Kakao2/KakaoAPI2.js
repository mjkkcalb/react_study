import React from "react";
import Categories from "./Categories";
import BookList from "./BookList";
import { Route, Routes } from "react-router-dom";

const KakaoAPI2 = () => {
  return (
    <div>
      <h2>kakao book API</h2>
      <Categories />
      <hr />
      <Routes>
        <Route path="/" element={<h2>첫페이지</h2>} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:title" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default KakaoAPI2;
