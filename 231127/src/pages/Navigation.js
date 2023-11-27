import React, { useState } from "react";
import navStyle from "../styles/Navigation.module.css";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <div>
      <ul className={`${navStyle.globalMenu} ${menu && navStyle.active}`}>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>contanct</li>
      </ul>
      <div className={navStyle.mobileBtn} onClick={toggleMenu}>
        {menu ? <BiX /> : <BiMenuAltRight />}
      </div>
    </div>
  );
};

export default Navigation;
<h2>nav</h2>;
