import React from "react";
import MainH from "../components/mainhome/MainH";
import { Route, Routes } from "react-router-dom";

const Mainhome = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainH />} />
      </Routes>
    </div>
  );
};

export default Mainhome;
