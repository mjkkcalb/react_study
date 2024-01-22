import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Liby from "./mainpage.module.css";
import { BiLogOut } from "react-icons/bi";
// import "./MainPage.modules.css";

const Logout = () => {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");

    if (confirmLogout) {
      try {
        // 카카오 로그아웃
        await window.Kakao.Auth.logout();
      } catch (error) {
        console.error("Failed to logout from Kakao", error);
      } finally {
        // 자동 로그인을 막기 위해 로컬 스토리지에서 사용자 정보 제거
        localStorage.removeItem("userData");

        // 다른 로그아웃 처리 로직 추가...

        // 로그아웃 후에 상태를 갱신하여 UI 업데이트
        setLoggedOut(true);

        // 로그아웃 후 메인 페이지로 리다이렉트
        navigate("/");
      }
    }
  };

  return (
    <div>
      <div>
        <button className={Liby.Outbtn} onClick={handleLogout}>
          <BiLogOut />
          <p>로그아웃</p>
        </button>
      </div>
    </div>
  );
};

export default Logout;
