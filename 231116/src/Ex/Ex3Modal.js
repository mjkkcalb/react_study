import React from "react";

const Ex3Modal = ({ onClose }) => {
  const modalStyle = {
    border: "1px solid #000",
    width: 200,
    position: "fixed",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#fff",
  };

  return (
    <div style={modalStyle}>
      <h2>모달창 띄우기</h2>
      <p onClick={onClose}>닫기</p>
    </div>
  );
};

export default Ex3Modal;
