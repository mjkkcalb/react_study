import React from "react";
import "./App.css";
import Search from "./page/Search";
import Feed from "./page/Feed";
import { Route, Routes } from "react-router-dom";
import Mainhome from "./page/Mainhome";
import Login from "./page/Login";
import LibraryHome from "./components/library/LibraryHome";


const App = () => {
  return (
    <>
      {/* <hr className="paddingline" />
      <hr className="paddingline1" />
      <hr className="paddingline2" />
      <hr className="paddingline3" />
      <hr className="paddingsideline" />
      <hr className="paddingsideline1" />
      <hr className="paddingsideline11" />
      <hr className="paddingsideline2" />
      <hr className="paddingsideline22" />
      <hr className="paddingsideline222" /> */}
      <Search />
      <Feed />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/main" element={<Mainhome />} />
        <Route path="/library" element={<LibraryHome />} />
      </Routes>
      {/* main 에 다 섞여야함 */}
    </>
  );
};

export default App;
