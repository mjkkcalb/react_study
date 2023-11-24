import React from "react";

const Menu = ({ toggleMenuPosition, menuPosition, scrollPosition }) => {
  const menuOpacity = Math.min(scrollPosition / 100, 1);

  const handleMenuBarIconClick = (event) => {
    event.preventDefault();
    toggleMenuPosition(event);
  };

  return (
    <div
      className={`menuBar ${menuPosition === "0" ? "" : "show"}`}
      style={{ opacity: menuOpacity }}>
      <a href="#" className="menuBarIcon" onClick={handleMenuBarIconClick}>
        <span></span>
        <span></span>
      </a>
      <a href="#">home</a>
      <a href="#">about</a>
      <a href="#">products</a>
      <a href="#">contact</a>
    </div>
  );
};

export default Menu;
