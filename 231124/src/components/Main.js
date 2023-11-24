import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import ImgBox from "./ImgBox";
import "./Main.css";
import ImgBox2 from "./ImgBox2";
import { FaArrowUp } from "react-icons/fa";

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [menuPosition, setMenuPosition] = useState("0");

  const toggleMenuPosition = (e) => {
    e.preventDefault();
    setMenuPosition(menuPosition === "0" ? "10px" : "0");
  };

  return (
    <div>
      <Header toggleMenuPosition={toggleMenuPosition} />
      <Menu
        menuPosition={menuPosition}
        toggleMenuPosition={toggleMenuPosition}
      />
      <h2 className="mainTxt1">
        We are <br /> Creative <br /> Agency
      </h2>
      <p className="mainTxt2">Working with brands all over the world</p>
      <ImgBox />
      <ImgBox2 />

      <p className="footerTxt">
        ⓒMadeByProxymaDesign 2023. Web Design Italy Company.P.lva <br />
        02130380385. All Rights Reserved. Privacy Policy
      </p>
      <a href="#" className="upBtn" onClick={scrollToTop}>
        <FaArrowUp />
      </a>
    </div>
  );
};

export default Main;
