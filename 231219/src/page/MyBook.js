import React from "react";
import MyBookMain from "../components/mybook/MyBookMain";
import { useLocation } from "react-router-dom";
import MyBookMainH from "../components/mybook/MyBookMainH";

const MyBook = () => {
  // useLocation 훅을 사용하여 현재 위치 정보를 받아옵니다.
  const currentLocation = useLocation();

  // MyBookMain으로 전달할 데이터를 state에 저장
  const state = {
    bookInfo: currentLocation.state && currentLocation.state.bookInfo,
  };

  return (
    <div>
      {/* MyBookMain에 현재 위치 정보와 함께 state를 전달합니다. */}
      <MyBookMain location={currentLocation} state={state} />
      <MyBookMainH location={currentLocation} state={state} />
    </div>
  );
};

export default MyBook;
