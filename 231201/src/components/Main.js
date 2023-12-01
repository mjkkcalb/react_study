import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import About from "./About";
import Product from "./Product";
import Service from "./Service";
import Board from "./Board";
import Login from "./Login";
import MyStyle from "./Main.module.css";
import MainIntro from "./MainIntro";

const Main = () => {
  return (
    <div className={MyStyle.Wrapper}>
      <Link to="/">
        <h1>
          <img src="/images/nike.png" alt="나이키 로고" />
        </h1>
      </Link>
      <ul className={MyStyle.global_menu}>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/pro">product</Link>
        </li>
        <li>
          <Link to="/ser">service</Link>
        </li>
        <li>
          <Link to="/boa">board</Link>
        </li>
        <li>
          <Link to="/log">login</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<MainIntro />} />
        <Route path="/about" element={<About />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/ser" element={<Service />} />
        <Route path="/boa" element={<Board />} />
        <Route path="/log" element={<Login />} />
        {/* Redirect to MainIntro when accessing unknown routes */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <h2 className={MyStyle.footer}>Footer</h2>
    </div>
  );
};

export default Main;
