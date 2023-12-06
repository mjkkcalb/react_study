import React, { useContext } from "react";
import LangContext from "./LangContext";

const Button = ({ handleToggle }) => {
  const currentLang = useContext(LangContext);
  return <button onClick={handleToggle}>{currentLang}</button>;
};

export default Button;
