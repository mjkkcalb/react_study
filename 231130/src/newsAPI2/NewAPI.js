import React, { useState } from "react";
import Categories from "./Categories";
import NewList from "./NewList";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";

const NewAPI = () => {
  const [category, setCategory] = useState("all");

  const onSelect = () => {
    return (newCategory) => setCategory(newCategory);
  };

  return (
    <div>
      <h2>newsAPI</h2>
      {/* <Categories category={category} onSelect={onSelect} />
      <NewList category={category} /> */}

      <Routes>
        {/*
          : category 실제 매개 변수 이름 
          ? 해당 매개변수가 선택적임을 나타내는 값. 
          이 값을 쓰려면 useParams 반드시 필요
        */}
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default NewAPI;
