import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyBookStyle from "./mybook.module.css";import { BiChevronLeft } from "react-icons/bi";

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
      date: new Intl.DateTimeFormat("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
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
  const handleCancel = () => {
    const isConfirmed = window.confirm("작성을 취소하시겠습니까?");

    if (isConfirmed) {
      navigate("/mybook");
    }
  };

  return (
    <div className={MyBookStyle.DetailInputPage}>
      <div className={MyBookStyle.DetailInputTop}>
        <button
              type="button"
              onClick={handleCancel}
            >
              <BiChevronLeft />
            </button>
      <button onClick={handleSave} className={MyBookStyle.DetailInputBtn}>저장</button>
      </div>
      <div className={MyBookStyle.DetailInputPageSub}>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="이곳에 텍스트를 입력해 주세요." className={MyBookStyle.DetailInputText}/>
    </div>
    </div>
  );
};

export default DetailNew;
