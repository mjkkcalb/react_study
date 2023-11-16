import React, { useState } from "react";

const State5From = () => {
  //내용이 입력될 때마다 상태를 감지할 수 있게
  const [txt, setTxt] = useState("");
  //내용이 추가 될 때마다 상태를 감지할 수 있게
  const [data, setData] = useState([]);

  //사용자가 입력하는 값을 받아 다시 사용할 수 있게 txt로 반환
  const listItem = (evt) => {
    //const val = evt.target.value;
    const { value } = evt.target;
    setTxt(value);
  };

  //내용 추가 함수
  const addItems = () => {
    // setData((prevItem) => {
    //   return [...prevItem, { id: prevItem.length, name: txt }];
    // });
    if (txt === "") {
      alert("내용을 작성해 주세요");
      return; // 리턴 앞으로 식을 입력해야만 다시 빠져 나와 식이 이어질 수 있다
    }
    setData((prevItem) => [...prevItem, { id: prevItem.length, text: txt }]);
    setTxt(""); // 입력 후 입력창 리셋 시키기
  };

  return (
    <section className="borderTop">
      <h2>state</h2>
      {/* onChange 텍스트 필드값이 변경될 때마다 함수 listItem 실행 */}
      <input
        type="text"
        value={txt}
        onChange={listItem}
        placeholder="내용을 입력해주세요"
      />
      <button style={{ marginLeft: 10 }} onClick={addItems}>
        추가
      </button>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default State5From;