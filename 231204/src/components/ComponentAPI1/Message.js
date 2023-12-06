import React from "react";

const Message = ({ lang }) => {
  return (
    <div>
      {lang === "en" ? (
        <p>{lang}: context is ....</p>
      ) : (
        <p>컨텍스트는 .... 입니다</p>
      )}
    </div>
  );
};

export default Message;
