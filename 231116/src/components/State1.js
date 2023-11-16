import React, { useState } from "react";

const State1 = () => {
  const [name, setName] = useState("메뉴");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("#eee");

  const onCoffee1 = () => setName("아메리카노"); //setName("매게변수")
  const onCoffee2 = () => setName("카페라떼");
  const onCoffee3 = () => setName("프라푸치노");

  const onColor1 = () => setColor("orange");
  const onColor2 = () => setColor("tomato");
  const onColor3 = () => setColor("lightblue");
  return (
    <div>
      <h2 className="borderTop">State1 - 상태</h2>
      <h3 style={{ backgroundColor: color, width: "400px" }}>
        커피: {name} / 가격: {price}/ 색상: {color}
      </h3>
      <p>
        <button onClick={onCoffee1}>아메리카노</button>
        <button onClick={onCoffee2}>카페라떼</button>
        <button onClick={onCoffee3}>프라푸치노</button>
      </p>
      <p>
        <button onClick={() => setPrice("4000")}>4000</button>
        <button onClick={() => setPrice("4500")}>4500</button>
        <button onClick={() => setPrice("5500")}>5500</button>
      </p>
      <p>
        <button onClick={onColor1}>orange</button>
        <button onClick={onColor2}>tomato</button>
        <button onClick={onColor3}>lightblue</button>
      </p>
    </div>
  );
};

export default State1;

/*
  state
    상태. 상태 변화를 위해 사용되는 hook
    랜더링이 될 때마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
    새롭게 재랜더링되어 함수, 변수 등 다시 초기화 됨
    그래서 값을 유지하기 위해 hook을 사용
    상태 갓ㅂ이 변경되는 경우 useState()

    const[state, setState] = useState(초기값);
    const[상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
    초기값: 숫자, 문자, 논리, 배열, 객체 등등

*/
