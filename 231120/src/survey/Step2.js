import React from "react";

const Step2 = ({
  changeInput,
  onPrev,
  onNext,
  userJob,
  userEmail,
  userGender,
  userInter,
}) => {
  return (
    <div>
      <p>
        <label for="userJob">작업: </label>
        <input
          type="text"
          id="userJob"
          //부모 컨포넌트에서 받은 값
          value={userJob}
          name="userJob"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userEmail">이메일: </label>
        <input
          type="text"
          id="userEmail"
          value={userEmail}
          name="userEmail"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userGender">성별: </label>
        <input
          type="text"
          id="userGender"
          value={userGender}
          name="userGender"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userInter">관심분야: </label>
        <input
          type="text"
          id="userInter"
          value={userInter}
          name="userInter"
          onChange={changeInput}
        />
      </p>
      <button onClick={onPrev}>이전</button>
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default Step2;
