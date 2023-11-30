import React, { useState } from "react";
import Categories from "./Categories";
import ItemPage from "./ItemPage";
import { Route, Routes } from "react-router-dom";

const KakaoAPI = () => {
  const [category, setCategory] = useState("한강");

  const onSelect = () => {
    return (newCategory) => setCategory(newCategory);
  };

  return (
    <div>
      <h2>KakaoAPI</h2>
      <Routes>
        <Route path="/:category?" element={<ItemPage />} />
      </Routes>
    </div>
  );
};

export default KakaoAPI;
