import React from "react";
import LoginsPage from "../components/login/LoginsPage";
import Logins from "../components/login/Logins";
import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Logins />} />
      </Routes>
    </div>
  );
};

export default Login;
