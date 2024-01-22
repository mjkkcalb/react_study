import React, { useState } from "react";
import LocalStorageService from "../../LocalStorage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import save2 from "./searchSave.module.css";

const Save2 = ({ bookInfo }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [readingPage, setReadingPage] = useState("");

  const handleSaveClick = () => {
    try {
      const savedBooks2 = LocalStorageService.getItem("savedBooks2") || [];
      const isAlreadySaved = LocalStorageService.isBookAlreadySaved(bookInfo);

      if (!isAlreadySaved) {
        const savedData = {
          id: uuidv4(),
          ...bookInfo,
          startDate,
          readingPage,
        };

        savedBooks2.push(savedData);
        LocalStorageService.setItem("savedBooks2", savedBooks2);

        navigate("/mybook", { state: { bookInfo: savedData } });
      } else {
        console.log("이 책은 이미 저장되어 있습니다.");
      }
    } catch (error) {
      console.error("책을 저장하는 동안 오류가 발생했습니다", error);
    }
  };

  return (
    <div className={save2.save2}>
      <div className={save2.left}>
        <div>
          <h3 className={save2.save2maintext}>독서기간</h3>
          <p className={save2.save2inputtext}>시작일</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={save2.save2inputdate}
          />
          <p className={save2.save2inputtext}>독서량</p>
          <input
            type="number"
            value={readingPage}
            onChange={(e) => setReadingPage(e.target.value)}
            className={save2.save2inputnum}
            placeholder="현재 읽고 계신 p를 작성해주세요"
          />
        </div>

        <button onClick={handleSaveClick} className={save2.save2btn}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default Save2;
