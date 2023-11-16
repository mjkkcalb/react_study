import React from "react";
import Ex2sub from "./Ex2sub";

const Ex2 = () => {
  const latte = { name: "카페라떼", price: 4000 };

  return (
    <div className="borderTop">
      <h2>pros 연습 2</h2>
      <Ex2sub name="아메리카노" price="3000" />
      <Ex2sub name={latte.name} price={latte.price} />
      <Ex2sub {...latte} />
    </div>
  );
};

export default Ex2;

//새로운 js 문서 작성
//커피 : 카페라떼
//가격 : 4000
