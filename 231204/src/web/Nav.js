import React from "react";
import { NavLink } from "react-router-dom";
import googleLogo from "../assets/images/google-logo.png";
import navStyle from "../assets/styles/nav.module.scss";
import {
  AiFillCarryOut,
  AiFillContacts,
  AiFillBell,
  AiFillAppstore,
  AiFillProfile,
} from "react-icons/ai";

const onDeco = ({ isActive }) => {
  return {
    textDecoration: isActive && "underline",
  };
};

const Nav = () => {
  return (
    <div>
      <h1 className={navStyle.logo}>
        <NavLink to="/" style={onDeco}>
          <img src={googleLogo} alt="로고" />
        </NavLink>
      </h1>

      <ul className={navStyle.globalNav}>
        <li>
          <NavLink to="/about" style={onDeco}>
            <AiFillBell />
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" style={onDeco}>
            <AiFillAppstore />
            product
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" style={onDeco}>
            <AiFillProfile />
            service
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" style={onDeco}>
            <AiFillCarryOut />
            board
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={onDeco}>
            <AiFillContacts />
            로그인
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
