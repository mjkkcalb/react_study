import React from "react";
import SearchHome from "../components/search/SearchHome";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchInfo from "../components/search/SearchInfo2";

import MyBookMain from "../components/mybook/MyBookMain";
import DetailPage from "../components/mybook/DetailPage";
import DetailNew from "../components/mybook/DetailNew";
import DetailList from "../components/mybook/DetailList";
import DetailPage2 from "../components/mybook/DetailPage2";

const Search = () => {
  const currentLocation = useLocation();

  return (
    <>
      <Routes>
        <Route path="/search/*" element={<SearchHome />} />
        <Route path="/info/:isbn" element={<SearchInfo />} />
        <Route
          path="/mybook"
          element={<MyBookMain location={currentLocation} />}
        />
        <Route
          path="/detailpage/:isbn"
          element={<DetailPage location={currentLocation} />}
        />
        <Route
          path="/detailpage2/:isbn"
          element={<DetailPage2 location={currentLocation} />}
        />
        <Route
          path="/detailnew/:isbn"
          element={<DetailNew location={currentLocation} />}
        />
        <Route
          path="/detaillist/:isbn"
          element={<DetailList location={currentLocation} />}
        />

        {/* <Route path="/info/save/:isbn" element={<SearchSave />} /> */}
        {/* 저장창 출력 */}
      </Routes>
    </>
  );
};

export default Search;