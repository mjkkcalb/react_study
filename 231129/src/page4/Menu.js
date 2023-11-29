import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Coffee from "./Coffee";

const Menu = () => {
  return (
    <div>
      <h2>menu</h2>
      <ul>
        <li>
          <Link to="/menu/americano">아메리카노</Link>
        </li>
        <li>
          <Link to="/menu/latte">카페라떼</Link>
        </li>
        <li>
          <Link to="/menu/espresso">에스프레소</Link>
        </li>
      </ul>

      {/* 화면설정 */}
      <Routes>
        <Route path="/" element={<p>원하는 커피를 선택하세요</p>} />
        <Route path=":menuname" element={<Coffee />} />
      </Routes>
    </div>
  );
};

export default Menu;
