import React from "react";

const Title = ({ lang }) => {
  return (
    <div>
      <h2>{lang === "en" ? "context" : "컨텍스트"}</h2>
    </div>
  );
};

export default Title;
