import React from "react";
import MyBookMainH from "../mybook/MyBookMainH";
import Header from "./header/Header";
import mainHStyles from "./mainH.module.css";
const MainH = () => {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <div className={mainHStyles.mainH}>
      {/* 헤더 */}
      <Header />
      <div className={mainHStyles.imgBox}>
        <img
          src={`${publicUrl}/images/san.svg`}
          alt="동산"
          className={mainHStyles.mainImg}
        />
        <img
          src={`${publicUrl}/images/cloud.png`}
          alt="구름"
          className={mainHStyles.mainImg2}
        />
        <img
          src={`${publicUrl}/images/cloud.png`}
          alt="구름"
          className={mainHStyles.mainImg3}
        />
      </div>
      <div className={mainHStyles.aniBoxContainer}>
        <div className={mainHStyles.aniBox}>
          <img src={`${publicUrl}/images/rundog.png`} alt="달리는 강아지" />
        </div>
      </div>
      <MyBookMainH />
    </div>
  );
};

export default MainH;
