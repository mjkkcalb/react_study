// ErrorPage.js

import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
  return (
    <div className="errorPage">
      <h2>{message}</h2>
      <Link to="/">
        <BiChevronLeft style={{ fontSize: "4rem" }} />
      </Link>
    </div>
  );
};

export default ErrorPage;
