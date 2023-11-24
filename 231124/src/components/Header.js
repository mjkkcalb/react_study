import React from "react";

const Header = ({ toggleMenuPosition }) => {
  return (
    <div className="headerBar">
      <h1 className="logo">로고</h1>
      <a href="#" className="menuIcon" onClick={toggleMenuPosition}>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default Header;
