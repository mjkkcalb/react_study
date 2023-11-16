import React, { useState } from "react";
import Ex3Modal from "./Ex3Modal";

const Ex3State = () => {
  const [isOpen, setIsOpen] = useState(false); //초기값은 보통 false - 상황에 따라 달라짐

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="borderTop">
      <h2>Ex3 - state</h2>
      <button onClick={onOpen}>모달창 열기</button>
      {isOpen && <Ex3Modal onClose={onClose} />}
      {/* <Ex3Modal onClose={onClose}  Ex3Model 컴포넌트에 props(속성) 전달 */}
    </section>
  );
};

export default Ex3State;
