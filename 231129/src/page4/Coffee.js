import React from "react";
import { useParams } from "react-router-dom";
import History from "../page6/History";

const Coffee = () => {
  const data = {
    americano: { name: "아메리카노", price: 4000 },
    latte: { name: "카페라떼", price: 5000 },
    espresso: { name: "에스프레소", price: 3000 },
  };

  const { menuname } = useParams();
  const coffee = data[menuname];
  return (
    <div>
      <h3>커피 :{coffee.name}</h3>
      <h3>가격 :{coffee.price}</h3>
      <History />
    </div>
  );
};

export default Coffee;
