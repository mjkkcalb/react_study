import React from "react";
import LocalStorageService from "../../LocalStorage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import save3 from "./searchSave.module.css";

const Save3 = ({ bookInfo, onSaveClick }) => {
  const navigate = useNavigate();

  const handleLikeClick = () => {
    try {
      const likedData = {
        id: uuidv4(),
        likedDate: new Date().toISOString(),
        ...bookInfo,
      };

      // 로컬 스토리지에 찜한 책 저장
      LocalStorageService.saveLikedBook(likedData);

      // 찜하기 버튼을 눌렀을 때의 추가 동작을 수행
      onSaveClick(likedData);

      // 페이지 전환
      navigate("/mybook", { state: { bookInfo: likedData } }).then(() => {
        console.log("책을 찜했습니다.");
      });
    } catch (error) {
      console.error("책을 찜하는 동안 오류가 발생했습니다", error);
    }
  };

  return (
    <div>
      <button onClick={handleLikeClick} className={save3.save3btn}>
        찜하기
      </button>
    </div>
  );
};

export default Save3;
