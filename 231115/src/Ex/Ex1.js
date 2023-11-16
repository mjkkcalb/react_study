import React from "react";

const Coffee = ({ name, price }) => {
  return (
    <>
      <li>
        주문하신 커피는 {name}이며 가격은 {price}입니다
      </li>
    </>
  );
};

const Ex1 = () => {
  return (
    <div className="borderTop">
      <h2>pros 연습 1</h2>
      <ul>
        <Coffee name="아메리카노" price="4000" />
        <Coffee name="라떼" price="4500" />
        <Coffee name="바닐라라떼" price="5500" />
      </ul>
    </div>
  );
};

export default Ex1;

/*
  출력값
  '주문한 커피는 {}이며 가격은 {}원 입니다'

  아메리카노
  카페라떼
  바닐라라떼
*/
