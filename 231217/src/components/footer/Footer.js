import React from "react";
import {
  BiPencil,
  BiHomeAlt,
  BiSearch,
  BiSignal4,
  BiBookOpen,
} from "react-icons/bi";
import FooterStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyle.globalMenu}>
      <ul className={FooterStyle.globalMenuItem}>
        <li>
          <a href="/">
            <BiHomeAlt />
            <span>홈</span>
          </a>
        </li>
        <li>
          <a href="/library">
            <BiBookOpen />
            <span>책방</span>
          </a>
        </li>
        <li>
          <a href="/search">
            <BiSearch />
            <span>검색</span>
          </a>
        </li>
        <li>
          <a href="/feed">
            <BiPencil />
            <span>피드</span>
          </a>
        </li>
        <li>
          <a href="/mybook">
            <BiSignal4 />
            <span>내서재</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
