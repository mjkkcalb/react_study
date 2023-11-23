import React, { useRef, useState } from "react";

const FriendsAdd = ({ onAdd }) => {
  const focusRef = useRef();
  const [form, setForm] = useState({
    name: "",
    age: "",
    image: "",
  });

  const { name, age, image } = form;

  const changeInput = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    //리액트에서 데이터 전송 -> 새로고침 화면 초기값으로 설정
    e.preventDefault(); // 초기값 초기화
    if (!name || !age || !image) {
      alert("내용을 입력해주세요");
      return;
    }
    onAdd(form);
    setForm({ name: "", age: "", image: "" });
    focusRef.current.focus();
  };

  return (
    <div>
      <h2>고양이 입력 폼</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">이름</label>
        <input
          type="text"
          id="catName"
          value={name}
          name="name"
          onChange={changeInput}
          ref={focusRef}
        />
        <p>
          <label htmlFor="">나이</label>
          <input
            type="number"
            id="catAge"
            value={age}
            name="age"
            onChange={changeInput}
          />
        </p>
        <p>
          <label htmlFor="">사진 url :</label>
          <input
            type="text"
            id="catImg"
            value={image}
            name="image"
            onChange={changeInput}
          />
        </p>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default FriendsAdd;
