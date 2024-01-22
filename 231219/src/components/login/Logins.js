import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginsPage from "./LoginsPage";
import Loginss from "./logins.module.css";

const Logins = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(true); // 추가
  const publicUrl = process.env.PUBLIC_URL;

  const navigate = useNavigate();

  useEffect(() => {
    // 2초 후에 대시보드를 숨김
    const timeout = setTimeout(() => {
      setIsDashboardVisible(false);
    }, 2000);

    // 컴포넌트가 언마운트되면 타임아웃을 클리어
    return () => clearTimeout(timeout);
  }, []); // 빈 배열을 전달하여 마운트 시에만 실행되도록 함

  const handleLogin = () => {
    // 로그인 성공 시
    if (username === "1300k" && password === "1300k") {
      console.log("로그인 성공");
      setIsLoggedIn(true);
      // 리다이렉트
      navigate("/main");
    } else {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className={Loginss.container}>
      {isDashboardVisible && <Dashboard />}
      {
        !isLoggedIn ? (
          <>
            <img
              className={Loginss.loloimg}
              src={`${publicUrl}/images/lolo.svg`}
              alt="logo"
            />
            <input
              className={Loginss.inputgroup}
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={Loginss.inputgroup}
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
            />
            <button onClick={handleLogin} className={Loginss.button1}>
              로그인
            </button>
            <hr className={Loginss.hr} />{" "}
            <p className={Loginss.hrp}>sns 로그인</p>{" "}
            <hr className={Loginss.hr1} />
            <LoginsPage />
          </>
        ) : null /* isLoggedIn이 true일 때는 로그인 폼을 숨김 */
      }
    </div>
  );
};

export default Logins;
