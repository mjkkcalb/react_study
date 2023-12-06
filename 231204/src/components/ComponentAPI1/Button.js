import React from "react";

const Button = ({ lang, handleToggle }) => {
  return <button onClick={handleToggle}>{lang}</button>;
};

export default Button;
