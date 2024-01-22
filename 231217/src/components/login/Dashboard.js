// Dashboard.jsx

import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    const dashboardContainer = document.querySelector(".dashboard-container");
    dashboardContainer.style.opacity = "1"; // 애니메이션 효과를 위해 초기 투명도 설정 해제
  }, []);

  return (
    <div className="dashboard-container">
      <img src="./images/dash1.svg" alt="dash1" className="dash1" />
      <img src="./images/dash2.svg" alt="dash2" className="dash2" />
      <img src="./images/dash3.svg" alt="dash3" className="dash3" />
      <img src="./images/dash4.svg" alt="dash4" className="dash4" />
      <img src="./images/dash5.svg" alt="dash5" className="dash5" />
    </div>
  );
};

export default Dashboard;
