import React from "react";

const Event1 = () => {
  function handleClick1() {
    console.log("handleClick1");
  }

  const handleClick2 = () => console.log("두번째 버튼");

  const num = (item) => {
    console.log(item + item);
  };

  return (
    <div>
      <h2>Event 1</h2>
      <h3>'on-' 접두어 + 첫글자 대문자인 이벤트명</h3>
      <p>
        {/* js: 'onclick', 'onsubmit' */}
        {/* JSX: 'onclick', 'onsubmit' */}
        {/* <button onClick={함수명}>클릭</button> */}
        {/* <botton onClick={function () {}}>복잡</botton>*/}
        <button onClick={handleClick1}>클릭</button>
        <button onClick={handleClick2}>클릭</button>
      </p>
      <p>
        <button
          onClick={() => {
            console.log("직접 작성");
          }}>
          직접 작성
        </button>
      </p>
      <p>
        {/* 함수를 만들고 매게변수로 100입력-> 100+100 -> 200콘솔 출력 */}
        {/* 
          {num()} 함수 즉시 호출. 처음부터 실행
          {() => 함수면(인자)} 버튼을 클릭하면 호출
             
        <button onClick={num(100)}>숫자 출력</button> */}
        <button onClick={() => num(100)}>숫자 출력</button>
      </p>
    </div>
  );
};

export default Event1;
