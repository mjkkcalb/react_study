// Dashboard.jsx

import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dash from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={Dash.dashcontainer}>
      <img src="./images/logo.svg" alt="logo" className={Dash.logo1} />
      <img src="./images/dash1.svg" alt="dash1" className={Dash.dash1} />
      {/*<img src="./images/dash2.svg" alt="dash2" className={Dash.dash2} />*/}
      <img src="./images/dash3.svg" alt="dash3" className={Dash.dash3} />
      <img src="./images/dash4.svg" alt="dash4" className={Dash.dash4} />
      {/*<img src="./images/dash5.svg" alt="dash5" className={Dash.dash5} />*/}
    </div>
  );
};

export default Dashboard;
