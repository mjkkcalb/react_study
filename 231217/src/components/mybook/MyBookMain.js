import React from "react";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import MyBookStyle from "./mybook.module.css";

import MybookSave1 from "./MybookSave1";
import MybookSave3 from "./MybookSave3";
import MybookSave2 from "./MybookSave2";
import FeedFooter from "../footer/FeedFooter";

const MyBookMain = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className={MyBookStyle.myBook}>
      <h2 className={MyBookStyle.MybookLogo}>
        <img src={`${publicUrl}/images/logo.svg`} alt="로고" />
      </h2>
      <div className={MyBookStyle.myBookPage}>
        <h1>13ook님,</h1>
        <h2>독서를 통해 마음을 정리해보세요 :) 📖</h2>
        {/* <Link to="/main">
          <BiChevronLeft style={{ fontSize: "4rem" }} />
        </Link> */}
        <div>
          <MybookSave2 />
          <MybookSave3 />
          <MybookSave1 />
        </div>
      </div>
      <FeedFooter />
    </div>
  );
};

export default MyBookMain;
