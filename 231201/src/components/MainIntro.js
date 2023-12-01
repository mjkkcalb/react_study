import React from "react";
import Swiper from "./Swiper";
import MyStyle from "./Main.module.css";

const MainIntro = () => {
  return (
    <div>
      <Swiper />
      <h2 className={MyStyle.intro}>main intro</h2>
    </div>
  );
};

export default MainIntro;
