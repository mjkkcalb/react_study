import React from "react";

const Step4 = ({ data }) => {
  const { userName } = data;

  return (
    <div>
      <h2>{userName}님</h2>
      <h3>설문조사 감사합니다.</h3>
    </div>
  );
};

export default Step4;
