import React from "react";

const Step1 = ({ changeInput, data, onNext }) => {
  const { userName, userAge, userAddr, userTel } = data;
  return (
    <div>
      <p>
        <label for="userName">이름: </label>
        <input
          type="text"
          id="userName"
          //부모 컨포넌트에서 받은 값
          value={userName}
          name="userName"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userAge">나이: </label>
        <input
          type="text"
          id="userAge"
          value={userAge}
          name="userAge"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userAddr">주소: </label>
        <input
          type="text"
          id="userAddr"
          value={userAddr}
          name="userAddr"
          onChange={changeInput}
        />
      </p>
      <p>
        <label for="userTel">연락처: </label>
        <input
          type="text"
          id="userTel"
          value={userTel}
          name="userTel"
          onChange={changeInput}
        />
      </p>
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default Step1;
