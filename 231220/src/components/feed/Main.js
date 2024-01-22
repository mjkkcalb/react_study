// Main.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import List from "../review/List";
import HighList from "../highlight/HighList";
import RivewAndHighList from "./RivewAndHighList";
// import Footer from "../footer/Footer";
import FeedStyle from "./Feed.module.css";
import { BiEditAlt } from "react-icons/bi";
import FeedFooter from "../footer/FeedFooter";

const Main = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const publicUrl = process.env.PUBLIC_URL;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNew = (type) => {
    closeModal();

    if (type === "review") {
      navigate("/new");
    } else if (type === "highlight") {
      navigate("/highnew");
    }
  };

  const handleLinkClick = (category, event) => {
    event.preventDefault();
    handleCategoryClick(category);
  };
  const handleCategoryClick = (category) => {
    setSelectedOption(category);
  };

  return (
    <div className={FeedStyle.Feed}>
      <div className={FeedStyle.FeedBackGround}>
        <div className={FeedStyle.FeedMargin}>
          <h2 className={FeedStyle.FeedLogo}>
            <img src={`${publicUrl}/images/logo.svg`} alt="로고" />
          </h2>
          <div className={FeedStyle.globalMenu}>
            <ul>
              {/* <li>
            <Link to="/alllist" onClick={(e) => handleLinkClick("통합", e)}>
              통합
            </Link>
          </li> */}
              <li>
                <Link
                  to="/reviewlist"
                  onClick={(e) => handleLinkClick("한 줄 리뷰", e)}
                  className={
                    selectedOption === "한 줄 리뷰" ? FeedStyle.active : ""
                  }>
                  한줄리뷰
                </Link>
              </li>
              <li>
                <Link
                  to="/highlist"
                  onClick={(e) => handleLinkClick("하이라이트", e)}
                  className={
                    selectedOption === "하이라이트" ? FeedStyle.active : ""
                  }>
                  하이라이트
                </Link>
              </li>
            </ul>
            <div className={FeedStyle.moduleBox}>
              <button onClick={openModal} className={FeedStyle.globalMenuBtn}>
                <BiEditAlt />
              </button>
              {isModalOpen && (
                <div className={FeedStyle.modalBackdrop}>
                  <div className={FeedStyle.modal}>
                    <button onClick={() => goToNew("review")}>한줄리뷰</button>
                    <button onClick={() => goToNew("highlight")}>
                      하이라이트
                    </button>
                    <button onClick={closeModal}>X</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={FeedStyle.globalMenuList}>
        {/* {selectedOption === "통합" && <RivewAndHighList />} */}
        {selectedOption === "한 줄 리뷰" && <List />}
        {selectedOption === "하이라이트" && <HighList />}
        <Routes>
          <Route path="/alllist" element={<RivewAndHighList />} />
          <Route path="/reviewlist" element={<List />} />
          <Route path="/highlist" element={<HighList />} />
        </Routes>
      </div>
      <FeedFooter />
    </div>
  );
};

export default Main;
