import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailNew = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { bookInfo, setListData } = location.state || {};

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (!inputValue) {
      // 입력값이 없을 경우 예외처리
      alert("내용을 입력해주세요.");
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      content: inputValue,
      date: new Date().toLocaleString(),
    };

    // 로컬 스토리지에서 기존 데이터 불러오기
    const storedListData =
      JSON.parse(localStorage.getItem(`listData-${bookInfo.isbn}`)) || [];

    // 새로운 아이템 추가
    const updatedListData = [...storedListData, newItem];

    // 로컬 스토리지에 업데이트된 데이터 저장
    localStorage.setItem(
      `listData-${bookInfo.isbn}`,
      JSON.stringify(updatedListData)
    );

    // 입력값과 함께 페이지로 이동
    navigate(`/detailpage/${bookInfo.isbn}`, {
      state: { bookInfo, inputValue, listData: updatedListData },
    });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSave}>이동</button>
    </div>
  );
};

export default DetailNew;
