import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../LocalStorage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import save1 from "./searchSave.module.css";
import StarRatings from "react-star-ratings";

const Save1 = ({ bookInfo }) => {
  const navigate = useNavigate();
  const [isResetClicked, setResetClicked] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("읽은 책");

  const handleSaveClick = () => {
    try {
      const savedBooks1 = LocalStorageService.getItem("savedBooks1") || [];
      const isAlreadySaved = LocalStorageService.isBookAlreadySaved(bookInfo);

      if (!isAlreadySaved) {
        const savedData = {
          id: uuidv4(),
          ...bookInfo,
          startDate,
          endDate,
          rangeValue,
          category: selectedOption,
        };

        savedBooks1.push(savedData);
        LocalStorageService.setItem("savedBooks1", savedBooks1);

        setResetClicked(false);
        navigate("/mybook", { state: { bookInfo: savedData } });
      } else {
        console.log("이 책은 이미 저장되어 있습니다.");
      }
    } catch (error) {
      console.error("책을 저장하는 동안 오류가 발생했습니다", error);
    }
  };

  return (
    <div className={save1.save1}>
      <div className={save1.left}>
        <div>
          <h3>독서기간</h3>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={save1.save1inputdate}
          />
        </div>
        <div>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={save1.save1inputdate}
          />
        </div>
      </div>

      <div className={save1.save1star}>
        <StarRatings
          rating={rangeValue} // rangeValue를 rating으로 전달
          starRatedColor="#fffca9"
          starHoverColor="#fffca9"
          starDimension="2rem"
          starSpacing="0.1rem"
          changeRating={(newRating) => setRangeValue(newRating)}
        />
      </div>

      <p className={save1.save1startxt}>평점을 남겨주세요</p>
      <button onClick={handleSaveClick} className={save1.save1btn}>
        저장하기
      </button>
    </div>
  );
};

export default Save1;
