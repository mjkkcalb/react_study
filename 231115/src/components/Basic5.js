import React from "react";

const Basic5 = () => {
  const done1 = true;
  const done2 = false;
  const done3 = undefined;

  return (
    <main className="borderTop">
      <h2>삼항연산자</h2>
      <p>
        {/* 참인 경우 true 버튼이, 거짓일 때 false 버튼이 보이게 */}
        {done1 === true ? <button>true</button> : <button>false</button>}
      </p>
      <h2>논리연산자 &&</h2>
      <p>
        {done1 && <button>A의 조건이 참인 경우 이 버튼이 나타납니다</button>}
      </p>
      <h2>논리연산자 ||</h2>
      <p>{done1 || <button>A 조건이 거짓인 경우</button>}</p>
      {/* or 연산자의 경우 아프이 조건이 거짓이어야 뒤의 값이 출력*/}
      <p>{done2 || <button>A 조건이 거짓인 경우</button>}</p>

      <h2>undefined ||</h2>
      <p>{done3 || <strond>내용을 찾을 수 없습니다</strond>}</p>
    </main>
  );
};

export default Basic5;
