import React, { useState } from "react";

const Ex6Form = () => {
  const [idtxt, setIdTxt] = useState("");
  const [pwtxt, setPwTxt] = useState("");

  const idItem = (evt) => {
    //const val = evt.target.value;
    const { value } = evt.target;
    setIdTxt(value);
  };

  const pwItem = (evt) => {
    //const val = evt.target.value;
    const { value } = evt.target;
    setPwTxt(value);
  };

  const addItems = () => {
    if (idtxt.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }
    if (pwtxt.length <= 8) {
      alert("비밀번호 9자리를 입력해주세요");
      return;
    }
    alert("로그인 되었습니다");
  };

  return (
    <section className="borderTop">
      <h2>Ex3 - state</h2>
      <p>비밀번호의 수가 8자 이하면 버튼 비활성화, 9자 이상이면 활성화</p>
      아이디 :{" "}
      <input
        type="text"
        value={idtxt}
        onChange={idItem}
        placeholder="아이디를 입력해주세요"
      />
      <br />
      비밀번호 :{" "}
      <input
        type="password"
        value={pwtxt}
        onChange={pwItem}
        placeholder="비밀번호를 입력해주세요"
      />
      <br />
      <button style={{ marginTop: 20, marginLeft: 10 }} onClick={addItems}>
        로그인
      </button>
    </section>
  );
};

export default Ex6Form;
